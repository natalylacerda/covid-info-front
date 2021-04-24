import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import DataCard from "../../components/dataCard"

const Home = () => {

  const [gender, setGender] = useState("X");

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>

      <Text style={styles.title}>Painel COVID-19</Text>

      <View style={styles.content}>
        <View style={styles.inputRegion}>
          <Text>Região:</Text>
          <Picker
            selectedValue={gender}
            mode={"dropdown"}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setGender(itemValue)
            }
          >
            <Picker.Item label="Outro" value="x" />
            <Picker.Item label="Masculino" value="M" />
            <Picker.Item label="Feminino" value="F" />
          </Picker>
        </View>

        <DataCard region={"Brasil"} totalCases={"76"} newCases={"653"} totalDeaths={"31"} newDeaths={"424"} />
      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5eaaa8",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 33,
    alignSelf: "flex-start",
    marginLeft: 15,
    color: "#fff",
    position: "relative",
    top: 40,
  },
  content: {
    flex: 1,
    top: "10%",
    width: "100%",
    backgroundColor: "#eee",
    alignItems: "center",
    borderRadius: 30,
    paddingTop: 20,
  },
  inputRegion: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    color: "#2E294E",
    fontSize: 20,
    width: 325,
    height: 64,
    borderRadius: 16,
    paddingLeft: 15.13,
    backgroundColor: "#a3d2ca",
  },
  picker: {
    width: "90%",
    height: "70%",
    color: "black"
  },
});

export default Home;
