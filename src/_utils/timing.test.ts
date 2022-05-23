import {
  timing,
  createBaseResultsTrackingStructure,
  mergeLists,
} from "./timing";

test.skip("renders learn react link", () => {
  const start = [
    { id: "1", time: 123 },
    { id: "2", time: 123 },
  ];
  const end = [
    { id: "1", time: 123 },
    { id: "2", time: 123 },
  ];

  expect(timing(start, end)).toEqual({ "1": [], "2": [] });
});

test("base structure creation", () => {
  const startInstances = [
    {
      id: "1",
      time: 123,
    },
    {
      id: "2",
      time: 456,
    },
  ];

  const expectedBaseObject = { 1: [], 2: [] };

  expect(createBaseResultsTrackingStructure(startInstances)).toEqual(
    expectedBaseObject
  );
});

test("merge empty lists", () => {
  expect(mergeLists([], [])).toEqual([]);
});

interface Instance {
  id: string;
  time: number;
}

test("merge opnly starts", () => {
  const starts = [
    { id: "1", time: 1 },
    { id: "2", time: 2 },
  ];

  const ends: Instance[] = [];

  const expected = [
    { id: "1", time: 1, type: "start" },
    { id: "2", time: 2, type: "start" },
  ];

  expect(mergeLists(starts, ends)).toEqual(expected);
});
