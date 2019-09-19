import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { captureRef } from 'react-native-view-shot'
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'

export default class extends React.Component<{navigation: any}, {}> {
    camera: Camera
    width: number
    height: number

    navigationOptions = {
        title: "main"
    }

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        return (
            <Camera
                style={{flex: 1}}
                ref={ref => {
                    this.camera = ref
                }}
                onLayout={layout => {
                    this.width = layout.nativeEvent.layout.width
                    this.height = layout.nativeEvent.layout.height
                }}
                useCamera2Api={false}
            >
                <TouchableHighlight
                    style={{flex: 1}}
                    onPress={() => (this.takePicture())}
                >
                    <View></View>
                </TouchableHighlight>
            </Camera>
        )
    }

    async takePicture() {
        let photo = await captureRef(this.camera, {
            result: 'data-uri',
            height: 512,
            width: this.width * 512 / this.height
        })

        photo = photo.replace("data:image/png;base64,", "")
        
        this.props.navigation.navigate('output', { photo: photo })
    }
}