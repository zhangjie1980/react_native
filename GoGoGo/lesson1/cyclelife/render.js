/**
 * Created by zhangjie on 2017/3/30.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

export default class Render extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      content: 'Render',
      counter: 0,
    };
  }
  
  /**
   * 1. 组件渲染函数，会返回一个Virtual DOM，只允许返回一个最外层容器组件。
   * 2. render函数尽量保持纯净，只渲染组件，不修改状态，不执行副操作（比如计时器）。
   * 3. 会被重复调用，当setState方法被调用的时候。
   */
  render() {
    console.log('render called');
    return (
      <View style={styles.container}>
        <Text>{this.state.content} - {this.state.counter}</Text>
        <Button title='点击调用重绘render' onPress={() => this.setState({
          counter: this.state.counter + 1,
        })}/>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});
