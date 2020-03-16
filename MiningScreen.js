import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';

export default class MiningScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Sand Mine 1',
          detail: 'Details of sand mining 1',
          img: require('./background_image/im6.jpg'),
        },
        {
          name: 'Sand Mine 2',
          detail: 'Details of sand mining 2',
          img: require('./background_image/im14.jpg'),
        },
        {
          name: 'Sand Mine 3',
          detail: 'Details of sand mining 3',
          img: require('./background_image/im15.jpg'),
        },
      ],
    };
  }
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
    const {data} = this.state;
    return (
      <ImageBackground
        source={require('./background_image/im5.jpg')}
        style={styles.container}>
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.list}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Details', {
                      name: item.name,
                      image: item.img,
                      det: item.detail,
                    })
                  }
                  style={styles.list}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Image style={styles.image} source={item.img} />
                </TouchableOpacity>
              </View>
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
  },
  image: {
    flex: 3 / 3,
    aspectRatio: 1.4,
    resizeMode: 'stretch',
  },
  itemName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#222629',
  },
  list: {
    margin: 5,
    backgroundColor: 'transparent',
    height: 250,
    justifyContent: 'space-around',
    paddingLeft: 10,
    elevation: 1,
  },
});
