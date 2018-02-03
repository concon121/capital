import React, { Component } from 'react';
import { View, Container, Header, Content, Card, CardItem, Body, Text, Title } from 'native-base';
import CardTitle from '../cards/title/index'
import colors from '../colors'
import styles from './styles'

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.layout}>
        <Card style={styles.card}>
          <CardTitle text='Income' />
        </Card>
        <Card style={styles.card}>
          <CardTitle text='Expenses' />
        </Card>
        <Card style={styles.card}>
          <CardTitle text='Savings' />
        </Card>
        <Card style={styles.card}>
          <CardTitle text='Loans' />
        </Card>
      </View>
    )
  }
}

export default Dashboard
