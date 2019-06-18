import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const SCALE = 40

export default () => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: "flex-end",
            padding: 5, paddingTop: 30,
            backgroundColor: "black"
        }}
    >
        <Image
            style={styles.icon}
            source={require('../assets/history.png')}
        ></Image>
        <Image
            style={styles.icon}
            source={require('../assets/settings.png')}
        ></Image>
    </View>
)

const styles = StyleSheet.create({
    icon: {
        width: SCALE, height: SCALE,
        marginRight: 10,
        tintColor: "white"
    },
});
  