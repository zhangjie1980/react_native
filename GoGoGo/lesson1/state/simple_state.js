/**
 * Created by zhangjie on 2017/3/20.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class CustomTextView extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      // 状态属性被赋值
      text: this.props.text,
    };
  }
  
  render() {
    return (
      <Text style={style.other}>{this.state.text}</Text>
    )
  }
}

export default class SimpleState extends Component {
  
  render() {
    return (
      <View style={style.container}>
        <CustomTextView text="我是从父组件传递过来的" />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  
  other: {
    backgroundColor: 'red'
  }
});
