import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
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

export default class extends React.Component<{navigation: any, photo: any}, any> {
    state = {
        items: []
    }

    photo() {
        return this.props.navigation.state.params.photo
    }

    componentDidMount() {
        ImageApi.get(this.photo()).then((response) => {
            let items = []

            for (let concept of response.outputs[0].data.concepts) {
                console.log(concept)
                items.push( {
                    title: concept.name,
                    body: "TBD"
                } )
            }

            this.setState({items: items})
        }).catch((error) => {
            console.log("error")
        })
    }

    render() {
        return (
            <ScrollView style={{paddingBottom: 10}}>
                { this.state.items.map((item) => (
                    <Item title={item.title} body={item.body} key={item.title} />
                )) }
            </ScrollView>
        )
    }

    renderImage() {
        return (
            <Image
                style={{flex: 1}}
                source={{uri: "data:image/png;base64," + this.photo()}}
            />
        )
    }
}