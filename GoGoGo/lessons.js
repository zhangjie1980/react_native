/**
 * Created by zhangjie on 2017/3/17.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  ListView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import ListItem from './common/listitem.js';
import Lesson1 from './lesson1/lesson1.js';
import Lesson2 from './lesson2/lesson2.js';

export default class Lessons extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // 初始状态
    this.state = {
      dataSource: ds.cloneWithRows([
        {name: '第一课 ReactNative基础', 'component': Lesson1},
        {name: '第二课 ReactNative视图组件', 'component': Lesson2},
      ])
    };
  }
  
  render() {
    return (
      <ListView
        style={style.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.__renderRow(rowData)}
      />
    )
  }
  
  __renderRow(rowData) {
  
    return <TouchableWithoutFeedback
      onPress={this.__onPress.bind(this, rowData)}>
      <View>
        <ListItem name={rowData.name}/>
      </View>
    </TouchableWithoutFeedback>;
  }
  
  __onPress(rowData) {
    const navigator = this.props.navigator;
    navigator.push({
      name: rowData.name,
      component: rowData.component,
    })
  }
  
}

const style = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  }
})