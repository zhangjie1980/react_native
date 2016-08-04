/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

class CustomView extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.container}>
                    <View style={[styles.item, styles.center]}>
                        <Text style={styles.font}>酒店</Text>
                    </View>

                    <View style={[styles.item, styles.lineLeftRight]}>
                        <View style={[styles.flex, styles.center, styles.lineCenter]}>
                            <Text style={styles.font}>海外酒店</Text>
                        </View>

                        <View style={[styles.flex, styles.center]}>
                            <Text style={styles.font}>特惠 酒店</Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <View style={[styles.flex, styles.center, styles.lineCenter]}>
                            <Text style={styles.font}>团购</Text>
                        </View>

                        <View style={[styles.flex, styles.center]}>
                            <Text style={styles.font}>客栈,公寓 </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 84,
        // borderColor: '#FF0067',
        backgroundColor: '#FF0067',
        flexDirection: 'row',
        padding: 2,
        borderRadius: 5,
        marginTop: 30,
        marginLeft:5,
        marginRight:5,
    },

    item: {
        flex: 1,
        height: 80,
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    flex: {
        flex: 1,
    },

    font: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    lineLeftRight: {
        borderLeftWidth: 1/ PixelRatio.get(),
        borderRightWidth: 1/ PixelRatio.get(),
        borderColor: '#FFFFFF',
        marginLeft: 1,
    },

    lineCenter: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#FFFFFF',
    }


});

module.exports = CustomView;
