import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Button} from 'react-native-elements';
import {FlatGrid} from 'react-native-super-grid';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#222629',
    },

    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const items = [
      {name: 'Project'},
      {name: 'Mining'},
      {name: 'ETP'},
      {name: 'Developer'},
    ];
    return (
      <ImageBackground
        source={require('./background_image/im5.jpg')}
        style={styles.container}>
        <View>
          <Text style={styles.textStyle}>About</Text>
          <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[styles.itemContainer, {backgroundColor: '#222629'}]}
                onPress={() => this.props.navigation.navigate(item.name)}>
                <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Button
            title="Logout !"
            onPress={() => this.props.navigation.navigate('Home')}
            buttonStyle={{
              marginTop: -80,
              backgroundColor: '#FC4445',
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              marginBottom: 50,
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',

    color: 'white',
    marginTop: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridView: {
    marginTop: 80,
    marginStart: 50,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 25,
    padding: 10,
    height: 80,
    width: 100,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    flex: 1,
    color: '#fff',
    fontWeight: '900',
    marginTop: 5,
    textAlign: 'center',
  },
});
