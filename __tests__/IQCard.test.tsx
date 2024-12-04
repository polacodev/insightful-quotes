import { render } from "@testing-library/react-native";

import IQCard from "@/components/IQCard";

jest.mock("expo-font", () => ({
  useFonts: jest.fn(),
  isLoaded: jest.fn(),
  loadAsync: jest.fn(),
}));

describe("<IQCard />", () => {
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
  }

  test("IQCard renders correctly the tags and Snapshot", () => {
    const { getByText, toJSON } = render(<IQCard quote={quote} />);

    const tags = getByText("funny, work, british, writer");

    expect(tags).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
