import {Header, Title, Button, Icon} from 'native-base';
import {StatusBar, View} from 'react-native';
import React, { Component } from "react";

class AppHeader extends Component {
  render() {
    return (
      <Header style={{marginTop:StatusBar.currentHeight}}>
        <View style={{flex:1, flexDirection:'row'}}>
          <Button
            iconLeft
            transparent
            style={{flex:0.5, justifyContent: 'flex-start'}}
            onPress={() => openDrawer()}>
            <Icon color={'#fff'} ios='ios-menu' android="md-menu" />
          </Button>
          <Title style={{marginTop:20}}>Capital</Title>
        </View>
      </Header>
    )
  }
}

export default AppHeader
