import { FAV_QS_API } from "@/constants/constants";

export const fetchQuoteOfTheDay = async () => {
  const data = await fetch(FAV_QS_API);
  const json = await data.json();
  return json;
};
