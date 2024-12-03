import { render } from "@testing-library/react-native";

import IQFooter from "@/components/IQFooter";

describe("<IQFooter />", () => {
  test("IQFooter renders correctly the texts and Snapshot", () => {
    const { getByText, toJSON } = render(<IQFooter />);
    const text1 = getByText("This application uses the FavQs API.")
    const text2 = getByText("All rights belong to their respective owners")
    const text3 = getByText("@polacodev")

    expect(text1).toBeTruthy();
    expect(text2).toBeTruthy();
    expect(text3).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
