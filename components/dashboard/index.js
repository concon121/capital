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
          <Text>No income details to display</Text>
        </Card>
        <Card style={styles.card}>
          <CardTitle text='Expenses' />
          <Text>No expenses details to display</Text>
        </Card>
        <Card style={styles.card}>
          <CardTitle text='Savings' />
          <Text>No savings details to display</Text>
        </Card>
        <Card style={styles.card}>
          <CardTitle text='Loans' />
          <Text>No loans details to display</Text>
        </Card>
      </View>
    )
  }
}

export default Dashboard
