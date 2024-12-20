import React from "react";
import { View, Text } from "react-native";

import IQIcon from "@/components/IQIcon";
import { Quote } from "@/interfaces/quote";

interface IQCardProps {
  quote: Quote;
};

const IQCard = ({ quote }: IQCardProps) => {
  return (
    <View className=" w-[100%] justify-center items-center pt-6 pb-6">
      <View className="w-[85%] bg-[#ffffff] dark:bg-[#181a1b] rounded-xl p-5 gap-4 border border-gray-200 dark:border-[#414749]">
        <View className="items-center gap-4">
          <Text style={{ fontFamily: 'NunitoSans-Variable', fontSize: 16 }} className="text-center dark:text-[#ffffff]">"{quote.body}"</Text>
          <Text style={{ fontFamily: 'NunitoSans-Medium', fontSize: 18 }} className="dark:text-[#dcdcdc]">—{quote?.author}</Text>
          {quote.tags.length > 0 && <Text style={{ fontFamily: 'NunitoSans-Italic', fontSize: 12 }} className="dark:text-[#dcdcdc]">{quote.tags.join(", ")}</Text>}
        </View>
        <View className="flex-row justify-center items-center gap-4 ">
          <View className="flex-col justify-center items-center">
            <IQIcon iconName="heart-dislike-outline" color="#a11313" />
            <Text className="dark:text-[#dcdcdc]">
              {quote.downvotes_count}
            </Text>
          </View>
          <View className="flex-col justify-center items-center">
            <IQIcon iconName="heart-outline" color="#ff2323" />
            <Text className="dark:text-[#dcdcdc]">
              {quote.upvotes_count}
            </Text>
          </View>
          <View className="flex-col justify-center items-center">
            <IQIcon iconName="star-outline" color="#dbd417" />
            <Text className="dark:text-[#dcdcdc]">
              {quote.favorites_count}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default IQCard;
