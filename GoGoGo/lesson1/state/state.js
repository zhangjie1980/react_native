/**
 * Created by zhangjie on 2017/3/17.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'

import SimpleState from './simple_state.js';
import ChangeState from './change_state.js';

export default class State extends Component {
  
  render() {
    return (
      <View style={style.container}>
        <Button
          title="简单的State"
          onPress={this.__simpleState.bind(this)}
        />
  
        <Button
          title="变化State"
          onPress={this.__changeState.bind(this)}
        />
    
      </View>
    )
  }
  
  __simpleState() {
    this.props.navigator.push({
      name: 'SimpleState',
      component: SimpleState,
    })
  }
  
  __changeState() {
    this.props.navigator.push({
      name: 'ChangeState',
      component: ChangeState,
    })
  }
  
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 40,
  }
  
});

