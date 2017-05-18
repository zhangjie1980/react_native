/**
 * Created by zhangjie on 2017/3/20.
 */

import React, {Component} from 'react';
import {
  View,
  ListView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import Props from './props/props.js';
import State from './state/state.js';
import Style from './style/style.js';
import Flexbox from './flexbox/flexbox.js';
import Net from './net/net.js';
import CycleLife from './cyclelife/cyclelife.js';
import ListItem from '../common/listitem.js';

export default class Lesson1 extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
    // 初始状态
    this.state = {
      dataSource: ds.cloneWithRows([
        {name: '属性 props', component: Props},
        {name: '状态 state', component: State},
        {name: '样式 style', component: Style},
        {name: '伸缩盒 flexbox', component: Flexbox},
        {name: '网络 net', component: Net},
        {name: '生命周期 cyclelife', component: CycleLife},
      ]),
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
    this.props.navigator.push({
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
});
