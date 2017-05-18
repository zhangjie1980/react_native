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

export default class FlexWrap extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      fd: 'column',
      fw: 'wrap'
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: this.state.fd, flexWrap: this.state.fw}}>
          <View style={styles.red}></View>
          <View style={styles.blue}></View>
          <View style={styles.black}></View>
          <View style={styles.yellow}></View>
          <View style={styles.orange}></View>
          <View style={styles.purple}></View>
        </View>
        <Button title="切换flexDirection" onPress={() => {
          this.setState({
            fd: this.state.fd === 'column' ? 'row' : 'column'
          })
        }} />
        <Button title="切换flexWrap" onPress={() => {
          this.setState({
            fw: this.state.fw === 'wrap' ? 'nowrap' : 'wrap'
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
  },
  
  red: {
    height: 100,
    width: 80,
    backgroundColor: 'red'
  },
  blue: {
    height: 100,
    width: 80,
    backgroundColor: 'blue'
  },
  black: {
    height: 100,
    width: 80,
    backgroundColor: 'black'
  },
  
  yellow: {
    height: 100,
    width: 80,
    backgroundColor: 'yellow'
  },
  
  orange: {
    height: 100,
    width: 80,
    backgroundColor: 'orange'
  },
  
  purple: {
    height: 100,
    width: 80,
    backgroundColor: 'purple'
  },
  
});
