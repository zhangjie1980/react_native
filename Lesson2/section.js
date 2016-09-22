/**
 * Created by zhangjie on 16/9/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

export default class SectionComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: this.props.data,
        };
    }
    
    render() {
        return (
            <Text style={styles.section}>{this.state.data}</Text>
        );
    }
}

const styles = StyleSheet.create({
    
    section: {
        height: 30,
        backgroundColor: 'green',
    }
    
});
