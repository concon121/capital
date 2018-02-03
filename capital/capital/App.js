import React from 'react';
import { StyleSheet, Text, View, Navigator, NativeModules } from 'react-native';
import {MdMenu} from 'react-icons/md'
import { Button } from 'react-native-material-ui';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import Menu from './components/menu'

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class App extends React.Component {

    addIncomeSource() {
        console.log("Hello WOrld!")
    }

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={{top: 50, justifyContent: 'center'}}>
                    <Text style={styles.pageTitle}>Financial Planner</Text>
                    <Button raised primary text="Hello World" />
                    <Menu/>
                </View>
            </ThemeProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%'
    },
    pageTitle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },
});
