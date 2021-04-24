import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View
      style={styles.container}
    >
      <Text>Oi lindos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
