import { Text, View, StyleSheet, Button } from "react-native";
import { Image } from 'expo-image'

const pizza_icon = require('@/assets/images/react-logo.png');

export default function Index() {
  return (
    <View style={screen_styles.pageBackground}>

      <View style={screen_styles.container}>

        <Image source={pizza_icon} style={img_styles.image}/>

        <Text style={text_styles.text}>Alarms</Text>

        
      </View>
      <View style={screen_styles.alarmContainer}>
          <Button title="+" />
        </View>
    </View>
  );
}

const text_styles = StyleSheet.create({
  text: {
    color: "#FFF",
    fontSize: 75,
    fontFamily: "Helvetica",
    fontWeight: "bold"
  },
  
});

const img_styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  }
});

const screen_styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#2A4D14",
    alignItems: "center",
    justifyContent: "center"
  },
  pageBackground:  {
    flex: 1,
    backgroundColor: "#67E0A3"
  },
  alarmContainer: {

  }
});

const icon_styles = StyleSheet.create({
  createButton: {

  }
});
