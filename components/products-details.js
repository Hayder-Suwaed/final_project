import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { route, navigation } from "@react-navigation/stack";
import axios from "axios";

const ProductsDetails = ({ route, navigation: { navigate } }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    console.log(route.params.data, "gdfhghjjlhkgjfhgjkl;kjhghj");
    axios
      .get(`https://bugi-api.herokuapp.com/api/product-details/667888093731`)
      .then((response) => {
        setProduct(response.data[0]);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>name: {product.name}</Text>
        <Text>description: {product.description}</Text>
        <Text>Picture: {product.picture}</Text>
        <Text>price: ${product.price}</Text>
      </View>
      <View style={styles.bottom}>
        <Button title="Continue shopping" onPress={() => navigate("QRScanner")} />
        <Button title="Cart" onPress={() => navigate("Cart", { product })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 8,
    marginVertical: 10
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
});
export default ProductsDetails;

