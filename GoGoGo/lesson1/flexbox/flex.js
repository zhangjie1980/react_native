/**
 * Created by zhangjie on 2017/3/21.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class Flex extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor: 'yellow'}}>flex is 1</Text>
        
        <View style={styles.flexHeight}></View>
        
      </View>
    )
  }
  
}

/**
 *
 * 1. 单独设置flex，则填充整个容器
 * 2. 如果当前flexDirection = column 那么设置了width后，填充column
 * 3. 如果当前flexDirection = row 那么设置了height，填充row
 * 4. 跟alignItems属性有关系，默认是 stretch（拉伸）
 *
 */
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: 20,
    // flexDirection: 'row'
    // alignItems: 'flex-start'
  },
  
  flexHeight: {
    flex: 1,
    width: 40,
    backgroundColor: 'blue'
  },
  
  flexWidth: {
    flex: 1,
    // height: 40,
    width: 40,
    backgroundColor: 'blue'
  }
  
});
