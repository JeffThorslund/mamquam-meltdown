import { parseRecords } from "./index";

test("empty lists", () => {
  expect(parseRecords("", "")).toEqual({});
});

test("one racer start and end", () => {
  expect(parseRecords("1,1", "1,2")).toEqual({
    1: [{ startTime: 1, endTime: 2 }],
  });
});
