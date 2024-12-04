import { fetchQuoteOfTheDay } from "@/lib/quote";

describe("Quote api", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("fetchQuoteOfTheDay returns the data successfully", async () => {
    const quote = {
      id: 590,
      dialogue: false,
      private: false,
      tags: [
        "funny",
        "work",
        "british",
        "writer"
      ],
      url: "https://favqs.com/quotes/douglas-adams/590-i-love-deadline-",
      favorites_count: 2,
      upvotes_count: 0,
      downvotes_count: 0,
      author: "Douglas Adams",
      author_permalink: "douglas-adams",
      body: "I love deadlines. I like the whooshing sound they make as they fly by."
    };

    fetch.mockResponseOnce(JSON.stringify({ data: quote }));

    const res = await fetchQuoteOfTheDay();

    expect(res.data).toEqual(quote);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
