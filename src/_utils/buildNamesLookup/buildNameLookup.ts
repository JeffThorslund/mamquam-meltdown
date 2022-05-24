import { CsvData, CsvRow, NameLookup } from "../../types";
import { parse } from "papaparse";

export const buildNameLookup = (csvData: CsvData) => {
  const parsedData = parse<CsvRow>(csvData).data;

  return parsedData.reduce((acc, [racerId, name]) => {
    acc[racerId] = name;

    return acc;
  }, {} as NameLookup);
};
