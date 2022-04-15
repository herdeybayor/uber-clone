import { View, Text, Image } from "react-native";
import React from "react";
import tailwind from "twrnc";

const EatScreen = () => {
  return (
    <View style={tailwind`flex h-full items-center justify-center`}>
      <Image
        style={{
          width: 300,
          height: 300,
          resizeMode: "contain",
        }}
        source={{
          uri: "https://links.papareact.com/28w",
        }}
      />
      <Text style={tailwind`text-xl font-semibold mt-5`}>Coming Soon...</Text>
    </View>
  );
};

export default EatScreen;
