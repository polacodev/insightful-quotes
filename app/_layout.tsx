import { useEffect } from "react";
import { Slot } from "expo-router";

import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
    "NunitoSans-Variable": require("../assets/fonts/NunitoSans-Variable.ttf"),
    "NunitoSans-Italic": require("../assets/fonts/NunitoSans-Italic.ttf"),
    "NunitoSans-Medium": require("../assets/fonts/NunitoSans_7pt_Condensed-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <View className="flex-1">
      <Slot />
    </View>
  );
};
