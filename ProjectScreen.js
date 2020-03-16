import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

export default class ProjectScreen extends React.Component {
  static navigationOptions = {
    title: 'Project Details',
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
        <Text style={styles.Head}>Sand Mining</Text>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>
            In this project we are developing a software which shows sand mining
            details. In this project we provide information about project, sand
            minings and developer details also. User can also generate ETP (
            Electronic Transfer Pass ) by providing required details.
          </Text>
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

  itemContainer: {
    justifyContent: 'center',
    flex: 2,
    marginTop: 80,
    borderRadius: 25,
    padding: 10,
    width: 300,
    marginBottom: 100,
    backgroundColor: '#f5f5f5',
  },
  itemName: {
    fontSize: 20,
    flex: 1,
    color: '#222629',
    fontWeight: 'bold',
    marginStart: 5,
  },
  Head: {
    fontSize: 40,
    color: '#fff',
    marginTop: 50,
    fontWeight: 'bold',
    marginStart: 5,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
