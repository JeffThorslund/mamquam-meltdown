import { createRaces, createResults } from "./createMaps";
import { EntryType } from "../../types";

const singleRaceStartEntry = [{ racerId: "1", time: 1, type: EntryType.START }];
const singleRaceEndEntry = [{ racerId: "1", time: 1, type: EntryType.END }];
const multipleMixedRaceEntries = [
  { racerId: "1", time: 1, type: EntryType.START },
  { racerId: "2", time: 2, type: EntryType.START },
  { racerId: "1", time: 3, type: EntryType.END },
  { racerId: "2", time: 4, type: EntryType.END },
];

describe("create empty race tracking structure", () => {
  test("no entries", () => {
    expect(createRaces([])).toEqual({});
  });

  test("single start entry", () => {
    expect(createRaces(singleRaceStartEntry)).toEqual({ 1: undefined });
  });

  test("single end entry", () => {
    expect(createRaces(singleRaceEndEntry)).toEqual({ 1: undefined });
  });

  test("multiple mixed entries", () => {
    expect(createRaces(multipleMixedRaceEntries)).toEqual({
      1: undefined,
      2: undefined,
    });
  });
});

describe("create empty result tracking structure", () => {
  test("no entries", () => {
    expect(createResults([])).toEqual({});
  });

  test("single start entry", () => {
    expect(createResults(singleRaceStartEntry)).toEqual({ 1: [] });
  });

  test("single end entry", () => {
    expect(createResults(singleRaceEndEntry)).toEqual({ 1: [] });
  });

  test("multiple mixed entries", () => {
    expect(createResults(multipleMixedRaceEntries)).toEqual({ 1: [], 2: [] });
  });
});
