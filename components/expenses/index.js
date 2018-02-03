import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Container, Title, Button, Icon, Text, Drawer} from 'native-base';

import AppHeader from '../header/index'

class Expenses extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Text>Expenses</Text>
      </View>
    )
  }
}

export default Expenses
