/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TextInputComponent from './text.input.js';
import ScrollViewComponent from './scroll.js';
import SectionListViewComponent from './listview.section.js';
import ListViewComponent from './listview.js';

class Lesson2 extends Component {
    render() {
        return (
            <ListViewComponent/>
        );
    }
}

AppRegistry.registerComponent('Lesson2', () => Lesson2);
