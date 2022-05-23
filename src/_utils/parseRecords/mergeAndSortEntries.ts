import { StartEntry, EndEntry, MixedEntry } from "../../types";

const mergeAndSortEntries = (
  starts: StartEntry[],
  ends: EndEntry[]
): MixedEntry[] => {
  return [...starts, ...ends].sort((a, b) => a.time - b.time);
};
export { mergeAndSortEntries };
