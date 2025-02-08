import { Text, View, StyleSheet, Button } from "react-native";
import { Image } from 'expo-image'
import Alarm from "@/components/Alarm";

export default function Index() {
  
  const screen_styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      display: "flex",
      backgroundColor: "#ba2354",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    }
  });

  const alarm_style = StyleSheet.create({
    alarm: {
      height: 135, // Corrected
    borderWidth: 5, // Corrected
    borderColor: "#000000", // Corrected
    alignSelf: "center", // Corrected
    justifyContent: "center",
    display: "flex",
    }
  });

  return (
    <View style={screen_styles.container}>
      <Alarm style={alarm_style.alarm}></Alarm>
    </View>
    
    
  );
}



