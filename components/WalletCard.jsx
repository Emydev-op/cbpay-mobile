import { View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextBold, TextMedium } from "./ThemeText";
import React from "react";
import Barcode from "../assets/icon/barcode.svg";

export default function WalletCard({ accNumber, type, amount, otherClass }) {
  return (
    <LinearGradient
      colors={["#0055b2", "#002f94"]}
      end={{ x: 0.1, y: 0.7 }}
      className={`rounded-2xl px-6 py-7 ${otherClass}`}
      style={{
        elevation: 15,
        shadowColor: "rgba(0,47,148,50%)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}
    >
      <View className="flex-row justify-between">
        <TextMedium className="text-white text-lg mb-4">{accNumber}</TextMedium>
        <Pressable>
          <Barcode />
        </Pressable>
      </View>
      <TextBold className="text-white tracking-widest" style={{ fontSize: 26 }}>
        {amount}
      </TextBold>
      <TextMedium className="text-white text-base mt-2">{type}</TextMedium>
    </LinearGradient>
  );
}
