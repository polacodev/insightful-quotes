export interface Quote {
  id: number;
  dialogue: boolean;
  private: boolean;
  tags: string[];
  url: string;
  favorites_count: number;
  upvotes_count: number;
  downvotes_count: number;
  author: string;
  author_permalink: string;
  body: string;
};

export interface QuoteOfTheDay {
  qotd_date: string;
  quote: Quote;
};
