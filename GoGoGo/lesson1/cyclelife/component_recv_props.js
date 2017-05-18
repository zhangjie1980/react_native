/**
 * Created by zhangjie on 2017/4/10.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

class Father extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      name: this.props.name,
    };
  }
  
  render() {
    return (
      <View style={styles.father}>
        <Son name={this.state.name} />
      </View>
    )
  }
  
  componentWillReceiveProps(props) {
    this.setState({
      name: props.name,
    })
  }
  
}

class Son extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      name: this.props.name
    };
  }
  
  render() {
    return (
      <View style={styles.son}>
        <Text style={{color: 'white'}}>{this.state.name}</Text>
      </View>
    )
  }
  
  componentWillReceiveProps(props) {
    console.log("以前的props " + this.props.name);
    console.log("现在的props " + props.name);
    this.setState({
      name: props.name,
    })
  }
}

export default class ComponentRecvProps extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      name: 'zhang jie'
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Father name={this.state.name}/>
        <Button title="点击我切换名字" onPress={() => {
          this.setState({
            name: this.state.name === 'jie zhang' ? 'zhang jie' : 'jie zhang'
          })
        }}/>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  father: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  son: {
    height: 100,
    width: 100,
    backgroundColor: 'blue'
  }
  
});
