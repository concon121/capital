import {Container, Title, Button, Icon, Text, Drawer} from 'native-base';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Font} from 'expo';
import SideBar from './components/sideBar';
import AppHeader from './components/header'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Container>
        {
          this.state.fontLoaded ? (
            <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={
                <SideBar navigator={this.navigator} />
              }
              onClose={() => closeDrawer()} >
              <AppHeader />
            </Drawer>
          ) : null
        }
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
