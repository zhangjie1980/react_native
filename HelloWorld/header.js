/**
 * Created by zhangjie on 16/7/27.
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View,
    Picker,
} from 'react-native';

class Header extends Component {



    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    }
}

const styles = {

    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        borderBottomColor: '#EF2D36',
        borderBottomWidth: 3 / PixelRatio.get(),
    },
    font: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    font_1: {
        color: '#CD1D1C',
    },
    font_2: {
        color: '#FFFFFF',
        backgroundColor: '#CD1D1C'
    },



};

module.exports = Header;

