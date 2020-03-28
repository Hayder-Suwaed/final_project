import React from "react";

import { StyleSheet, View, YellowBox, Button } from "react-native";
import {
  Table,
  TableWrapper,
  Text,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";
import axios from "axios";
import { useGlobal } from '../lib/globals';
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 50, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 }
});

const Tables = () => {
  const { cartItems, DecreaseItem, IncrementItem } = useGlobal();
  const tableHead = [
    "Item",
    "quantity",
    "qty +/-",
    "unit price",
    "subtotal"
  ];
  const products = cartItems;
  const nestedData = products.map((product) => [
    product.productName,
    product.qty,
    <View>
      <Button title="+" onPress={() => IncrementItem(product)} />
      <Button title="-" onPress={() => DecreaseItem(product)} />
    </View>,
    product.unitPrice,
    product.subTotal
  ]);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={nestedData} textStyle={styles.text} />
      </Table>
    </View>
  );
}
export default Tables;