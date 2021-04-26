import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const DataCard = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.regionContainer}>
        <Text style={styles.region}>{props.region}</Text>
      </View>

        <View style={styles.statistics}>
            <Text style={styles.number}>{props.totalCases}</Text>
            <Text style={styles.labelInfo}>Casos totais</Text>
        </View>
        
        <View style={styles.statistics}>
            <Text style={styles.number}>{props.totalDeaths}</Text>
            <Text style={styles.labelInfo}>Mortes totais</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "90%",
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 35,
  },
  regionContainer: {
    width:"100%",
    borderLeftWidth: 4,
    borderLeftColor: "#f05945",
    paddingLeft: 15,
  },
  region: {
    color: "#f05945",
    fontSize: 30
  },
  statistics: {
    marginVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 15
  },
  number: {  
    fontSize:26,
  },
  labelInfo: {  
    fontSize:17,
    color: "#999"
  },
});

export default DataCard;
