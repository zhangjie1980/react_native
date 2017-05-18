/**
 * Created by zhangjie on 2017/3/24.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ListView,
  StyleSheet,
} from 'react-native';
import ListItem from '../common/listitem.js';
import SimpleView from './view/simple_view.js';
import ImageView from './image/image_view.js';
import MyScrollView from './scrollview/scroll_view.js';
import TabView from './tabview/tab_view.js'

export default class Lesson2 extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    // 初始状态
    this.state = {
      dataSource: ds.cloneWithRows([
        {name: 'View', component: SimpleView},
        {name: 'ImageView', component: ImageView},
        {name: 'MyScrollView', component: MyScrollView},
        {name: 'TabView', component: TabView},
      ])
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.__renderRow(rowData)}/>
      </View>
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

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
  }
  
});
