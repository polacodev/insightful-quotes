import { FAV_QS_API } from "@/constants/constants";

export const fetchQuoteOfTheDay = async () => {
  const apiUrl = FAV_QS_API ?? "";
  const data = await fetch(apiUrl);
  const json = await data.json();
  return json;
};
