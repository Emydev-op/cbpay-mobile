import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Pressable,
  SectionList,
} from "react-native";
import React from "react";
import { TextBold, TextMedium } from "../../../../components/ThemeText";
import { colorPalette } from "../../../../constant/color";

// icons
import FilterIcon from "../../../../assets/icon/filter.svg";
import Topup from "../../../../assets/icon/topup.svg";
import Download from "../../../../assets/icon/download.svg";
import Internet from "../../../../assets/icon/internet.svg";
import Expense from "../../../../assets/icon/expense.svg";

const transactions = [
  {
    month: "June 2024",
    data: [
      {
        name: "IKEC",
        icon: <Internet />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "11,400",
        status: "debit",
      },
      {
        name: "Glo",
        icon: <Topup />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "800",
        status: "debit",
      },
    ],
  },
  {
    month: "May 2024",
    data: [
      {
        name: "BRT Ticket",
        icon: <Expense />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "900",
        status: "debit",
      },
      {
        name: "Airtel",
        icon: <Topup />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "2,500",
        status: "debit",
      },
      {
        name: "Sophia",
        icon: <Download />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "42,000",
        status: "credit",
      },
    ],
  },
  {
    month: "April 2024",
    data: [
      {
        name: "IKEC",
        icon: <Internet />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "11,400",
        status: "debit",
      },
      {
        name: "Glo",
        icon: <Topup />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "800",
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
        amount: "900",
        status: "debit",
      },
    ],
  },
  {
    month: "March 2024",
    data: [
      {
        name: "Mobile Topup",
        icon: <Topup />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "2,000",
        status: "debit",
      },
      {
        name: "James",
        icon: <Download />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "210,000",
        status: "credit",
      },
      {
        name: "BRT Ticket",
        icon: <Expense />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "900",
        status: "debit",
      },
      {
        name: "Airtel",
        icon: <Topup />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "2,500",
        status: "debit",
      },
    ],
  },
  {
    month: "Feburary 2024",
    data: [
      {
        name: "Zenith Bank",
        icon: <Download />,
        date: "Mar 27, 2024",
        time: "09:21 PM",
        amount: "21,000",
        status: "credit",
      },
      {
        name: "BRT Ticket",
        icon: <Expense />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "900",
        status: "debit",
      },
      {
        name: "James",
        icon: <Download />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "73,000",
        status: "credit",
      },
      {
        name: "Airtel",
        icon: <Topup />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "2,500",
        status: "debit",
      },
    ],
  },
  {
    month: "January 2024",
    data: [
      {
        name: "Zenith Bank",
        icon: <Download />,
        date: "Mar 27, 2024",
        time: "09:21 PM",
        amount: "21,000",
        status: "credit",
      },
      {
        name: "BRT Ticket",
        icon: <Expense />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "900",
        status: "debit",
      },
      {
        name: "James",
        icon: <Download />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "73,000",
        status: "credit",
      },
      {
        name: "Airtel",
        icon: <Topup />,
        date: "Mar 27, 2024",
        time: "11:04 AM",
        amount: "2,500",
        status: "debit",
      },
    ],
  },
];

const TransactionCard = ({ item }) => (
  <View className="flex-row justify-between py-2 mx-4">
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
        <TextMedium style={{ color: colorPalette?.gray1, fontSize: 10 }}>
          {item?.date} | {item?.time}
        </TextMedium>
        <TextMedium style={{ fontSize: 16 }}>{item?.name}</TextMedium>
      </View>
    </View>
    <TextBold
      style={{
        fontSize: 18,
        color:
          item?.status === "debit" ? colorPalette.error : colorPalette.success,
      }}
    >
      {item?.status === "debit" ? "-" : "+"} ₦{item?.amount}
    </TextBold>
  </View>
);

export default function History() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row justify-between px-4 items-center py-4">
        <TextBold style={{ color: colorPalette.primary, fontSize: 25 }}>
          History
        </TextBold>
        <Pressable>
          <FilterIcon />
        </Pressable>
      </View>
      <SectionList
        sections={transactions}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({ section: { month } }) => (
          <View
            className="px-4 py-2 "
            style={{ backgroundColor: colorPalette.gray5 }}
          >
            <TextMedium style={{ color: colorPalette.gray1, fontSize: 14 }}>
              {month}
            </TextMedium>
          </View>
        )}
        renderItem={({ item }) => <TransactionCard item={item} />}
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
});
