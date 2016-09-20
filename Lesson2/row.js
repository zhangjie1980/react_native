/**
 * Created by zhangjie on 16/9/14.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';

export default class Row extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    render() {
        return (
            <TouchableHighlight
                underlayColor={'gray'}
                activeOpacity={1.0}
                style={styles.row}
                onPress={() => this.props.press(this.props.data)}>
                <Text style={styles.text}>{this.props.data}</Text>
            </TouchableHighlight>
        );
    }
    
    _onPress() {
        alert("xxx");
    }
}

const styles = StyleSheet.create({
    
    row: {
        height: 80,
        backgroundColor: 'red',
        borderBottomColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text: {
        
    }
    
});
