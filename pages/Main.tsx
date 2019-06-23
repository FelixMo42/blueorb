import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { takeSnapshotAsync } from 'expo'
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'

export default class extends React.Component<{navigation: any}, {}> {
    camera: Camera

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
        let photo = await takeSnapshotAsync(this.camera, {
            result: 'data-uri',
            height: 512
        })
        
        this.props.navigation.navigate('output', { photo: photo })
    }
}