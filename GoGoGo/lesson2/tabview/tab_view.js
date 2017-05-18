/**
 * Created by zhangjie on 2017/5/17.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TabView extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  }
  
});
