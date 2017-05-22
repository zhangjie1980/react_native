/**
 * Created by zhangjie on 2017/3/17.
 */

import React, {Component} from 'react';
import {
} from 'react-native';

import Lessons from './lessons.js';
import NavigationExperimental, {Navigator} from 'react-native-deprecated-custom-components';

export default class MyNavigator extends Component {
  
  render() {
    let defaultName = 'lessons';
    let defaultComponent = Lessons;
    // 禁用滑动返回
    const NoBackSwipe = {
      ...Navigator.SceneConfigs.HorizontalSwipeJump,
      gestures: {
        pop: {}
      }
    };
    return (
      <NavigationExperimental.Navigator
        initialRoute={{name: defaultName, component: defaultComponent}}
        configureScene={
        (route) => {
          return NoBackSwipe;
        }}
        renderScene={
        (route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }
      }/>
    )
  }
}
