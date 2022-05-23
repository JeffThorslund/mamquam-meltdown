import { parseAndTypeEntries } from "./parseAndTypeEntries";
import { EntryType } from "../../types";

test("empty strings", () => {
  expect(parseAndTypeEntries<EntryType.START>("", EntryType.START)).toEqual([]);
});

test("single start", () => {
  expect(parseAndTypeEntries<EntryType.START>("1,2", EntryType.START)).toEqual([
    { racerId: "1", time: 2, type: EntryType.START },
  ]);
});

test("single end", () => {
  expect(parseAndTypeEntries<EntryType.END>("1,2", EntryType.END)).toEqual([
    { racerId: "1", time: 2, type: EntryType.END },
  ]);
});

test("multiple starts", () => {
  expect(
    parseAndTypeEntries<EntryType.START>("1,2\n2,3\n3,4", EntryType.START)
  ).toEqual([
    {
      racerId: "1",
      time: 2,
      type: EntryType.START,
    },
    {
      racerId: "2",
      time: 3,
      type: EntryType.START,
    },
    {
      racerId: "3",
      time: 4,
      type: EntryType.START,
    },
  ]);
});

test("multiple ends", () => {
  expect(
    parseAndTypeEntries<EntryType.END>("1,2\n2,3\n3,4", EntryType.END)
  ).toEqual([
    {
      racerId: "1",
      time: 2,
      type: EntryType.END,
    },
    {
      racerId: "2",
      time: 3,
      type: EntryType.END,
    },
    {
      racerId: "3",
      time: 4,
      type: EntryType.END,
    },
  ]);
});
