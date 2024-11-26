import React from "react";
import { View, Text } from "react-native";

const IQFooter = () => {
  return (
    <View className="justify-center items-center">
      <Text style={{ fontFamily: 'NunitoSans-Italic', fontSize: 10 }} className="text-xs text-center text-[#b0b0b0]">This application uses the FavQs API.</Text>
      <Text style={{ fontFamily: 'NunitoSans-Italic', fontSize: 10 }} className="text-xs text-center text-[#b0b0b0]">All rights belong to their respective owners</Text>
      <Text style={{ fontFamily: 'NunitoSans-Italic', fontSize: 8 }} className="text-xs text-[#b0b0b0]">@polacodev</Text>
    </View>
  );
};

export default IQFooter;
