import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ImageBackground,
} from "react-native";
import SearchInput from "./components/SearchInput";
import getImageForWeather from "./utils/getImageForWeather";

export default function App() {
  const  [Location, setLocation] = useState('San Francisco')
  const  [text, setText] = useState('')
    
  hadleChangeText = (newLocation) =>{
      setText(newLocation)
      setLocation(text)
    } 
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={getImageForWeather("Clear")}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>
            {Location}
          </Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
          <SearchInput placeholder="Search any city" />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#34495E",
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
  item: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 18,
    backgroundColor: "coral",
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color:'white'
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20,
  },
});
