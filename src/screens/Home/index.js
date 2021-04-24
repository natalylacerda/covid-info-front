import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import DataCard from "../../components/dataCard"

const Home = () => {
  return (
    <View
      style={styles.container}
    >
      <Text>Painel COVID-19</Text>
      <DataCard region={"Brasil"} totalCases={"76"} newCases={"653"} totalDeaths={"31"} newDeaths={"424"} />
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
