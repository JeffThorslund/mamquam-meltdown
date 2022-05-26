import { CsvData, CsvRow } from "../../types";
import { parse } from "papaparse";

export function parseAndTypeEntries<MyEntryType>(
  csvData: CsvData,
  type: MyEntryType
) {
  const parsedEntryData = parse<CsvRow>(csvData).data;
  return parsedEntryData.map(([racerId, time], i) => {
    if (racerId === "") console.log(racerId, parsedEntryData);

    return {
      racerId,
      time: Number(time),
      type,
    };
  });
}

const getParsedData = (csvData: CsvData) => parse<CsvRow>(csvData).data;

export function parseStartEntries<MyEntryType>(
  csvData: CsvData,
  type: MyEntryType
) {
  const parsedData = getParsedData(csvData);
  return parsedData.map(([racerId, time]) => {
    return {
      racerId,
      time: Number(time),
      type,
    };
  });
}

export function parseEndEntries<MyEntryType>(
  csvData: CsvData,
  type: MyEntryType
) {
  const parsedData = getParsedData(csvData);
  return parsedData.map(([racerId, time, missedGates], i) => {
    return {
      racerId,
      time: Number(time),
      missedGates: Number(missedGates),
      type,
    };
  });
}
