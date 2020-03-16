import React from 'react';
import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import {Table, Rows} from 'react-native-table-component';
import {SocialIcon} from 'react-native-elements';
export default class DeveloperScreen extends React.Component {
  static navigationOptions = {
    title: 'Developer Details',
    headerStyle: {
      backgroundColor: '#222629',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        [' ENROLLMENT NO.', '0808CS181050'],
        [' COLLEGE', 'IES IPS ACADEMY, INDORE'],
        [' CONTACT NO.', '9407449500'],
        [' Mail ', 'bhorbisen@gmail.com'],
      ],
    };
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={require('./background_image/im10.png')}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>BHOR BISEN</Text>
            <Text style={styles.info}>ANDROID Developer</Text>
          </View>
          <View style={styles.head}>
            <Table>
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
          </View>
        </View>
        <View style={styles.footer}>
          <SocialIcon
            type="linkedin"
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/bhor-bisen-508236196',
              )
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#222629',
    height: 100,
  },
  footer: {
    backgroundColor: '#222629',
    alignItems: 'center',
    height: 100,
    marginTop: 90,
  },
  head: {marginTop: 60, backgroundColor: 'white'},
  text: {margin: 6, width: 160, marginStart: 30},
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 40,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
