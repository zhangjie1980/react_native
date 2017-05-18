/**
 * Created by zhangjie on 2017/3/21.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'

export default class FlexDirection extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      direction_column: true
    };
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={[{flex: 1}, this.state.direction_column ? styles.container_column : styles.container_row]}>
          <View style={styles.red}></View>
          <View style={styles.green}></View>
          <View style={styles.blue}></View>
        </View>
        
        <Button title='切换flexDirection' onPress={() => { this.setState({
          direction_column: !this.state.direction_column,
        })}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  container_column: {
    flex: 1,
    marginTop: 20,
    // 默认是column
    flexDirection: 'column'
  },
  
  container_row: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row'
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
  
  
})
