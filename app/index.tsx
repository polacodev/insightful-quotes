import { useEffect, useState } from "react";
import { useColorScheme, colorScheme } from 'nativewind';
import { View, StatusBar, Appearance } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import IQTitle from "@/components/IQTitle";
import IQFooter from "@/components/IQFooter";
import IQCard from "@/components/IQCard";
import { fetchQuoteOfTheDay } from "@/lib/quote";
import { QuoteOfTheDay } from "@/interfaces/quote";

import "@/global.css";

export default function Index() {
  const [quoteOfTheDay, setQuoteOfTheDay] = useState<QuoteOfTheDay | null>(null);
  const sytemColorSchema = colorScheme.get();
  const { setColorScheme, } = useColorScheme();

  useEffect(() => {
    setColorScheme('system'); // Sync with system preference
  }, []);

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
      <SafeAreaView className="flex-1 bg-[#A0A0A0] dark:bg-[#111113]">
        <StatusBar
          animated={true}
          backgroundColor={sytemColorSchema === "dark" ? "#111113" : "#e0f1fe"}
        />
        <View className="flex-1 justify-center items-center bg-[#e0f1fe] dark:bg-[#121212]" >
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
