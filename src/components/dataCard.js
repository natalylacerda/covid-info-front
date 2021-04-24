import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const DataCard = (props) => {
  return (
    <View
      style={styles.container}
    >
      <Text>{props.region}</Text>
      <Text>{props.totalCases}</Text>
      <Text>{props.newCases}</Text>
      <Text>{props.totalDeaths}</Text>
      <Text>{props.newDeaths}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    // marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default DataCard;
