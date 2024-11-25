import React from "react";
import { View, Text } from "react-native";

import IQTitle from "@/components/IQTitle";
import IQIcon from "@/components/IQIcon";
import { Quote } from "@/interfaces/quote";

interface IQCardProps {
  quote: Quote;
};

const IQCard = ({ quote }: IQCardProps) => {
  return (
    <View
      className="flex-1 p-5"
    >
      <IQTitle />
      <View className="flex-1 justify-center items-center bg-[#ffffff] rounded-lg p-5" >
        <View className="flex-1 justify-evenly items-center">
          <Text className="text-[#7c7c7c] text-center">"{quote.body}"</Text>
          <Text>—{quote?.author}</Text>
          {quote.tags.length > 0 && <Text className="text-xs italic text-[#7c7c7c]">{quote.tags.join(", ")}</Text>}
        </View>
        <View className="flex-row gap-5 ">
          <View className="flex-col justify-center items-center">
            <IQIcon iconName="heart-dislike-outline" color="#a11313" />
            <Text>
              {quote.downvotes_count}
            </Text>
          </View>
          <View className="flex-col justify-center items-center">
            <IQIcon iconName="heart-outline" color="#ff2323" />
            <Text>
              {quote.upvotes_count}
            </Text>
          </View>
          <View className="flex-col justify-center items-center">
            <IQIcon iconName="star-outline" color="#dbd417" />
            <Text>
              {quote.favorites_count}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-1 items-center pt-10">
        <IQIcon iconName="share-social-outline" color="#000000" />
      </View>
    </View>
  );
};

export default IQCard;
