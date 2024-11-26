import { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import IQTitle from "@/components/IQTitle";
import IQFooter from "@/components/IQFooter";
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
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#A0A0A0]">
        <StatusBar
          animated={true}
          backgroundColor="#A0A0A0"
        />
        <View className="flex-1 justify-center items-center bg-[#e0f1fe]" >
          <IQTitle />
          {
            quoteOfTheDay && <IQCard quote={quoteOfTheDay.quote} />
          }
          <IQFooter />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
