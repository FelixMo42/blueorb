import React from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'

const SCALE = 40

export default ({navigation, back = false}) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: "flex-end",
            padding: 5, paddingTop: 30
        }}
    >
        <TouchableHighlight
            onPress={()=>{navigation.navigate("history")}}
        >
            <Image
                style={styles.icon}
                source={require('../assets/history.png')}
            />
        </TouchableHighlight>

        <TouchableHighlight
            onPress={()=>{navigation.navigate("settings")}}
        >
            <Image
                style={styles.icon}
                source={require('../assets/settings.png')}
            />
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    icon: {
        width: SCALE, height: SCALE,
        marginRight: 10,
        tintColor: "white"
    }
});
  