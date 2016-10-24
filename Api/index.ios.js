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
    View,
    Navigator,
} from 'react-native';

import AsyncStorageComponent from './async_storage.js';

export default class Api extends Component {
    
    static defaultProps = {
    };  // 注意这
    
    static propTypes = {
    };
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            
        };
    }
    
    
    render() {
        let defaultName = 'AsyncStorageComponent';
        let defaultComponent = AsyncStorageComponent;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route, routeStack) => { return Navigator.SceneConfigs.HorizontalSwipeJump}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

//应用程序注册
AppRegistry.registerComponent('Api', () => Api);
