import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tailwind from "twrnc";
import { Icon } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "47 Evans Street, Lagos, Nigeria",
    coordinate: {
      lat: 6.4548203,
      lng: 3.3937573,
    },
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
    coordinate: {
      lat: 51.5032973,
      lng: -0.1195537,
    },
  },
];

const NavFavorites = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  // useEffect(() => {
  //   console.log(route.name);
  // }, [route]);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tailwind`bg-gray-300`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon, coordinate } }) => (
        <TouchableOpacity
          onPress={() => {
            {
              route.name === "HomeScreen" &&
                dispatch(
                  setOrigin({
                    location: coordinate,
                    description: destination,
                  })
                );

              dispatch(setDestination(null));
            }
            {
              route.name === "NavigateCard" &&
                dispatch(
                  setDestination({
                    location: coordinate,
                    description: destination,
                  })
                );
            }
          }}
          style={tailwind`flex-row items-center p-5`}
        >
          <Icon
            style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tailwind`font-bold text-lg`}>{location}</Text>
            <Text style={tailwind`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
