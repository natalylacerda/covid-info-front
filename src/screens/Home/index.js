import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import DataCard from "../../components/dataCard"
import { getStates, showState } from "../../services/requests"

const Home = () => {

  const [selectedUf, setSelectedUf] = useState({
    "id": 1,
    "name": "São Paulo",
    "uf": "SP",
    "cases": 2811562,
    "deaths": 91673,
    "datetime": "2021-04-23T21:38:54.261Z",
    "created_at": "2021-04-24T21:31:26.333Z",
    "updated_at": "2021-04-24T21:31:26.333Z"
  });
  const [states, setStates] = useState([
    {
      "id": 1,
      "name": "São Paulo",
      "uf": "SP",
      "cases": 2811562,
      "deaths": 91673,
      "datetime": "2021-04-23T21:38:54.261Z",
      "created_at": "2021-04-24T21:31:26.333Z",
      "updated_at": "2021-04-24T21:31:26.333Z"
    },
  ]);

  useEffect(() => {
    getStates()
      .then((res) => {setStates(res.data)})
      .catch((error) => {console.log({error})})
  }, []);

  async function handleSelectedUf(id){
    const {data} = await showState(id);
    setSelectedUf(data);
  }
  
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      
      <Text style={styles.title}>Painel COVID-19</Text>
      
      <View style={styles.content}>
        <View style={styles.inputRegion}>
          <Text>Região:</Text>
          <Picker
            selectedValue={selectedUf.uf}
            mode={"dropdown"}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              handleSelectedUf(itemIndex+1)
            }
          >
            {states.map((item) => (
            <Picker.Item 
              value={item.uf}
              label={item.uf}
              key={item.id}
            />
            ))}
          </Picker>
        </View>

        <DataCard
         region={selectedUf.name}
         totalCases={selectedUf.cases}
         totalDeaths={selectedUf.deaths}
        />
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
    fontSize: 32,
    alignSelf: "flex-start",
    marginLeft: 20,
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
    marginTop: 25,
    color: "#2E294E",
    fontSize: 20,
    width: "90%",
    height: 60,
    borderRadius: 16,
    paddingHorizontal: 15.13,
    backgroundColor: "#a3d2ca",
  },
  picker: {
    width: "90%",
    height: "70%",
    color: "black"
  },
});

export default Home;
