import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import t from 'tcomb-form-native';
import {AsyncStorage} from 'react-native';
const Form = t.form.Form;
const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});
const User = t.struct({
  fullName: t.String,
  email: Email,
  username: t.String,
  password: t.String,
});
const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: 'grey',
      width: 100,
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
    error: {
      color: 'red',
      width: 100,
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
  },
};

const options = {
  fields: {
    fullName: {
      error: 'Enter Full Name ',
    },
    email: {
      error: 'Either your Email is Empty or Invalid',
    },
    username: {
      error: 'Enter Username',
    },
    password: {
      error: 'Enter Password',
    },
  },
  stylesheet: formStyles,
};

export default class RegisterScreen extends React.Component {
  storeData = async () => {
    const value = this._form.getValue();
    if (!(await AsyncStorage.getItem(value.username))) {
      await AsyncStorage.setItem(value.username, JSON.stringify(value));
      console.log(await AsyncStorage.getItem(value.username));
      alert('Your Details are registered successfully');
      this.setState({value: null});
    } else {
      alert('This username already exists');
    }
  };

  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: '#222629',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <ImageBackground
        source={require('./background_image/im5.jpg')}
        style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 50,
            marginBottom: 50,
            padding: 20,
            width: 300,
            borderTopWidth: 5,
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
            borderBottomWidth: 5,
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
            borderRightWidth: 5,
            borderLeftWidth: 5,
            borderColor: 'white',
            backgroundColor: 'white',
          }}>
          <Form ref={c => (this._form = c)} type={User} options={options} />
          <Button
            title="Sign Up!"
            onPress={this.storeData}
            buttonStyle={{
              marginBottom: 10,
              backgroundColor: '#222629',
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: 'grey',
  },
});
