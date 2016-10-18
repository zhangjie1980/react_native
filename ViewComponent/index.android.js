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

import AndroidViewComponent from './view.component.android.js';

class ViewComponent extends Component {
    
    render() {
        let defaultName = "AndroidViewComponent";
        let defaultComponent = AndroidViewComponent;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route, routeStack) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
            >
            </Navigator>
        );
    }
}

AppRegistry.registerComponent('ViewComponent', () => ViewComponent);
