import React,{useState} from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

export default SearchInput = ({placeholder}) => {
 
  return (
    <View style={styles.container}>
    <TextInput
      autoCorrect={false}
      placeholder={placeholder}
      placeholderTextColor="white"
      underlineColorAndroid='transparent'
      style={styles.textInput}
      clearButtonMode="always"
      onChangeText={hadleChangeText}
      
    />
    </View>
  );
};

const styles = StyleSheet.create({
     container: {
     height: 40,
     marginTop: 20,
     backgroundColor: '#666',
     marginHorizontal: 40,
     paddingHorizontal: 10,
     borderRadius: 5,
     },
     textInput: {
        flex: 1,
         color: 'white',
         },
        
         });