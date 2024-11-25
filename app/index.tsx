import { useEffect, useState } from "react";
import { View } from "react-native";

import IQCard from "@/components/IQCard";
import { fetchQuoteOfTheDay } from "@/lib/quote";
import { QuoteOfTheDay } from "@/interfaces/quote";

import "@/global.css";

export default function Index() {
  const [quoteOfTheDay, setQuoteOfTheDay] = useState<QuoteOfTheDay | null>(null);

  useEffect(() => {
    const getQuoteOfTheDay = async () => {
      try {
        const data = await fetchQuoteOfTheDay();
        setQuoteOfTheDay(data);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    };
    getQuoteOfTheDay();
  }, []);

  return (
    <View className="flex-1 justify-center items-center" >
      {
        quoteOfTheDay && <IQCard quote={quoteOfTheDay.quote} />
      }
    </View>
  );
};
