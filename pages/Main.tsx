import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions';
import Menu from '../props/Menu'

export default class extends React.Component {
    camera: Camera

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
            <View style={{flex: 1}}>
                <Camera
                    style={{flex: 1}}
                    ref={ref => {
                        this.camera = ref;
                    }}
                    onPress={this.takePicture}
                    useCamera2Api={false}
                >
                    <TouchableHighlight
                        onPress={ () => { this.takePicture() } }
                        style={{flex: 1}}
                    >
                        <Menu/>
                    </TouchableHighlight>
                </Camera>
            </View>
        )
    }

    async takePicture() {
        console.log("start")
        let photo = await this.camera.takePictureAsync();
        console.log("end")

        
    }
}