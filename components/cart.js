import React from "react";
import { StyleSheet, Text, View, Button, key } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Tables from "../components/tables";
import axios from "axios";
import { route, navigation } from "@react-navigation/stack";
import { useGlobal } from "../lib/globals";

const Cart = ({ navigation: { navigate }, route }) => {
  const { cartItems } = useGlobal();
  console.log("cartItems in cart.js", cartItems);
  const submitOrder = () => {
    return axios
      .post(`https://bugi-api.herokuapp.com/api/products-orders`, {
        cartItems: [...cartItems]
      })
      .then(() => {
        navigate("Payment");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return [
    <Tables selectedProducts={cartItems} />,
    <View style={styles.container}>
      <ButtonWithBackground
        text="Continue shopping"
        color="#2C7873"
        onPress={() => navigate("QRScanner")}
      />
      <View style={styles.button}>
        <ButtonWithBackground
          text="Pay Now"
          color="#2C7873"
          onPress={() => navigate("Payment")}
        />
      </View>
    </View>
  ];
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    marginBottom: 170
  }
});

export default Cart;
