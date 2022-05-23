import { parseRecords } from "./index";
import { mergeAndSortEntries } from "./mergeAndSortEntries";
import { createResults } from "./createMaps";
import {
  EndEntry,
  Entry,
  EntryType,
  MixedEntry,
  StartEntry,
} from "../../types";
import { parseAndTypeEntries } from "./parseAndTypeEntries";

test("empty lists", () => {
  expect(parseRecords("", "")).toEqual({});
});

test("one racer start and end", () => {
  expect(parseRecords("1,1", "1,2")).toEqual({
    1: [{ startTime: 1, endTime: 2 }],
  });
});

// // test variables
// const emptyStarts: Entry[] = [];
// const emptyEnds: Entry[] = [];
//
// describe("timing", () => {
//   test("both empty lists", () => {
//     const expected = {};
//     expect(parseRecords(emptyStarts, emptyEnds)).toEqual(expected);
//   });
//
//   test("normal runs", () => {
//     const normalStarts = [
//       { racerId: "1", time: 1 },
//       { racerId: "2", time: 3 },
//     ];
//     const normalEnds = [
//       { racerId: "1", time: 2 },
//       { racerId: "2", time: 4 },
//     ];
//
//     const expected = {
//       "1": [
//         {
//           endTime: 2,
//           startTime: 1,
//         },
//       ],
//       "2": [
//         {
//           endTime: 4,
//           startTime: 3,
//         },
//       ],
//     };
//
//     expect(parseRecords(normalStarts, normalEnds)).toEqual(expected);
//   });
//
//   test("include did not finish", () => {
//     const normalStarts = [
//       { racerId: "1", time: 1 },
//       { racerId: "2", time: 3 },
//       { racerId: "1", time: 5 },
//     ];
//     const normalEnds = [
//       { racerId: "2", time: 4 },
//       { racerId: "1", time: 6 },
//     ];
//
//     const expected = {
//       "1": [
//         {
//           endTime: null,
//           startTime: 1,
//         },
//         {
//           endTime: 6,
//           startTime: 5,
//         },
//       ],
//       "2": [
//         {
//           endTime: 4,
//           startTime: 3,
//         },
//       ],
//     };
//
//     expect(parseRecords(normalStarts, normalEnds)).toEqual(expected);
//   });
//
//   test("include did not finish as last race", () => {
//     const normalStarts = [
//       { racerId: "1", time: 1 },
//       { racerId: "2", time: 3 },
//     ];
//     const normalEnds = [{ racerId: "2", time: 4 }];
//
//     const expected = {
//       "1": [
//         {
//           endTime: null,
//           startTime: 1,
//         },
//       ],
//       "2": [
//         {
//           endTime: 4,
//           startTime: 3,
//         },
//       ],
//     };
//
//     expect(parseRecords(normalStarts, normalEnds)).toEqual(expected);
//   });
//
//   test("did not start", () => {
//     const missingStarts = [{ racerId: "2", time: 3 }];
//     const normalEnds = [
//       { racerId: "2", time: 4 },
//       { racerId: "1", time: 6 },
//     ];
//
//     const expected = {
//       "1": [
//         {
//           endTime: 6,
//           startTime: null,
//         },
//       ],
//       "2": [
//         {
//           endTime: 4,
//           startTime: 3,
//         },
//       ],
//     };
//
//     expect(parseRecords(missingStarts, normalEnds)).toEqual(expected);
//   });
//
//   test("racer got passed", () => {
//     const missingStarts = [
//       { racerId: "1", time: 1 },
//       { racerId: "2", time: 2 },
//     ];
//     const normalEnds = [
//       { racerId: "2", time: 3 },
//       { racerId: "1", time: 4 },
//     ];
//
//     const expected = {
//       "1": [
//         {
//           endTime: 4,
//           startTime: 1,
//         },
//       ],
//       "2": [
//         {
//           endTime: 3,
//           startTime: 2,
//         },
//       ],
//     };
//
//     expect(parseRecords(missingStarts, normalEnds)).toEqual(expected);
//   });
// });
//
// test("create races structure", () => {
//   const startInstances = [
//     {
//       racerId: "1",
//       time: 123,
//       type: EntryType.START,
//     },
//     {
//       racerId: "2",
//       time: 456,
//       type: EntryType.START,
//     },
//   ];
//
//   const expectedBaseObject = { 1: [], 2: [] };
//
//   expect(createResults(startInstances)).toEqual(expectedBaseObject);
// });
//

//
// describe("parse and type", () => {
//   expect(parseAndTypeEntries("1,123", EntryType.START)).toEqual([
//     { racerId: "1", time: 123, type: EntryType.START },
//   ]);
// });
