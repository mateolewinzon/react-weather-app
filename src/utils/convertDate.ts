import { unix } from "moment";

export const getDayAndMonth = (time: EpochTimeStamp): string => {
  const date = unix(time).format("DD/MM");
  return date;
};
