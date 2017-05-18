/**
 * Created by zhangjie on 2017/3/20.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native'


export default class Style extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      counter: 0,
      buttonBg: styles.blueBg
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor: 'red', fontSize: 20}}>直接使用属性</Text>
        <Text style={styles.greenFont}>使用单个Style对象</Text>
        <Text style={[styles.whiteFont, styles.blueBg]}>使用多个Style对象</Text>
        <Text style={[styles.whiteFont, styles.blueBg, {fontSize: 30}]}>混合使用Style对象</Text>
        <Text style={[styles.whiteFont, styles.blueBg, {backgroundColor: 'red'}]}>属性以最后一个设置为主</Text>
        <Text>-------------------</Text>
        <TouchableWithoutFeedback
          onPress={this.__changeColor.bind(this)}
        >
          <Text style={[this.state.buttonBg, {height: 40}]}>切换背景颜色</Text>
        </TouchableWithoutFeedback>
      </View>
    )
  }
  
  __changeColor() {
    this.setState({
      counter: this.state.counter + 1,
      buttonBg: this.state.counter % 2 == 0 ? styles.redBg : styles.blueBg,
    })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 40,
  },
  
  whiteFont: {
    color: 'white'
  },
  
  greenFont: {
    color: 'green'
  },
  
  blueBg: {
    backgroundColor: 'blue'
  },
  
  redBg: {
    backgroundColor: 'red'
  }
  
});


