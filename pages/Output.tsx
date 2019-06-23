import React from 'react'
import { View, Text, Image } from 'react-native'
import Line from '../props/Line'
import ImageApi from '../api/ImageApi'

export const Item = ({title, body}) => (
    <View style={{
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginBottom: 0
    }} >
        <Text style={{fontWeight: 'bold'}}> { title } </Text>
        
        <Line />

        <Text> { body } </Text>
    </View>
)

export default class extends React.Component<{navigation: any, photo: any}, {}> {
    photo() {
        return this.props.navigation.state.params.photo
    }

    render() {
        ImageApi.get(this.photo()).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log("error");
        })

        return this.displayImage()
    }

    displayImage() {
        return (
            <Image
                style={{flex: 1}}
                source={{uri: this.photo()}}
            />
        )
    }
}