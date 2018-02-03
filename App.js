import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Container, Title, Button, Icon, Text, Drawer} from 'native-base';
import {DrawerNavigator} from "react-navigation";
import { Root } from "native-base";

import Dashboard from './components/dashboard/index'
import Expenses from './components/expenses/index'
import Home from './components/home/index'
import Income from './components/income/index'
import Loans from './components/loans/index'
import Savings from './components/savings/index'
import SideBar from './components/sidebar/index';

const DrawerNav = DrawerNavigator(
  {
    Home: {screen: Home},
    Dashboard: {screen: Home},
    Expenses: {screen: Expenses},
    Income: {screen: Income},
    Loans: {screen: Loans},
    Savings: {screen: Savings}
  },
  {
   initialRouteName: "Home",
   contentOptions: {
     activeTintColor: "#e91e63"
   },
   contentComponent: props => <SideBar {...props} />
 }
)

export default class App extends React.Component {
  render() {
    return (
      <DrawerNav />
    )
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
