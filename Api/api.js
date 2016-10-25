/**
 * Created by zhangjie on 16/10/25.
 */
import React, {Component} from 'react';
import {
    Navigator,
    Platform,
    BackAndroid,
} from 'react-native';

import ApiListComponent from './api.list.js';
import Toast from 'react-native-root-toast';

export default class Api extends Component {
    
    static defaultProps = {};  // 注意这
    
    static propTypes = {};
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    
    render() {
        let defaultName = 'ApiListComponent';
        let defaultComponent = ApiListComponent;
        return (
            <Navigator
                ref={(navigator) => this._navigator = navigator}
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route, routeStack) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}/>
        );
    }
    
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid)
        }
    }
    
    onBackAndroid = () => {
        const navigator = this._navigator;
        const routers = navigator.getCurrentRoutes();
        console.log("当前路由长度 " + routers.length);
        if (routers.length > 1) {
            const top = routers[routers.length - 1];
            if (top.ignoreBack || top.component.ignoreBack) {
                //路由或组件决定这个界面忽略back键
                return true;
            }
            
            if (top.handleBack) {
                return top.handleBack(navigator);
            }
            
            navigator.pop();
            return true;
        }
        
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //默认行为，退出应用
            return false;
        }
        
        this.lastBackPressed = Date.now();
        Toast.show('再按一次退出应用', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            onShow: () => {
                // calls on toast\`s appear animation start
            },
            onShown: () => {
                // calls on toast\`s appear animation end.
            },
            onHide: () => {
                // calls on toast\`s hide animation start.
            },
            onHidden: () => {
                // calls on toast\`s hide animation end.
            }
        });
        return true;
    }
}
