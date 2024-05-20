import { View, Text, ActivityIndicator, Button, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function StartPage() {
  return (
    <View className="justify-center items-center pt-48">
      <Text className="text-3xl">Home Screen</Text>
      <Link href="/LoginPassword" asChild>
        <Pressable className="bg-gray-600 p-3 rounded-sm">
          <Text className=" text-white">Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}
