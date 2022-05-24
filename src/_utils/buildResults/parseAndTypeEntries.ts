import { CsvData, CsvRow } from "../../types";
import { parse } from "papaparse";

export function parseAndTypeEntries<MyEntryType>(
  csvData: CsvData,
  type: MyEntryType
) {
  const parsedEntryData = parse<CsvRow>(csvData).data;
  return parsedEntryData.map(([racerId, time]) => {
    return {
      racerId,
      time: Number(time),
      type,
    };
  });
}
