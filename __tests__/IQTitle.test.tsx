import { render } from "@testing-library/react-native";

import IQTitle from "@/components/IQTitle";

describe("<IQTitle />", () => {
  test("IQTitle renders correctly the title and Snapshot", () => {
    const { getByText, toJSON } = render(<IQTitle />);
    const title = getByText("Insightful Quotes")

    expect(title).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
