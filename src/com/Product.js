import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

function ProductScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Ürünler Sayfası</Text>
    </View>
  );
}

const ProductStack = createStackNavigator();

function ProductStackScreen() {
  return (
    <ProductStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <ProductStack.Screen name="Ürünler" component={ProductScreen} />
    </ProductStack.Navigator>
  );
}

export default ProductStackScreen;
