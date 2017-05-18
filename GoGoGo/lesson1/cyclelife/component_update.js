/**
 * Created by zhangjie on 2017/4/10.
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
      name: this.props.name,
    };
  }
  
  render() {
    console.log("render");
    return (
      <View style={styles.my_component}>
        <Text>{this.state.name}</Text>
        <Button title="改变state" onPress={() => {
          this.setState({
            name: this.state.name === 'zhang jie' ? 'jie zhang' : 'zhang jie'
          })
        }} />
      </View>
    )
  }
  
  componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps");
    console.log("props = " + props.name);
    this.setState({
      name: this.props.name,
    }) ;
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log("nextProps = " + nextProps.name);
    console.log("nextState = " + nextState.name);
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
    console.log("nextProps = " + nextProps.name);
    console.log("nextState = " + nextState.name);
  
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("prevProps = " + prevProps.name);
    console.log("prevState = " + prevState.name);
  }
  
}

export default class ComponentUpdate extends Component {
  
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
        <MyComponent name={this.state.name}/>
        <Button title="改变属性" onPress={() => {
          this.setState({
            name: this.state.name === 'zhang jie' ? 'jie zhang' : 'zhang jie'
          })
        }} />
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
  
  my_component: {
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  }
  
});