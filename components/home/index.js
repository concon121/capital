import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Container, Title, Button, Icon, Text, Drawer} from 'native-base';

import {Font} from 'expo';

import AppHeader from '../header/index'
import Dashboard from '../dashboard/index'
import SideBar from '../sidebar/index';

console.log(SideBar)

class Home extends Component {
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
    openDrawer = () => {
      this.props.navigation.navigate("DrawerOpen")
    };
    return (
      <Container>
        {
          this.state.fontLoaded ? (
            <View style={{minHeight: '100%'}}>
              <AppHeader text="Capital"/>
              <Dashboard />
            </View>
          ) : null
        }
      </Container>
    );
  }
}

export default Home
