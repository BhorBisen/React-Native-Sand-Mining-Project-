import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#222629',
    },

    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white',
    },
  };

  render() {
    const items = [
      {name: 'Login', code: '#222629'},
      {name: 'Register', code: '#222629'},
    ];

    return (
      <ImageBackground
        source={require('./background_image/im5.jpg')}
        style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={require('./background_image/im11.png')}
          />
          <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[styles.itemContainer, {backgroundColor: item.code}]}
                onPress={() => this.props.navigation.navigate(item.name)}>
                <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
            )}
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 83,
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 50,
  },
  gridView: {
    marginTop: 250,
    marginStart: 50,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 25,
    padding: 10,
    height: 50,
    width: 100,
  },
  itemName: {
    fontSize: 18,
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
