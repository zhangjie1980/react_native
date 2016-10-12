import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class DetailComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            navigator: this.props.navigator,
            title: this.props.title,
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 18}} onPress={this.onPress.bind(this)}>{this.props.title}</Text>
            </View>
        );
    }
    
    onPress() {
        if (this.props.callback) {
            this.props.callback("1.");
        }
        if (this.state.navigator) {
            this.state.navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});