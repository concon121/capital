import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Container, Title, Button, Icon, Text, Drawer} from 'native-base';

import AppHeader from '../header/index'

class Loans extends Component {
  render() {
    return (
      <View>
        <AppHeader text="Loans"/>
      </View>
    )
  }
}

export default Loans
