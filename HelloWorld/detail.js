/**
 * Created by zhangjie on 16/7/27.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const PickerView = require('./picker');
const ProgressView = require('./progress');

class Detail extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    back() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={styles.center}>
                <ProgressView/>
                <Text onPress={this.back.bind(this)}>{this.props.title}</Text>
                <PickerView />
            </View>
        );
    }
}

const styles = {

    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

};

module.exports = Detail;
