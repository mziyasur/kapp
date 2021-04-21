import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

import ProductStackScreen from "./src/com/Product";
import ContactStackScreen from "./src/com/Contact";
import HomeStackScreen from "./src/com/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Anasayfa") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Ürünler") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "İletişim") {
              iconName = focused
                ? "chatbubble-ellipses"
                : "chatbubble-ellipses-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen name="Anasayfa" component={HomeStackScreen} />
        <Tab.Screen name="Ürünler" component={ProductStackScreen} />
        <Tab.Screen name="İletişim" component={ContactStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
