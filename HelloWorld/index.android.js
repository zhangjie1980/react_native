/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
} from 'react-native';

const List = require('./list');

class HelloWorld extends Component {

    render() {

        let defaultName = 'List';
        let defaultComponent = List;

        return (

            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={
                    (route) => {
                        return Navigator.SceneConfigs.HorizontalSwipeJump;
                    }
                }
                renderScene={
                    (route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator}/>
                    }
                }>
            </Navigator>

        );
    }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
