import React, { Component } from 'react';
import {CardItem, Body, Title} from 'native-base';
import styles from './styles'

class CardTitle extends Component {
  render(opts) {
    return (
      <CardItem>
        <Body>
          <Title style={styles.title}>{this.props.text}</Title>
        </Body>
      </CardItem>
    )
  }
}

export default CardTitle
