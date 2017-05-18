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

export default class AlignItems extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      al: 'flex-start',
      noWidth: false,
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <View style={{alignItems: this.state.al, flex: 1}}>
          <View style={styles.red}></View>
          <View style={styles.green}></View>
          <View style={styles.blue}></View>
        </View>
        
        <Button title='flex-start' onPress={ () => { this.setState({al: 'flex-start'})}} />
        <Button title='flex-end' onPress={ () => { this.setState({al: 'flex-end'})}} />
        <Button title='flex-center' onPress={ () => { this.setState({al: 'center'})}} />
        <Button title='stretch' onPress={ () => { this.setState({al: 'stretch'})}} />
      
      </View>
    )
  }
  
}

/**
 *
 * 如果设置了stretch属性，那么width不能有值
 * 并且stretch是默认属性
 *
 */

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
  },
  
  red: {
    backgroundColor: 'red',
    // width: 50,
    height: 50,
  },
  
  green: {
    backgroundColor: 'green',
    // width: 80,
    height: 30,
  },
  
  blue: {
    backgroundColor: 'blue',
    // width: 40,
    height: 100,
  }
  
});
