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

function AnkastreScreen() {
  const [aproduct, setaProduct] = useState([
    {
      id: "1",
      model: "EC-105",
      acıklama: "40 x 50 Ankastre Tek Gözlü Damlalıksız Evye",
      fiyat: 222.0,
      imageUrl: "http://kaanevye.com/productimg/105-180.PNG",
    },
    {
      id: "2",
      model: "EC-140",
      acıklama: "43,5 x 76 Ankastre Tek Gözlü Damlalıksız Evye",
      fiyat: 310.0,
      imageUrl: "http://kaanevye.com/productimg/140-180.PNG",
    },
    {
      id: "3",
      model: "EC-141",
      acıklama: "43,5 x 76 Ankastre Tek Gözlü Damlalıklı Evye",
      fiyat: 310.0,
      imageUrl: "http://kaanevye.com/productimg/141-180.PNG",
    },
    {
      id: "4",
      model: "EC-143",
      acıklama: "43,5 x 86 Ankastre Tek Gözlü Damlalıklı Evye",
      fiyat: 334.0,
      imageUrl: "http://kaanevye.com/productimg/143-180.PNG",
    },
    {
      id: "5",
      model: "EC-145",
      acıklama: "Ø48 Yuvarlak Tek Gözlü Ankastre Evye",
      fiyat: 301.0,
      imageUrl: "http://kaanevye.com/productimg/145-180.PNG",
    },
    {
      id: "6",
      model: "EC-149",
      acıklama: "46x48 Ankastre Damlalıksız Tek Gözlü Evye",
      fiyat: 306.0,
      imageUrl: "http://kaanevye.com/productimg/149-180.PNG",
    },
    {
      id: "7",
      model: "EC-151",
      acıklama: "48x73 Ankastre Tek Gözlü Damlalıklı Evye",
      fiyat: 391.0,
      imageUrl: "http://kaanevye.com/productimg/151-180.PNG",
    },
    {
      id: "8",
      model: "EX-155",
      acıklama: "48x62 1,5 Gözlü Ankastre Damlalıksız Evye",
      fiyat: 636.0,
      imageUrl: "http://kaanevye.com/productimg/155-180.PNG",
    },
    {
      id: "9",
      model: "EX-156",
      acıklama: "50x100 1,5 Gözlü Ankastre Damlalıklı Evye",
      fiyat: 823.0,
      imageUrl: "http://kaanevye.com/productimg/156-180.PNG",
    },
    {
      id: "10",
      model: "EC-159",
      acıklama: "48x77 Tek Gözlü Damlalıklı Ankastre Evye",
      fiyat: 404.0,
      imageUrl: "http://kaanevye.com/productimg/159-180.PNG",
    },
    {
      id: "11",
      model: "EC-162",
      acıklama: "49x78 Tek Gözlü Damlalıklı Ankastre Köşe Evye",
      fiyat: 412.0,
      imageUrl: "http://kaanevye.com/productimg/162-180.PNG",
    },
    {
      id: "12",
      model: "EC-168",
      acıklama: "50x100 1,5 Gözlü Dam. Küvetten Taşmalı Evye",
      fiyat: 520.0,
      imageUrl: "http://kaanevye.com/productimg/168-180.PNG",
    },
    {
      id: "13",
      model: "EX-171",
      acıklama: "50x77 1,5 Gözlü Damlalıklı Ankastre Köşe Evye",
      fiyat: 682.0,
      imageUrl: "http://kaanevye.com/productimg/171-180.PNG",
    },
    {
      id: "14",
      model: "EC-174",
      acıklama: "49x87 1,5 Gözlü Ankastre Damlalıklı Evye",
      fiyat: 601.0,
      imageUrl: "http://kaanevye.com/productimg/174-180.PNG",
    },
    {
      id: "15",
      model: "EX-191-K",
      acıklama: "50x92 1,5 Gözlü Damlalıklı Ankastre Köşe Evye",
      fiyat: 1079.0,
      imageUrl: "http://kaanevye.com/productimg/191-180.PNG",
    },
    {
      id: "16",
      model: "EC-195",
      acıklama: "50x80 İki Gözlü Damlalıksız Ankasre Evye",
      fiyat: 534.0,
      imageUrl: "http://kaanevye.com/productimg/195-180.PNG",
    },
    {
      id: "17",
      model: "EX-304",
      acıklama: "50x98 1,5 Gözlü Damlalıklı Ankastre Evye",
      fiyat: 920.0,
      imageUrl: "http://kaanevye.com/productimg/304-180.PNG",
    },
    {
      id: "18",
      model: "EX-306",
      acıklama: "50x80 1,5 Gözlü Ankastre Damlalıklı Evye",
      fiyat: 828.0,
      imageUrl: "http://kaanevye.com/productimg/306-180.PNG",
    },
    {
      id: "19",
      model: "EX-311-K",
      acıklama: "50x116 İki Gözlü Ankastre Damlalıklı Evye",
      fiyat: 1228.0,
      imageUrl: "http://kaanevye.com/productimg/311-180.PNG",
    },
    {
      id: "20",
      model: "EX-313-K",
      acıklama: "50x100 1,5 Gözlü Ankastre Damlalıklı Evye",
      fiyat: 1052.0,
      imageUrl: "http://kaanevye.com/productimg/313-180.PNG",
    },
    {
      id: "21",
      model: "EC-318",
      acıklama: "49x96 1,5 Gözlü Ankastre Damlalıklı Evye",
      fiyat: 635.0,
      imageUrl: "http://kaanevye.com/productimg/318-180.PNG",
    },
    {
      id: "22",
      model: "EC-330",
      acıklama: "50x100 Tek Gözlü Damlalıklı Ankasre Evye",
      fiyat: 501.0,
      imageUrl: "http://kaanevye.com/productimg/330-180.PNG",
    },
    {
      id: "23",
      model: "EC-336",
      acıklama: "50x100 1,5 Gözlü Ankastre Damlalıklı Evye",
      fiyat: 665.0,
      imageUrl: "http://kaanevye.com/productimg/336-180.PNG",
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <FlatList
        keyExtractor={(item) => item.id}
        data={aproduct}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 180,
                height: 180,
                marginTop: 5,
                marginBottom: 25,
                marginLeft: 20,
              }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={styles.textfont}>Model: {item.model}</Text>
              <Text style={styles.textfont}>{item.acıklama}</Text>
              <Text style={styles.textfont}>Fiyat: {item.fiyat}.00 TL</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const AnkastreStack = createStackNavigator();

function AnkastreStackScreen() {
  return (
    <AnkastreStack.Navigator>
      <ProductStack.Screen name="Ankastre" component={AnkastreScreen} />
    </AnkastreStack.Navigator>
  );
}

function MermeraltıScreen() {
  const [mproduct, setmProduct] = useState([
    {
      id: "1",
      model: "EX-001",
      acıklama: "16x30 Mermeraltı Evye",
      fiyat: 187.0,
      imageUrl: "http://kaanevye.com/productimg/001-180.PNG",
    },
    {
      id: "2",
      model: "EX-003",
      acıklama: "17x30 Mermeraltı Evye",
      fiyat: 188.0,
      imageUrl: "http://kaanevye.com/productimg/003-180.PNG",
    },
    {
      id: "3",
      model: "EX-005",
      acıklama: "34x40 Mermeraltı Evye",
      fiyat: 304.0,
      imageUrl: "http://kaanevye.com/productimg/005-180.PNG",
    },
    {
      id: "4",
      model: "EC-101",
      acıklama: "35x40 Mermeraltı Evye",
      fiyat: 200.0,
      imageUrl: "http://kaanevye.com/productimg/101-180.PNG",
    },
    {
      id: "5",
      model: "EX-007",
      acıklama: "40x40 Mermeraltı Evye",
      fiyat: 371.0,
      imageUrl: "http://kaanevye.com/productimg/007-180.PNG",
    },
    {
      id: "6",
      model: "EC-102",
      acıklama: "40x45 Mermeraltı Evye",
      fiyat: 242.0,
      imageUrl: "http://kaanevye.com/productimg/102-180.PNG",
    },
    {
      id: "7",
      model: "EC-103",
      acıklama: "Ø38 Mermeraltı Evye",
      fiyat: 200.0,
      imageUrl: "http://kaanevye.com/productimg/103-180.PNG",
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <FlatList
        keyExtractor={(item) => item.id}
        data={mproduct}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 180,
                height: 180,
                marginTop: 15,
                marginBottom: 15,
                marginLeft: 20,
              }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={styles.textfont}>Model: {item.model}</Text>
              <Text style={styles.textfont}>{item.acıklama}</Text>
              <Text style={styles.textfont}>Fiyat: {item.fiyat}.00 TL</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const MermeraltıStack = createStackNavigator();

function MermeraltıStackScreen() {
  return (
    <MermeraltıStack.Navigator>
      <MermeraltıStack.Screen name="Anasayfa" component={HomeScreen} />
      <MermeraltıStack.Screen name="Ürünler" component={ProductScreen} />
      <MermeraltıStack.Screen name="İletişim" component={ContactScreen} />
    </MermeraltıStack.Navigator>
  );
}

function GranitScreen() {
  const [gproduct, setgProduct] = useState([
    {
      id: "1",
      model: "SW5086",
      acıklama: "50x86 Ankastre Granit Evye Beyaz",
      fiyat: 1841.0,
      imageUrl: "http://kaanevye.com/productimg/SW5086-180.PNG",
    },
    {
      id: "2",
      model: "SN5086",
      acıklama: "50x86 Ankastre Granit Evye Siyah",
      fiyat: 1841.0,
      imageUrl: "http://kaanevye.com/productimg/SN5086-180.PNG",
    },
    {
      id: "3",
      model: " SS5086",
      acıklama: "50x86 Ankastre Granit Evye Krem",
      fiyat: 1841.0,
      imageUrl: "http://kaanevye.com/productimg/SS5086-180.PNG",
    },
    {
      id: "4",
      model: "SW5010",
      acıklama: "50x100 Ankastre Granit Evye Beyaz",
      fiyat: 1933.0,
      imageUrl: "http://kaanevye.com/productimg/SW5010-180.PNG",
    },

    {
      id: "5",
      model: "SN5010",
      acıklama: "50x100 Ankastre Granit Evye Siyah",
      fiyat: 1933.0,
      imageUrl: "http://kaanevye.com/productimg/SN5010-180.PNG",
    },
    {
      id: "6",
      model: "SS5010",
      acıklama: "50x100 Ankastre Granit Evye Krem",
      fiyat: 1933.0,
      imageUrl: "http://kaanevye.com/productimg/SS5010-180.PNG",
    },
    {
      id: "7",
      model: "SW5016",
      acıklama: "50x116 Ankastre Granit Evye Beyaz",
      fiyat: 2066.0,
      imageUrl: "http://kaanevye.com/productimg/SW5016-180.PNG",
    },
    {
      id: "8",
      model: "SN5016",
      acıklama: "50x116 Ankastre Granit Evye Siyah",
      fiyat: 2066.0,
      imageUrl: "http://kaanevye.com/productimg/SN5016-180.PNG",
    },
    {
      id: "9",
      model: "SS5016",
      acıklama: "50x116 Ankastre Granit Evye Krem",
      fiyat: 2066.0,
      imageUrl: "http://kaanevye.com/productimg/SS5016-180.PNG",
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <FlatList
        keyExtractor={(item) => item.id}
        data={gproduct}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 180,
                height: 180,
                marginTop: 5,
                marginBottom: 35,
                marginLeft: 20,
              }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={styles.textfont}>Model: {item.model}</Text>
              <Text style={styles.textfont}>{item.acıklama}</Text>
              <Text style={styles.textfont}>Fiyat: {item.fiyat}.00 TL</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const GranitStack = createStackNavigator();

function GranitStackScreen() {
  return (
    <GranitStack.Navigator>
      <GranitStack.Screen name="Anasayfa" component={HomeScreen} />
      <GranitStack.Screen name="Ürünler" component={ProductScreen} />
      <GranitStack.Screen name="İletişim" component={ContactScreen} />
    </GranitStack.Navigator>
  );
}

export default ProductStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "column",
  },
  image: {
    flex: 1,
    //resizeMode: "cover",
    //justifyContent: "center",
    height: hp("87%"),
    width: wp("100%"),
  },
  description: {
    backgroundColor: "#333",
    color: "white",
    padding: 10,
    fontWeight: "bold",
  },

  containerProduct: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: "center",
    //justifyContent: "center",
  },

  containerCategoryButton: {
    backgroundColor: "#ffffff",
    borderColor: "#fff",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  item: {
    marginTop: 5,
    padding: 75,
    backgroundColor: "gray",
    fontSize: 24,
    marginHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 5,
    padding: 10,
    height: hp("29%"),
    width: wp("100%"),
  },

  textfont: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 0,
    marginRight: 10,
    marginTop: 10,
    marginLeft: 20,
  },
});
//width: 400,
//height: 210,
