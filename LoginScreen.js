import React, {Component} from 'react';
import {TextInput, View, StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import {AsyncStorage} from 'react-native';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
  storeData = async () => {
    const value = await AsyncStorage.getItem(this.state.username);
    var v = JSON.parse(value);

    if (v) {
      if (v.password == this.state.password) {
        this.setState({username: null, password: null});
        this.props.navigation.navigate('Profile');
      } else {
        alert('Password Invalid');
      }
    } else {
      alert('This username does not exists');
    }
  };

  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#222629',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white',
    },
  };

  render() {
    return (
      <ImageBackground
        source={require('./background_image/im5.jpg')}
        style={styles.container}>
        <View>
          <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({username})}
            placeholder={'Username'}
            keyboardType="email-address"
            textContentType="emailAddress"
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />

          <Button
            title={'Login'}
            buttonStyle={{
              marginBottom: 10,
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              backgroundColor: '#222629',
            }}
            onPress={this.storeData}
          />

          <Button
            title={'Forgot Password'}
            buttonStyle={{
              marginBottom: 10,
              backgroundColor: '#222629',
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
            }}
            onPress={() => this.props.navigation.navigate('Forgot')}
          />
        </View>
      </ImageBackground>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 200,
    marginBottom: 10,
    height: 44,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
