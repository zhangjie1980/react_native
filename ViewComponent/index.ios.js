/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

import CustomViewComponent from "./custom.view.js";
import TextComponent from "./text.js";

class ViewComponent extends Component {
    render() {
        return (
            <TextComponent/>
        );
    }
}



AppRegistry.registerComponent('ViewComponent', () => ViewComponent);
