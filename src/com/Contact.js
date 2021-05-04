import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

function ContactScreen({ navigation }) {
  const coordEv = {
    latitude: 41.01466,
    longitude: 28.629642,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.font}>İletişim Bilgileri</Text>
      <Text style={styles.fontsub}>
        KAAN TİCARET D.T.M. İTH. İHR. DAH. TİC.
      </Text>
      <Text style={styles.fontsub}>
        Şehitler Mah. 2633. Sk. No:3/B Kıraç / Esenyurt / İSTANBUL
      </Text>
      <Text style={styles.fontsub}>GSM : +90 (532) 165 31 50</Text>
      <Text style={styles.fontsub}>E-Posta : kaan@kromevye.com.tr</Text>
      <Text style={styles.fontsub}>Web : www.kaanevye.com</Text>

      <MapView style={styles.map} initialRegion={coordEv}>
        <MapView.Marker
          coordinate={{ latitude: 41.01466, longitude: 28.629642 }}
          title={"EV"}
          description={"Home"}
        />
      </MapView>
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

const styles = StyleSheet.create({
  map: {
    width: wp("100%"),
    height: hp("45%"),
  },
  font: {
    fontSize: 25,
    fontWeight: "bold",
  },
  fontsub: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 0,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 20,
    marginLeft: 20,
  },
});
