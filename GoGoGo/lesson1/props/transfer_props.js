/**
 * Created by zhangjie on 2017/3/20.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

class CustomerTextView extends Component {
  
  render() {
    return (
      // 使用从父组件传递过来的数据
      <Text style={style.other}>{this.props.text}</Text>
    )
  }
}

export default class TransferProps extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
  
  render() {
    return (
      <View style={style.container}>
        {/*传递一个属性到组件中*/}
        <CustomerTextView text="我是从父组件传递过来的" />
      </View>
    )
  }
}

const style = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  
  other: {
    backgroundColor: 'yellow'
  }
  
});


