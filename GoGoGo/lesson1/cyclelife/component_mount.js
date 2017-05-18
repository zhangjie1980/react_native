/**
 * Created by zhangjie on 2017/3/29.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

class MyComponent extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      counter: 0,
    };
    
    console.log('MyComponent constructor');
  }
  
  componentWillMount() {
    console.log('MyComponent componentWillMount');
  }
  
  render() {
    console.log('MyComponent render');
    return (
      <View style={[styles.center, styles.example_view]}>
        <View style={[styles.box, styles.center]}>
          <Text>我是自定义组件 - {this.state.counter}</Text>
          <Button title="点击我看看效果" onPress={() => {
            this.setState({
              counter: this.state.counter + 1,
            })
          }}/>
        </View>
      </View>
    )
  }
  
  componentDidMount() {
    console.log('MyComponent componentDidMount');
  }
  
  componentWillUnmount() {
    console.log('MyComponent componentWillUnmount');
  }
  
}

export default class ComponentMount extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      show: true,
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>1. componentWillMount是在渲染之前执行的，在组建没有被UnMount之前只会执行一次。</Text>
        <Text>2. componentWillMount中可以用于改变state的操作，而不会引起二次渲染。</Text>
        <Text>3. componentDidMount在渲染之后执行，重新渲染后不会再次出发。</Text>
        <Text>4. 如果把修改state的操作放到在render执行完之后的componentDidMount中，是会引发render的再次渲染的。</Text>
        <Text>5. componentWillUnmount：组件DOM中移除的时候调用。在这里进行一些相关的销毁操作，比如定时器，监听等等。</Text>
        <Text>6. 如果修改state，那么****Mount函数并不会再次被调用。</Text>
        <Text></Text>
        <Text>例子：</Text>
        {
          this.state.show ? <MyComponent/> : <View></View>
        }
        <Button title="点击我看看效果" onPress={() => {
          this.setState({
            show: !this.state.show,
          })
        }}/>
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
  
  box: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
  }
});
