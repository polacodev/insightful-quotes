import { render, waitFor } from "@testing-library/react-native";
import { colorScheme } from "nativewind";
import React from "react";

import { fetchQuoteOfTheDay } from "@/lib/quote";
import Index from "@/app/index";

jest.mock("@/lib/quote", () => ({
  fetchQuoteOfTheDay: jest.fn(),
}));

jest.mock("@/global.css", () => { return this });

jest.mock("nativewind", () => {
  const actualNativewind = jest.requireActual("nativewind");
  return {
    ...actualNativewind,
    useColorScheme: jest.fn(() => ({
      setColorScheme: jest.fn(),
    })),
    colorScheme: {
      get: jest.fn(() => ({
        systemColorSchema: "light"
      })),
    }
  };
});

describe("<Index />", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("Index renders correctly and fetches the quote of the day and Snapshot", async () => {

    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
    const setMountStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setMountStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    (colorScheme.get as jest.Mock).mockImplementation(() => "light")

    const quote = {
      qotd_date: "2024-12-01T00:00:00.000+00:00",
      quote: {
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
    };

    (fetchQuoteOfTheDay as jest.Mock).mockReturnValue({
      data: quote,
    });

    const { toJSON } = render(<Index />);
    await waitFor(() => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it("Index renders correctly even the fetch fails and return an instance of Error", async () => {

    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
    const setMountStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setMountStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    (fetchQuoteOfTheDay as jest.Mock).mockRejectedValue(new Error("error message"));

    const tree = render(<Index />).toJSON();
    expect(tree?.type).toEqual("RNCSafeAreaProvider");
  });

  it("Index is rendered even the fetch fails", async () => {

    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
    const setMountStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setMountStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    (fetchQuoteOfTheDay as jest.Mock).mockRejectedValue("failed");

    const tree = render(<Index />).toJSON();
    expect(tree?.type).toEqual("RNCSafeAreaProvider");
  });
});
