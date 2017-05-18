/**
 * Created by zhangjie on 2017/3/17.
 */

import React, {Component} from 'react';
import {
  Navigator,
} from 'react-native';

import Lessons from './lessons.js';

export default class MyNavigator extends Component {
  
  render() {
    let defaultName = 'lessons';
    let defaultComponent = Lessons;
    return (
      <Navigator
        initialRoute={{name: defaultName, component: defaultComponent}}
        configureScene={
        (route) => {
          return Navigator.SceneConfigs.HorizontalSwipeJump;
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
