/**
 * Created by zhangjie on 2017/3/21.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Flex from './flex.js';
import FlexDirection from './flexDirection.js';
import JustifyContent from './justifyContent.js';
import AlignItems from './alignItems.js';
import AlignSelf from './alignSelf.js';
import FlexWrap from './flexWrap.js';
import ListItem from '../../common/listitem.js'

export default class Flexbox extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // 初始状态
    this.state = {
      dataSource: ds.cloneWithRows([
        {name: 'flexDirection', component: FlexDirection},
        {name: 'flex', component: Flex},
        {name: 'justifyContent', component: JustifyContent},
        {name: 'alignItems', component: AlignItems},
        {name: 'alignSelf', component: AlignSelf},
        {name: 'flexWrap', component: FlexWrap},
      ])
    };
  }
  
  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.__renderRow(rowData)}
      />
    )
  }
  
  __renderRow(rowData) {
  
    return <TouchableOpacity
      onPress={this.__onPress.bind(this, rowData)}>
      <View>
        <ListItem name={rowData.name}/>
      </View>
    </TouchableOpacity>;
    
    
  }
  
  __onPress(rowData) {
    this.props.navigator.push({
      name: rowData.name,
      component: rowData.component
    })
  }
  
}

const styles = StyleSheet.create({
  
  list: {
    flex: 1,
    marginTop: 20,
  }
  
})
