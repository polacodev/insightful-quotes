export const fetchQuoteOfTheDay = async () => {
  const data = await fetch('https://favqs.com/api/qotd');
  const json = await data.json();
  return json;
};
