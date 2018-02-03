import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";

const styles = {
  drawerCover: {
    alignSelf: "stretch",
    height: 500,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerImage: {
    position: "absolute",
    left: 50,
    top: 100,
    width: 210,
    height: 75,
    resizeMode: "cover"
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: -3
  }
};

const drawerCover = require("../imgs/drawer-cover.png");
const drawerImage = require("../imgs/logo-kitchen-sink.png");
const datas = [
  {
    name: "Dashboard",
    route: "Dashboard",
    icon: "md-home",
    bg: "#C5F442"
  },
  {
    name: "Income",
    route: "Income",
    icon: "md-cash",
    bg: "#C5F442"
  },
  {
    name: "Expenses",
    route: "Expenses",
    icon: "md-cart",
    bg: "#477EEA"
  },
  {
    name: "Savings",
    route: "Savings",
    icon: "md-battery-charging",
    bg: "#DA4437"
  },
  {
    name: "Loans",
    route: "Loans",
    icon: "md-calendar",
    bg: "#4DCAE0"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
