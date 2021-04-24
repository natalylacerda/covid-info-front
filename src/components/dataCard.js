import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const DataCard = (props) => {
  return (
    <View style={styles.container}>

        <Text style={styles.region}>{props.region}</Text>

        <View style={styles.statistics}>
            <View style={styles.specificInfo}>
                <Text style={styles.number}>{props.totalCases}</Text>
                <Text style={styles.labelInfo}>Casos totais</Text>
            </View>
            <View style={styles.specificInfo}>
                <Text style={styles.number}>{props.newCases}</Text>
                <Text style={styles.labelInfo}>Novos casos</Text>
            </View>
        </View>

        <View style={styles.statistics}>
            <View style={styles.specificInfo}>
                <Text style={styles.number}>{props.totalDeaths}</Text>
                <Text style={styles.labelInfo}>Mortes totais</Text>
            </View>
            <View style={styles.specificInfo}>
                <Text style={styles.number}>{props.newDeaths}</Text>
                <Text style={styles.labelInfo}>Novas mortes</Text>
            </View>
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
    padding: 15,
    marginVertical: 25,
  },
  region: {
    color: "#f05945",
    fontSize: 30
  },
  statistics: {
    flexDirection: "row",
  },
  specificInfo: {  
    width: "50%",
    marginHorizontal: 5
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
