/**
 * Created by zhangjie on 16/8/28.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class MarginPadding extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.parent}>
                    <View style={styles.children}>
                        <View style={styles.grandson}></View>
                    </View>
    
                    <View style={{
                            width:50, height:50, backgroundColor: 'yellow',
                            marginTop: 30, marginLeft: 30,
                    }}></View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    parent: {
        width: 350,
        height: 350,
        backgroundColor: 'red',
    },
    
    children: {
        width: 200,
        height: 200,
        backgroundColor: 'green',
        /**
         * 外边距
         * margin: 包括以下4个值
         * marginTop
         * marginLeft
         * marginBottom
         * marginRight
         */
        marginTop: 30,
        marginLeft: 30,
        /**
         * 内边距
         */
        paddingTop: 30,
        paddingLeft: 30,
    },
    
    grandson: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    }
    
});
