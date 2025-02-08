import { Text, View, StyleSheet, Button } from "react-native";

import '../stylesheets/Alarm.css'

const Alarm = ({ style }: { style?: any }) => {
    return (
        <View style={style} className='whole-alarm'>
            <View className='album-cover'>

            </View>
            <View className='alarm-text-group'>
                <View className='alarm-time'></View>
                <View className='alarm-description'></View>
            </View>
            <View className='alarm-status'></View>
        </View>
    )
  };

export default Alarm;