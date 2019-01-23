import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';
import ReactNativeEos from 'react-native-eos'

const spew = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT)
}

export default class App extends Component {

  testTransaction = async () => {
    spew('Starting...')
    console.log(ReactNativeEos)
    spew(JSON.stringify(ReactNativeEos))

    ReactNativeEOS.setUrl('http', 'eos.greymass.com', 80)
    ReactNativeEos.getInfo(info => {
      spew(JSON.stringify(info))
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button onPress={this.testTransaction} title="Test Transaction" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
