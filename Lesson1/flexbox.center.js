/**
 * Created by zhangjie on 16/8/27.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class FlexboxCenter extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    render() {
        return (
            <View style={
                [
                    styles.flex,
                    styles.background,
                    styles.center,
                ]}>
                
                <Text>Center</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    flex: {
        /**
         * 根view,填充整个屏幕
         */
        flex: 1,
    },
    
    background: {
        backgroundColor: 'yellow',
    },
    
    center: {
        /**
         * 主轴居中
         */
        justifyContent: 'center',
        /**
         * 交叉轴居中
         */
        alignItems: 'center',
    }
    
    
    
});
