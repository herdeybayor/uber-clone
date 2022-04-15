import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function getTime() {
    let currentHour = new Date().getHours();

    if (currentHour < 12) return "Morning";
    else if (currentHour == 12) return "Noon";
    else if (currentHour >= 12 && currentHour <= 17) return "Afternoon";
    else if (currentHour >= 17 && currentHour <= 24) return "Evening";
  }
  return (
    <SafeAreaView style={tailwind`bg-white flex-1`}>
      <Text style={tailwind`text-center py-5 text-xl`}>
        Good {getTime()}, Sherifdeen
      </Text>
      <View style={tailwind`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            fetchDetails={true}
            returnKeyType="search"
            placeholder="Where to?"
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
