/**
 * Created by zhangjie on 2017/3/21.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

export default class JustifyContent extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      jc: 'flex-end'
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <View style={{justifyContent: this.state.jc, flex: 1}}>
          <View style={styles.red}></View>
          <View style={styles.green}></View>
          <View style={styles.blue}></View>
        </View>
      
        <Button title='flex-start' onPress={ () => { this.setState({jc: 'flex-start'})}} />
        <Button title='flex-end' onPress={ () => { this.setState({jc: 'flex-end'})}} />
        <Button title='flex-center' onPress={ () => { this.setState({jc: 'center'})}} />
        <Button title='space-around' onPress={ () => { this.setState({jc: 'space-around'})}} />
        <Button title='space-between' onPress={ () => { this.setState({jc: 'space-between'})}} />
        
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
  },
  
  red: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
  },
  
  green: {
    backgroundColor: 'green',
    width: 80,
    height: 30,
  },
  
  blue: {
    backgroundColor: 'blue',
    width: 40,
    height: 100,
  }
  
});
