import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Mining Details',
    headerStyle: {
      backgroundColor: '#222629',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const {navigation} = this.props;
    const name = navigation.getParam('name');
    const im = navigation.getParam('image');
    const Det = navigation.getParam('det');
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.header} source={im} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.info}>{Det}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#222629',
    height: 200,
    resizeMode: 'stretch',
    aspectRatio: 1.8,
  },
  name: {
    fontSize: 28,
    color: '#222629',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: '#222629',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
