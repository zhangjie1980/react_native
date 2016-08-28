/**
 * Created by zhangjie on 16/8/21.
 */

import React, {Component} from 'react';
import {
    Text,
} from 'react-native';

export default class HelloWorld extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    render() {
        return (
            <Text>Hello World!</Text>
        );
    }
}

