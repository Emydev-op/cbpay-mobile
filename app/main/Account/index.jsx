import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { TextBold } from "../../../components/ThemeText";
import { colorPalette } from "../../../constant/color";
import WalletCard from "../../../components/WalletCard";

export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="px-4 py-4">
        <TextBold style={{ color: colorPalette.primary, fontSize: 25 }}>
          Account
        </TextBold>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
        <View className="px-4 mb-6">
          <TextBold
            className="mb-2 text-sm"
            style={{ color: colorPalette.gray1 }}
          >
            Default Account
          </TextBold>

          <WalletCard
            accNumber="0987-6543-2810-7821"
            type="Smart Account"
            amount="₦24,600.00"
          />
        </View>
        <View className="px-4 pb-8">
          <TextBold
            className="mb-3 text-sm"
            style={{ color: colorPalette.gray1 }}
          >
            Others
          </TextBold>
          <WalletCard
            accNumber="0987-6543-2810-7821"
            type="Flexi Account"
            amount="₦723,000.00"
            otherClass="mb-4"
          />
          <WalletCard
            accNumber="0270-7710-3255"
            type="Mobile Pay"
            amount="₦1,034,000.00"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  card: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
