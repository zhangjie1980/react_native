/**
 * Created by zhangjie on 2017/3/24.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class SimpleView extends Component {
  render() {
    return (
      <View style={styles.container}
            onLayout={(e) => {
              console.log(e.nativeEvent);
            }}
      >
        <View style={styles.view1}>
          <Text>View-1</Text>
        </View>
        
        <View style={styles.view2}>
          <Text>View-2</Text>
          <View style={styles.view3}>
            <Text>View-3</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
  },
  
  view1: {
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  view2: {
    height: 150,
    width: 150,
    backgroundColor: 'orange',
    
  },
  
  view3: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    
    alignItems: 'center',
    justifyContent: 'center'
    
  }
  
  
});