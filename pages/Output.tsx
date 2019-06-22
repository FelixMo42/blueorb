import React from 'react'
import { View, Text, Image } from 'react-native'
import Line from '../props/Line'

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
    render() {
        let { photo } = this.props.navigation.state.params
        /*return (
            <View>
                <Item title={"Plastic Bag"} body={"Throw it in the trash. Do not recycle it."}/>
                <Item title={"Plastic Bag"} body={"hi"}/>
            </View>
        )*/

        return (
            <Image
                style={{flex: 1}}
                source={{uri: photo.uri}}
            />
        )
    }
}

//<Text>{ photo.uri }</Text>