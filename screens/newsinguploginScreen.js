import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import * as firebase from 'firebase';
import db from '../config';
//sir which function

export default class LoginScreen extends React.Component {
  constructor() {
    console.log(firebase)
    super();
    this.state = { username: '', password: '' };
  }


  login = (username, password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(username, password)
          .then(() => {
        return alert('Successfully Login');
      
      }
      )
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      })
  };
  userSignUp = (username, password) => {
    firebase.auth()
      .createUserWithEmailAndPassword(username, password)
      .then((response) => {
        return alert('User Added SuccessFully');
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.kviewcontainer}>
      <View>
      <View>
       <View>
          <Text style={{ color: 'orange', textAlign: 'center', fontSize: 40 }}>
            Barter
          </Text>
        </View><View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: '#ff5722',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            Username
          </Text>
        </View>
        <View style={styles.viewcontainer}>
          <TextInput
            style={styles.loginBox}
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({ username: text });
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#ff5722',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            Password
          </Text>
        </View>
         <View style={{ alignItems: 'center' }}>
          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={[styles.button, { marginBottom: 10 }]}
            onPress={() => {
              this.login(this.state.username, this.state.password);
            }}>
            <Text
              style={{ color: '#ff5722', fontSize: 18, fontWeight: 'bold' }}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.username, this.state.password);
            }}>
            <Text
              style={{ color: '#ff5722', fontSize: 18, fontWeight: 'bold' }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
            </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: '5%',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ff9800',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#ff8a65',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  viewcontainer: { alignItems: 'center' },
  kviewcontainer: { alignItems: 'center', marginTop: 20 },
});
