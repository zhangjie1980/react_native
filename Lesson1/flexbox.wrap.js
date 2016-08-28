/**
 * Created by zhangjie on 16/8/28.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class FlexboxWrap extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.red}></View>
                <View style={styles.green}></View>
                <View style={styles.blue}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    parent: {
        flex: 1,
        marginTop: 20,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        /**
         * nowrap: 超出不换行
         * wrap: 超出换行
         */
        flexWrap: 'wrap'
    },
    
    red: {
        height: 50,
        width: 100,
        backgroundColor: 'red',
    },
    
    green: {
        height: 50,
        width: 200,
        backgroundColor: 'green',
    },
    
    blue: {
        height: 50,
        width: 600,
        backgroundColor: 'blue',
    }
    
    
});
