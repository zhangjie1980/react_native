/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

import FetchListViewComponent from './fetch.js';

class Lesson3 extends Component {
    render() {
        return (
            <FetchListViewComponent/>
        );
    }
}

AppRegistry.registerComponent('Lesson3', () => Lesson3);
