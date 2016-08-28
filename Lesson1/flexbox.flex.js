/**
 * Created by zhangjie on 16/8/27.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class FlexboxFlex extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    render() {
        return (
            <View style={[styles.flex, styles.direction]}>
                <View style={styles.red}></View>
                <View style={styles.green}></View>
                <View style={styles.blue}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    direction: {
        /**
         * flexDirection: 设置主轴的方向,
         * row: 主轴为水平方向,横向排列
         * column: 主轴为垂直方向,垂直排列
         *
         * react-native默认为column
         * react默认为row
         */
        flexDirection: 'row',
        // flexDirection: 'column',
    },
    
    flex: {
        /**
         * 1.flex伸缩属性
         * 2.如果是根view,那么1表示充满整个屏幕
         * 3.如果是子view并且存在多个子view,那么会按照比例计算
         *   如果flexDirection: row,那么宽度会按照比例进行划分,如果子view不设置高度,高度会拉伸到底部。
         *   如果flexDirection: column,那么高度会按照比例进行划分,如果子view不设置宽度,宽度会拉伸到底部。
         */
        flex: 1,
        marginTop: 20,
        backgroundColor: 'grey'
    },
    
    red: {
        flex: 1,
        backgroundColor: 'red',
    },
    
    green: {
        flex: 2,
        backgroundColor: 'green',
    },
    
    blue: {
        flex: 3,
        backgroundColor: 'blue',
    },
    
    
    
    
    
});
