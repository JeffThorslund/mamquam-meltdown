import { DateTime } from "luxon";

export const formatUnixSecondsToTime = (unixTimestamp: number): string =>
  DateTime.fromSeconds(Number(unixTimestamp), {
    zone: "utc",
  }).toLocaleString(DateTime.TIME_WITH_SECONDS);
