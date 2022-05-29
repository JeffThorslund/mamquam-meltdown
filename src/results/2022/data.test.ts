import { advanced, beginner } from "./data";
import { parse } from "papaparse";
import { CsvRow } from "../../types";

// advanced starts
const advancedStarts = parse<CsvRow>(advanced.starts).data;
describe.each(advancedStarts)("are advanced starts valid", function (id, time) {
  const numberOfArgs = arguments.length;

  test("only 2 entries per line", () => {
    expect(numberOfArgs).toBe(2);
  });

  test(`id, ${id}, is a parsable number`, () => {
    expect(isNaN(+id)).toBe(false);
  });

  test(`time, ${time} is a parsable number`, () => {
    expect(isNaN(+time)).toBe(false);
  });

  test(`time, ${time}, is or is between 0 and 1`, () => {
    expect(+time < 0 || +time > 1).toBe(false);
  });
});
