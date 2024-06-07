import React from "react";
import { Tabs } from "expo-router";
import { TabbarHome, TabbarScan } from "../../../components/tabbar/TabbarIcons";

// icons
import Home from "../../../assets/icon/tabicon/home.svg";
import HomeFilled from "../../../assets/icon/tabicon/home-filled.svg";
import Account from "../../../assets/icon/tabicon/account.svg";
import AccountFilled from "../../../assets/icon/tabicon/account-filled.svg";
import History from "../../../assets/icon/tabicon/history.svg";
import HistoryFilled from "../../../assets/icon/tabicon/history-filled.svg";
import Setting from "../../../assets/icon/tabicon/settings.svg";
import SettingFilled from "../../../assets/icon/tabicon/settings-filled.svg";
import Scan from "../../../assets/icon/tabicon/scan.svg";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          elevation: 0,
          borderTopWidth: 1,
          alignItems: "center",
          justifyContent: "enter",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabbarHome focused={focused} title="Home">
              {!focused ? <Home /> : <HomeFilled />}
            </TabbarHome>
          ),
        }}
      />
      <Tabs.Screen
        name="Account/index"
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <TabbarHome focused={focused} title="Account">
              {!focused ? <Account /> : <AccountFilled />}
            </TabbarHome>
          ),
        }}
      />
      <Tabs.Screen
        name="Qrcode/index"
        options={{
          title: "Qrcode",
          tabBarIcon: ({ focused }) => (
            <TabbarScan>
              <Scan />
            </TabbarScan>
          ),
        }}
      />
      <Tabs.Screen
        name="History/index"
        options={{
          title: "History",
          tabBarIcon: ({ focused }) => (
            <TabbarHome focused={focused} title="History">
              {!focused ? <History /> : <HistoryFilled />}
            </TabbarHome>
          ),
        }}
      />
      <Tabs.Screen
        name="Setting/index"
        options={{
          title: "Setting",
          tabBarIcon: ({ focused }) => (
            <TabbarHome focused={focused} title="Setting">
              {!focused ? <Setting /> : <SettingFilled />}
            </TabbarHome>
          ),
        }}
      />
    </Tabs>
  );
}
