import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return (

    	<View style={styles.container}>
    		<Text style={styles.logoText}>Bienvenido!</Text>
    		<Image source={require('../img/logo.png')}/>
    	</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flexGrow: 1,
  	justifyContent: 'flex-end',
  	alignItems: 'center'
  },
  logoText: {
  	marginVertical: 15,
  	fontSize: 25,
  	fontWeight: '700',
  }
});