/**
 * Created by zhangjie on 16/8/28.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class FlexboxAlignItems extends Component {
    
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
        flexDirection: 'row',
        /**
         * 适用于子组件
         * flex-start: 次轴从起始位置开始
         * flex-end: 次轴从尾部位置开始
         * center: 次轴在中间
         * stretch: 要生效的话,那么子元素在次轴方向上不能有固定尺寸。
         * 如果次轴是水平方向,那么width不能设置值
         * 如果次轴是垂直方向,那么height不能设置值
         * 这个属性是默认属性
         */
        alignItems: 'flex-start',
        marginTop: 20,
    },
    
    red: {
        /**
         * 如果主轴是row,那么去掉height属性后看下效果
         * 确保父元素没有alignItems属性,或者alignItems属性是stretch
         */
        height: 50,
        /**
         * 如果主轴是column,那么去掉width属性后看下效果
         */
        width: 50,
        backgroundColor: 'red',
    },
    
    green: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
    },
    
    blue: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
    }
    
});
