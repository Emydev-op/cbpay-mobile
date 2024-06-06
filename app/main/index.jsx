import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import TextRegular, { TextBold, TextMedium } from "../../components/ThemeText";
import { colorPalette } from "../../constant/color";
import { LinearGradient } from "expo-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import React, { useState } from "react";

// icons
import Bell from "../../assets/icon/bell.svg";
import Barcode from "../../assets/icon/barcode.svg";
import Transfer from "../../assets/icon/transfer.svg";
import Topup from "../../assets/icon/topup.svg";
import Bill from "../../assets/icon/bill.svg";
import Request from "../../assets/icon/request.svg";
import Withdraw from "../../assets/icon/withdraw.svg";
import Download from "../../assets/icon/download.svg";
import Internet from "../../assets/icon/internet.svg";
import Expense from "../../assets/icon/expense.svg";

const options = [
  { name: "Transfer", icon: <Transfer /> },
  { name: "Topup", icon: <Topup /> },
  { name: "Pay Bill", icon: <Bill /> },
  { name: "Request", icon: <Request /> },
  { name: "Withdraw", icon: <Withdraw /> },
];

const transactions = [
  {
    name: "Mobile Topup",
    icon: <Topup />,
    date: "Mar 27, 2024",
    time: "11:04 AM",
    amount: "13,000",
    status: "debit",
  },
  {
    name: "James",
    icon: <Download />,
    date: "Mar 27, 2024",
    time: "11:04 AM",
    amount: "13,000",
    status: "credit",
  },
  {
    name: "BRT Ticket",
    icon: <Expense />,
    date: "Mar 27, 2024",
    time: "11:04 AM",
    amount: "13,000",
    status: "debit",
  },
  {
    name: "Airtel",
    icon: <Topup />,
    date: "Mar 27, 2024",
    time: "11:04 AM",
    amount: "13,000",
    status: "debit",
  },
  {
    name: "Sophia",
    icon: <Download />,
    date: "Mar 27, 2024",
    time: "11:04 AM",
    amount: "13,000",
    status: "credit",
  },
  {
    name: "IKEC",
    icon: <Internet />,
    date: "Mar 27, 2024",
    time: "11:04 AM",
    amount: "13,000",
    status: "debit",
  },
  {
    name: "Glo",
    icon: <Topup />,
    date: "Mar 27, 2024",
    time: "11:04 AM",
    amount: "13,000",
    status: "debit",
  },
  {
    name: "Steve Paul",
    icon: <Expense />,
    date: "Mar 27, 2024",
    time: "11:04 AM",
    amount: "13,000",
    status: "debit",
  },

  {
    name: "Spotify",
    icon: <Internet />,
    date: "Mar 27, 2024",
    time: "11:04 AM",
    amount: "13,000",
    status: "debit",
  },
];

export default function index() {
  const [refresh, setRefresh] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row justify-between px-4 items-center py-4">
        <TextBold
          className=""
          style={{ color: colorPalette.primary, fontSize: 25 }}
        >
          CBPay
        </TextBold>
        <Pressable>
          <Bell />
        </Pressable>
      </View>
      <View className="px-4">
        <View className="flex-row justify-between mb-2 items-center">
          <TextBold
            className=" text-base"
            style={{ color: colorPalette.gray2 }}
          >
            Default Account
          </TextBold>
          <Pressable>
            <TextBold style={{ color: colorPalette.primary, fontSize: 14 }}>
              Change
            </TextBold>
          </Pressable>
        </View>

        <LinearGradient
          colors={["#0055b2", "#002f94"]}
          className="rounded-2xl px-6 py-7 shadow-lg"
          style={{
            elevation: 25,
            shadowColor: "rgba(0,47,148,50%)",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
          }}
        >
          <View className="flex-row justify-between">
            <TextMedium className="text-white text-lg mb-4">
              0987-6543-2810-7821
            </TextMedium>
            <Pressable>
              <Barcode />
            </Pressable>
          </View>
          <TextBold
            className="text-white tracking-widest"
            style={{ fontSize: 26 }}
          >
            ₦24,600.00
          </TextBold>
          <TextMedium className="text-white text-base mt-2">
            Smart Account
          </TextMedium>
        </LinearGradient>
      </View>

      <View
        className="flex-row gap-x-1 mx-4 justify-center"
        style={{ marginTop: hp(2.8) }}
      >
        {options.map((item) => (
          <TouchableOpacity
            key={item.name}
            className="justify-center items-center rounded-2xl space-y-1"
            style={{
              backgroundColor: colorPalette.primary2,
              paddingVertical: hp(1.5),
              width: "19%",
            }}
          >
            {item?.icon}
            <TextMedium style={{ color: colorPalette.primary, fontSize: 12 }}>
              {item?.name}
            </TextMedium>
          </TouchableOpacity>
        ))}
      </View>
      <View className="mb-2 mx-4 mt-4">
        <TextBold className="text-lg">Recent History</TextBold>
      </View>

      <FlatList
        data={transactions}
        className="mx-4"
        keyExtractor={(item) => item.name}
        onRefresh={() => {
          setRefresh(true);
          setTimeout(() => {
            setRefresh(false);
          }, 3000);
        }}
        refreshing={refresh}
        renderItem={({ item }) => (
          <View className="flex-row justify-between py-2">
            <View className="flex-row space-x-2">
              <View
                style={{
                  backgroundColor: colorPalette?.primary2,
                  width: 40,
                  height: 40,
                }}
                className="rounded-full justify-center items-center"
              >
                {item?.icon}
              </View>
              <View>
                <TextMedium
                  style={{ color: colorPalette?.gray1, fontSize: 10 }}
                >
                  {item?.date} | {item?.time}
                </TextMedium>
                <TextMedium style={{ fontSize: 16 }}>{item?.name}</TextMedium>
              </View>
            </View>
            <TextBold
              style={{
                fontSize: 18,
                color:
                  item?.status === "debit"
                    ? colorPalette.error
                    : colorPalette.success,
              }}
            >
              {item?.status === "debit" ? "-" : "+"} ₦{item?.amount}
            </TextBold>
          </View>
        )}
      />
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
