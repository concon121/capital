import {StatusBar} from 'react-native';

export default {
  orientation: {
    marginTop: StatusBar.currentHeight
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  menu: {
    flex: 0.5,
    justifyContent: 'flex-start'
  },
  title: {
    marginTop: 20
  }
}
