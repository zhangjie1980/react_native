/**
 * Created by zhangjie on 16/10/15.
 */

import React, {Component} from "react";
import {StyleSheet, View, TextInput, Text, PixelRatio} from "react-native";

export default class SearchComponent extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput style={styles.input}></TextInput>
                </View>

                <View style={styles.search_container}>
                    <Text style={styles.search}>搜索</Text>
                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({

    container: {
        height: 40,
        flexDirection: 'row',
        margin: 5,
    },

    input_container: {
        flex: 1,
        borderColor: "red",
        borderWidth: 3 / PixelRatio.get(),
        paddingLeft: 10,
        paddingRight: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },

    input: {
        height: 38,
    },

    search_container: {
        height: 40,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#238afc',
        marginLeft: -5,
    },

    search: {
        color: 'white',
        fontSize: 17,
    }


});
