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

import SimpleProps from './simple_props.js';
import TransferProps from './transfer_props.js';

/**
 * 用法以及注意
 * 1. 传递
 * 2. 在子组件中不要修改属性
 * 3. 属性是单项的
 */
export default class Props extends Component {
  
  render() {
    return (
      <View style={style.container}>
        <Button
          title="简单的Props"
          onPress={this.__simplePorps.bind(this)}
        />
  
        <Button
          title="传递的Props"
          onPress={this.__transferProps.bind(this)}
        />
        
      </View>
    )
  }
  
  __simplePorps() {
    this.props.navigator.push({
      name: 'SimpleProps',
      component: SimpleProps,
    })
  }
  
  __transferProps() {
    this.props.navigator.push({
      name: 'TransferProps',
      component: TransferProps,
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
