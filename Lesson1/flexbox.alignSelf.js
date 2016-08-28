/**
 * Created by zhangjie on 16/8/28.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';


export default class FlexboxAlignSelf extends Component {
    
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
                <View style={styles.black}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    parent: {
        flex: 1,
        backgroundColor: 'yellow',
        marginTop: 20,
        flexDirection: 'row',
        /**
         * 定义子元素在次轴上的位置
         */
        alignItems: 'center',
    },
    
    red: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        /**
         * 忽略父元素定义的alignItems属性
         */
        alignSelf: 'flex-start',
    },
    
    green: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    
    blue: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        /**
         * auto属性是默认属性,表示遵从父元素定义的alignItems属性
         */
        alignSelf: 'auto',
    },
    
    black: {
        width: 50,
        backgroundColor: 'black',
        /**
         * 拉伸属性,不过次轴方向的大小不能定义
         * 比如如果flexDirection是row,那么就不能定义height
         * 比如如果flexDirection是column,那么就不能定义width
         */
        alignSelf: 'stretch'
    }
    
});