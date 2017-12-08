import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return (

    	<View style={styles.container}>
    		<TextInput style={styles.inputBox}
                   placeholder="Email"
                   placeholderTextColor='#ffffff'
                   selectionColor='#fff'
                   keyboardType='email-address'
                   onSubmitEditing={()=> this.password.focus()}/>

        <TextInput style={styles.inputBox}
                   placeholder="Contraseña"
                   placeholderTextColor='#ffffff'
                   secureTextEntry={true}
                   ref={(input) => this.password = input}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
    	</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flexGrow: 1,
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  inputBox:{
    width: 300,
    height: 50,
    backgroundColor: '#455a64',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center'
  }
});