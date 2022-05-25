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
