/**
 * Created by zhangjie on 2017/3/28.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

class Father extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    console.log('Father constructor');
    // 初始状态
    this.state = {
      counter: 0,
    };
  }
  
  render() {
    console.log('Father render');
    return (
      <View style={[styles.father_view, styles.center]}>
        <Son text="我是从父组件传递过来的属性Props" value={this.state.counter}/>
        <Button title="点击我修改传递给子组件的属性" onPress={this.__onPress.bind(this)} />
      </View>
    
    )
  }
  
  __onPress() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  
  
}

class Son extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    console.log('Son constructor');
    // 初始状态
    this.state = {
      /**
       * 在这里对父组件传递过来的属性进行赋值
       * 这样就可以在修改这个文本的时候刷新数据
       */
      text: this.props.text,
      value: this.props.value,
    };
  }
  
  render() {
    console.log('Son render');
    return (
      <View style={[styles.son_view, styles.center]} >
        <Text>{this.state.text} - {this.state.value}</Text>
      </View>
    )
  }
  
  componentWillReceiveProps(props) {
    console.log('Son componentWillReceiveProps');
    this.setState({
      value: props.value,
    })
  }
  
}

export default class Constructor extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>1. 构造函数调用有且只有一次。</Text>
        <Text>2. 构造函数有一个参数（props），这个值是父组件传递过来的。</Text>
        <Text>3. 构造函数中设置state的初始值。</Text>
        <Text> </Text>
        <Text>例子如下：</Text>
        <View style={[styles.example_view, styles.center]}>
          <Father/>
        </View>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    margin: 20,
    marginTop: 40,
  },
  
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  example_view: {
    flex: 1,
  },
  
  father_view: {
    height: 300,
    width: 300,
    backgroundColor: 'red',
  },
  
  son_view: {
    height: 200,
    width: 200,
    backgroundColor: 'orange',
  }
  
});
