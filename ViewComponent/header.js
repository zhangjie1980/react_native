import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    PixelRatio,
} from 'react-native';

export default class HeaderComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    render() {
        return (
            <View style={[styles.header]}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    header: {
        height: 50,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3 / PixelRatio.get(),
        borderBottomColor: 'red',
    },
    
    font: {
    },
    
    font_1: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    
    font_2: {
        fontSize: 20,
        color: 'white',
        backgroundColor: '#CD1D1C',
        paddingLeft: 4,
        paddingRight: 4,
    },
    
    font_3: {
        fontSize: 20,
    }
    
});
