import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/kshop.png")}
        style={styles.image}
      ></ImageBackground>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <HomeStack.Screen name="Anasayfa" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    //resizeMode: "cover",
    //justifyContent: "center",
    height: hp("87%"),
    width: wp("100%"),
  },
});
