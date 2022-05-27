import { CsvData, CsvRow, RacerGender, RacerInfoMap } from "../../types";
import { parse } from "papaparse";

export const buildRacerInfoLookup = (csvData: CsvData) => {
  const parsedRacerInfo = parse<CsvRow>(csvData).data;

  const parsedRacerInfoObj = parsedRacerInfo.map(([racerId, name, gender]) => {
    return {
      racerId,
      name,
      gender: gender as unknown as RacerGender,
    };
  });

  return parsedRacerInfoObj.reduce((racerInfoMap, item) => {
    racerInfoMap[item.racerId] = item;

    return racerInfoMap;
  }, {} as RacerInfoMap);
};
