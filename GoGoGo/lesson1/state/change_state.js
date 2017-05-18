/**
 * Created by zhangjie on 2017/3/20.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

class CustomCounter extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      counter: this.props.counter == null ? 0 : this.props.counter,
    };
  }
  
  render() {
    return (
      <View>
        <Text>{this.state.counter}</Text>
        <Button title="计数器" onPress={() => {
          this.setState({
            counter: this.state.counter + 1,
          });
          // 记住，setState是个异步方法，设置后
          // 直接调用是不可以的。
          alert(this.state.counter);
        }}/>
      </View>
    )
  }
  
}

export default class ChangeState extends Component {
  
  render() {
    return (
      <View style={style.container}>
        <CustomCounter counter={100}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});

