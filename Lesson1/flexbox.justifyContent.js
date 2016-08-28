/**
 * Created by zhangjie on 16/8/27.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class FlexboxJustifyContent extends Component {
    
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
        /**
         * 尝试去改变flexDirection
         * 然后去掉子元素的宽或者高,观察下变化
         */
        flexDirection: 'column',
        backgroundColor: 'yellow',
        /**
         * 适用于子组件
         * flex-start:主轴开始位置
         * flex-end:主轴结束位置
         * center: 主轴中间位置
         * space-around: 划分N个部分,处于N个部分的中间位置
         * space-between: N个元素中间位置保持一样大小
         */
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    
    red: {
        /**
         * 如果主轴方向是column,那么去掉width后观察下变化
         * 如果主轴方向是row,那么去掉height后观察下变化
         *
         * 结论:
         * 1.如果主轴方向是column,那么如果不设置width,
         *   默认次轴属性是stretch,会拉伸充满parent。
         * 2.如果主轴方向是row,那么如果不设置height,
         *   默认次轴方向是stretch,会拉伸充满parent.
         * 其中,这个值是和alignItems属性相关的,如果没有设置
         * alignItems,那么默认属性是stretch。
         */
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    
    green: {
        height: 50,
        width: 60,
        backgroundColor: 'green',
    },
    
    blue: {
        height: 50,
        width: 70,
        backgroundColor: 'blue',
    }
    
    
});
