import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Main from './pages/Main'

export const Pages = {
  Main: <Main/>
}

export default class extends React.Component {
  state = {
    page: Pages.Main
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.page }
      </View>
    )
  }

  goTo(page) {
    this.setState({page})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
