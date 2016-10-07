import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    PixelRatio,
} from 'react-native';

export default class ListItemComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    render() {
        return (
            <View style={styles.item}>
                <Text
                    numberOfLines={1}
                    style={styles.title}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    item: {
        height: 40,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#bebebe',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        
    },
    
    title: {}
    
});