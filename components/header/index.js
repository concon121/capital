import {Header, Title, Button, Icon} from 'native-base';
import {StatusBar, View} from 'react-native';
import React, { Component } from "react";
import colors from '../colors'
import styles from './styles'

class AppHeader extends Component {
  render() {
    return (
      <Header style={styles.orientation}>
        <View style={styles.header}>
          <Button
            iconLeft
            transparent
            style={styles.menu}
            onPress={() => openDrawer()}>
            <Icon color={colors.white} ios='ios-menu' android="md-menu" />
          </Button>
          <Title style={styles.title}>Capital</Title>
        </View>
      </Header>
    )
  }
}

export default AppHeader
