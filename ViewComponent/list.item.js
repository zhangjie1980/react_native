import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    PixelRatio,
} from 'react-native';

import DetailComponent from './detail.js';

export default class ListItemComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            navigator: this.props.navigator,
            callback_data: null,
        };
    }
    
    render() {
        return (
            <View style={styles.item}>
                <Text
                    onPress={this.onPress.bind(this, this.props.title)}
                    numberOfLines={1}
                    style={styles.title}>
                    {this.state.callback_data == null ? "" : this.state.callback_data}{this.props.title}
                </Text>
            </View>
        );
    }
    
    componentDidMount() {
    }
    
    onPress(title) {
        var self = this;
        this.state.navigator.push({
            name: 'DetailComponent',
            component: DetailComponent,
            params: {
                title: title,
                callback: function(param) {
                    self.setState({
                        callback_data: param,
                    })
                }
            },
        });
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