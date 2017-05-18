/**
 * Created by zhangjie on 2017/3/17.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class ListItem extends Component {
  
  render() {
    return (
      <View style={style.item}>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  
  item: {
    height: 40,
    justifyContent: 'center',
    padding: 10
  }
  
})
