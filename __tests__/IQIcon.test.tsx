import { render } from "@testing-library/react-native";

import IQIcon from "@/components/IQIcon";

jest.mock("expo-font", () => ({
  useFonts: jest.fn(),
  isLoaded: jest.fn(),
  loadAsync: jest.fn(),
}));

describe("<IQIcon />", () => {
  test("IQIcon renders correctly and Snapshot", () => {
    const { toJSON } = render(<IQIcon iconName="star-outline" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
