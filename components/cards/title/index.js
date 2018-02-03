import React, { Component } from 'react';
import {CardItem, Body, Text} from 'native-base';
import styles from './styles'

class CardTitle extends Component {
  render(opts) {
    return (
      <CardItem>
        <Body>
          <Text style={styles.title}>{this.props.text}</Text>
        </Body>
      </CardItem>
    )
  }
}

export default CardTitle
