/**
 * Created by zhangjie on 2017/4/11.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

export default class MyScrollView extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={require('../../img/angel.jpg')}></Image>
          <Image source={{uri: 'ic_launcher'}}
                 style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}} />
          <Image source={require('../../img/angel.jpg')}></Image>
          <Image source={{uri: 'ic_launcher'}}
                 style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}} />
          <Image source={require('../../img/angel.jpg')}></Image>
          <Image source={{uri: 'ic_launcher'}}
                 style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}} />
          <Image source={require('../../img/angel.jpg')}></Image>
          <Image source={{uri: 'ic_launcher'}}
                 style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}} />
        </ScrollView>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
  }
  
});
