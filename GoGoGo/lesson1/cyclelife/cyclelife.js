/**
 * Created by zhangjie on 2017/3/24.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  ListView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import ListItem from '../../common/listitem.js';
import Constructor from './constructor.js';
import ComponentMount from './component_mount.js';
import Render from './render.js';
import ComponentRecvProps from './component_recv_props.js';
import ComponentUpdate from './component_update.js';

export default class CycleLife extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    
    
    // 初始状态
    this.state = {
      dataSource: ds.cloneWithRows([
        {name: 'constructor', component: Constructor},
        {name: 'componentWillMount', component: ComponentMount},
        {name: 'render', component: Render},
        {name: 'componentDidMount', component: ComponentMount},
        {name: 'componentWillUnmount', component: ComponentMount},
        {name: 'componentWillReceiveProps', component: ComponentRecvProps},
        {name: 'shouldComponentUpdate', component: ComponentUpdate},
        {name: 'componentWillUpdate', component: ComponentUpdate},
        {name: 'componentDidUpdate', component: ComponentUpdate},
      ])
    };
    
    console.log('constructor 被调用');
  }
  
  /**************************** 初始化 *************************************/
  
  /**
   * 1. 在render前，getInitalState之后调用。仅调用一次，可以用于改变state操作。
   * 2. 如果在componentWillMount中直接修改state的值不会引发render的再次渲染。
   */
  componentWillMount() {
    console.log('componentWillMount 被调用');
  }
  
  /**
   * 组件渲染函数，会返回一个Virtual DOM，只允许返回一个最外层容器组件。
   * render函数尽量保持纯净，只渲染组件，不修改状态，不执行副操作（比如计时器）。
   */
  render() {
    console.log('render 被调用')
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.__renderRow(rowData)}
        />
      </View>
    )
  }
  
  /**
   * 1. 在render渲染之后，React会根据Virtual DOM来生成真实DOM，生成完毕后会调用该函数。
   *    在浏览器端（React），我们可以通过this.getDOMNode()来拿到相应的DOM节点。
   *    然而我们在RN中并用不到，在RN中主要在该函数中执行网络请求，定时器开启等相关操作
   * 2. 如果把修改state的操作放到在render执行完之后的componentDidMount中，是会引发render的再次渲染的。
   */
  componentDidMount() {
    console.log('componentDidMount 被调用');
  }
  
  /**
   * componentWillUnmount：组件DOM中移除的时候调用。在这里进行一些相关的销毁操作，比如定时器，监听等等。
   */
  componentWillUnmount() {
    console.log('componentWillUnmount 被调用');
  }
  
  /**************************** 运行中 *************************************/

  componentWillReceiveProps(props) {
    
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
      component: rowData.component
    })
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
  },
  
  
  
});
