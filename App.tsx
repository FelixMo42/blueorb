import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Main from './pages/Main'
import Settings from './pages/Settings'
import History from './pages/History'

import { View, TouchableHighlight, Image } from 'react-native'
import Output from './pages/Output';
class NavIcons extends React.Component<{navigation: any}, {}> {
  render() {
    let { navigate } = this.props.navigation

    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: "flex-end",
      }} >
        <TouchableHighlight onPress={()=>{navigate("history")}} >
          <Image
              style={{
                width: 30, height: 30,
                margin: 10,
                tintColor: "black"
              }}
              source={require('./assets/history.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={()=>{navigate("settings")}} >
          <Image
              style={{
                width: 30, height: 30,
                margin: 10,
                tintColor: "black"
              }}
              source={require('./assets/settings.png')}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

const MainNavigator = createStackNavigator({
  main: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      headerRight: <NavIcons navigation={navigation} />
    })
  },
  settings: {
    screen: Settings,
    navigationOptions: {
      title: "Settings"
    }
  },
  history: {
    screen: History,
    navigationOptions: {
      title: "History"
    }
  },
  output: {
    screen: Output,
    navigationOptions: ({ navigation }) => ({
      headerRight: <NavIcons navigation={navigation} />
    })
  }
}, {
  initialRouteName: "main"
})

const App = createAppContainer(MainNavigator)

export default App