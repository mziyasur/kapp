import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ContactStackScreen from "./Contact";
import HomeStackScreen from "./Home";

function ProductScreen({ navigation }) {
  return (
    <View style={styles.containerCategoryButton}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Granit")}
        activeOpacity={0.7}
      >
        <Image
          style={styles.button}
          source={require("../../assets/Kategori/granit.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Ankastre")}
        activeOpacity={0.7}
      >
        <Image
          style={styles.button}
          source={require("../../assets/Kategori/ankastre.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Mermeraltı")}
        activeOpacity={0.7}
      >
        <Image
          style={styles.button}
          source={require("../../assets/Kategori/mermeraltı.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const ProductStack = createStackNavigator();

function ProductStackScreen() {
  return (
    <ProductStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <ProductStack.Screen name="Ürünler" component={ProductScreen} />
      <ProductStack.Screen name="Ankastre" component={AnkastreScreen} />
      <ProductStack.Screen name="Mermeraltı" component={MermeraltıScreen} />
      <ProductStack.Screen name="Granit" component={GranitScreen} />
    </ProductStack.Navigator>
  );
}

export default ProductStackScreen;

function AnkastreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Ankastre</Text>
    </View>
  );
}

const AnkastreStack = createStackNavigator();

function AnkastreStackScreen() {
  return (
    <AnkastreStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <AnkastreStack.Screen name="Anasayfa" component={HomeScreen} />
      <AnkastreStack.Screen name="Ürünler" component={ProductScreen} />
      <AnkastreStack.Screen name="İletişim" component={ContactScreen} />
    </AnkastreStack.Navigator>
  );
}

function GranitScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Granit</Text>
    </View>
  );
}

const GranitStack = createStackNavigator();

function GranitStackScreen() {
  return (
    <GranitStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <GranitStack.Screen name="Granit" component={GranitScreen} />
    </GranitStack.Navigator>
  );
}

function MermeraltıScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Mermeraltı</Text>
    </View>
  );
}

const MermeraltıStack = createStackNavigator();

function MermeraltıStackScreen() {
  return (
    <MermeraltıStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <MermeraltıStack.Screen name="Mermeraltı" component={MermeraltıScreen} />
    </MermeraltıStack.Navigator>
  );
}

const styles = StyleSheet.create({
  containerCategoryButton: {
    backgroundColor: "#ffffff",
    borderColor: "#fff",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 5,
    padding: 10,
    height: hp("29%"),
    width: wp("100%"),
  },
});
