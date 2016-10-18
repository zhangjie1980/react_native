/**
 * Created by zhangjie on 16/10/18.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import ListItemComponent from './list.item.js';
import AndroidViewPagerComponent from './viewpager.android.js';

export default class AndroidViewComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            navigator: this.props.navigator,
        };
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <ListItemComponent title="AndroidViewPager" onPress={this.onPress} navigator={this.state.navigator}/>
            </View>
        );
    }
    
    onPress() {
        let self = this;
        self.navigator.push({
            name: "AndroidViewPagerComponent",
            component: AndroidViewPagerComponent,
        })
    }
}


