import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Anasayfa</Text>
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
