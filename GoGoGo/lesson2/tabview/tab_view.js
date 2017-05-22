/**
 * Created by zhangjie on 2017/5/17.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Toast from 'react-native-root-toast';

export default class TabView extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
  
  render() {
  
    return <ScrollableTabView
      style={{marginTop: 20, }}
      // 默认初始选中第几页
      initialPage={0}
      tabBarPosition="bottom"
      onChangeTab={(obj) => {
        Toast.show('切换到了第 : ' + obj.i, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          onShow: () => {
            // calls on toast\`s appear animation start
          },
          onShown: () => {
            // calls on toast\`s appear animation end.
          },
          onHide: () => {
            // calls on toast\`s hide animation start.
          },
          onHidden: () => {
            // calls on toast\`s hide animation end.
          }
        });
      }}
      // 滑动位置 float类型
      onScroll={(position) => {
        console.log("position : " + position)
      }}
      // 是否允许滑动切换 false默认：允许 true：不允许
      locked={true}
      tabBarUnderlineStyle={{backgroundColor:'#00A9F2'}}
      tabBarBackgroundColor="yellow"
      tabBarInactiveTextColor="#494949"
      tabBarActiveTextColor="#00A9F2"
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Text tabLabel='Tab #1'>My</Text>
      <Text tabLabel='Tab #2 word word'>favorite</Text>
      <Text tabLabel='Tab #3 word word word'>project</Text>
      <Text tabLabel='Tab #4 word word word word'>favorite</Text>
      <Text tabLabel='Tab #5'>project</Text>
    </ScrollableTabView>;
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
  }
  
});
