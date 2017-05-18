/**
 * Created by zhangjie on 2017/3/20.
 */
import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default class SimpleProps extends Component {
  
  render() {
    return (
    <View style={style.container}>
      {/*source就是一个属性*/}
      <Image source={require('../../img/jiege.jpg')} style={style.img}/>
    </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  
  img: {
    width: 375,
    height: 667,
  }
});
