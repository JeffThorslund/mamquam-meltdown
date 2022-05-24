import { buildResults } from "./index";

test("empty lists", () => {
  expect(buildResults("", "")).toEqual({});
});

test("one racer start and end", () => {
  expect(buildResults("1,1", "1,2")).toEqual({
    1: [{ startTime: 1, endTime: 2 }],
  });
});
