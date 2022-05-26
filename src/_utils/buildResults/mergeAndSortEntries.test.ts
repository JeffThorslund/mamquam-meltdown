import { mergeAndSortEntries } from "./mergeAndSortEntries";
import { StartEntry, EndEntry, MixedEntry, EntryType } from "../../types";

describe("merging", () => {
  test("merge empty lists", () => {
    expect(mergeAndSortEntries([], [])).toEqual([]);
  });

  test("merge only starts", () => {
    const starts: StartEntry[] = [
      { racerId: "1", time: 1, type: EntryType.START },
      { racerId: "2", time: 2, type: EntryType.START },
    ];

    const ends: EndEntry[] = [];

    const expected: MixedEntry[] = [
      { racerId: "1", time: 1, type: EntryType.START },
      { racerId: "2", time: 2, type: EntryType.START },
    ];

    expect(mergeAndSortEntries(starts, ends)).toEqual(expected);
  });

  test("merge only ends", () => {
    const ends: EndEntry[] = [
      { racerId: "1", time: 1, type: EntryType.END, missedGates: 1 },
      { racerId: "2", time: 2, type: EntryType.END, missedGates: 2 },
    ];

    const starts: StartEntry[] = [];

    const expected: MixedEntry[] = [
      { racerId: "1", time: 1, type: EntryType.END, missedGates: 1 },
      { racerId: "2", time: 2, type: EntryType.END, missedGates: 2 },
    ];

    expect(mergeAndSortEntries(starts, ends)).toEqual(expected);
  });

  test("merge starts and ends", () => {
    const starts: StartEntry[] = [
      { racerId: "1", time: 1, type: EntryType.START },
      { racerId: "2", time: 3, type: EntryType.START },
    ];

    const ends: EndEntry[] = [
      { racerId: "1", time: 2, type: EntryType.END, missedGates: 1 },
      { racerId: "2", time: 4, type: EntryType.END, missedGates: 1 },
    ];

    const expected: MixedEntry[] = [
      { racerId: "1", time: 1, type: EntryType.START },
      { racerId: "1", time: 2, type: EntryType.END, missedGates: 1 },
      { racerId: "2", time: 3, type: EntryType.START },
      { racerId: "2", time: 4, type: EntryType.END, missedGates: 1 },
    ];

    expect(mergeAndSortEntries(starts, ends)).toEqual(expected);
  });
});
