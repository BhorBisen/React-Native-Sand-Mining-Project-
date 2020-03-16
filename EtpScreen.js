import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import t from 'tcomb-form-native';
import {AsyncStorage} from 'react-native';
const Form = t.form.Form;

var city = t.enums({
  Bhopal: 'Bhopal',
  Hoshangabad: 'Hoshangabad',
});
var sand = t.enums({
  BhopalMines: 'Bhopal Mines',
  HoshangabadMines: 'Hoshangabad Mines',
});

const User = t.struct({
  fullName: t.String,
  city: city,
  sand: sand,
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
      label: 'Contractor Name',
      error: 'Enter Contractor Name ',
    },
    city: {
      error: 'Enter City Name ',
    },
    sand: {
      label: 'Sand Mining Area',
      error: 'Enter Sand Mining Area Name ',
    },
  },
  stylesheet: formStyles,
};

export default class RtpScreen extends React.Component {
  storeData = async () => {
    const value = this._form.getValue();
    if (value) {
      for (let i = 0; i == 0; ) {
        var random = Math.floor(Math.random() * 10000000000) + 1000000000;
        if (!(await AsyncStorage.getItem(JSON.stringify(random)))) {
          await AsyncStorage.setItem(
            JSON.stringify(random),
            JSON.stringify(value),
          );
          alert(
            'Your Details are submitted successfully and your ETP is : ' +
              random,
          );
          this.setState({value: null});
          i = 1;
        }
      }
    } else {
      alert('Enter all details');
    }
  };

  static navigationOptions = {
    title: 'ETP Generator',
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
            title="Generate ETP"
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
