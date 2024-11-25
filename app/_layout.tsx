import { Slot } from "expo-router";

import IQFooter from "@/components/IQFooter";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View className="flex-1 bg-[#dcfce8]">
      <Slot />
      <IQFooter />
    </View>
  );
};
