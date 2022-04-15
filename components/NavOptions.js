import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

export default function NavOptions() {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tailwind`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-xl flex items-center`}
            onPress={() => navigation.navigate(item.screen)}
            disabled={!origin}
          >
            <View style={tailwind`${!origin ? "opacity-20" : "opacity-100"}`}>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                }}
                source={{
                  uri: item.image,
                }}
              />
              <View style={tailwind`flex items-center`}>
                <Text style={tailwind`mt-2 text-lg font-bold`}>
                  {item.title}
                </Text>
                <Icon
                  style={tailwind`bg-black rounded-full p-2 mt-3`}
                  type="antdesign"
                  name="arrowright"
                  color="#fff"
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
