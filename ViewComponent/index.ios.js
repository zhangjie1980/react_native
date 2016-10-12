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
    View,
    Navigator,
} from 'react-native';

import CustomViewComponent from "./custom.view.js";
import TextComponent from "./text.js";

class ViewComponent extends Component {
    render() {
        let defaultName = 'TextComponent';
        let defaultComponent = TextComponent;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={ (route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
        );
    }
}



AppRegistry.registerComponent('ViewComponent', () => ViewComponent);
