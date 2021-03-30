import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>İletişim Bilgileri</Text>
    </View>
  );
}

const ContactStack = createStackNavigator();

function ContactStackScreen() {
  return (
    <ContactStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <ContactStack.Screen name="İletişim" component={ContactScreen} />
    </ContactStack.Navigator>
  );
}

export default ContactStackScreen;
