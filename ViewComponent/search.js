/**
 * Created by zhangjie on 16/10/15.
 */

import React, {Component} from "react";
import {StyleSheet, View, TextInput, Text, PixelRatio, TouchableHighlight} from "react-native";

export default class SearchComponent extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value: "",
            isShow: false,
        };
    }

    onTextChange(text) {
        this.setState({
            value: text,
            isShow: text != "",
        })
    }

    onSearch(text) {
        this.setState({
            value: text,
            isShow: false,
        });
        alert("正在搜索 " + text);
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.input_container}>
                        <TextInput
                            style={styles.input}
                            value={this.state.value}
                            placeholder="请输入要搜索的关键字"
                            onChangeText={this.onTextChange.bind(this)}
                            onSubmitEditing={this.onSearch.bind(this, this.state.value)}
                        >
                        </TextInput>
                    </View>

                    <TouchableHighlight
                        onPress={() => this.onSearch(this.state.value)}
                        onLongPress={() => this.onSearch(this.state.value)}>
                        <View style={styles.search_container}>
                            <Text style={styles.search}>搜索</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                {this.state.isShow ?
                    <View>
                        <Text
                            onPress={this.onSearch.bind(this, "测" + this.state.value + "试")}>测{this.state.value}试</Text>
                        <Text onPress={this.onSearch.bind(this, this.state.value + "开发")}>{this.state.value}开发</Text>
                        <Text onPress={this.onSearch.bind(this, "产品" + this.state.value)}>产品{this.state.value}</Text>
                    </View>
                    : null
                }

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
        borderColor: "#238afc",
        borderWidth: 2 / PixelRatio.get(),
        paddingLeft: 10,
        paddingRight: 5,
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
        marginLeft: -2,
    },

    search: {
        color: 'white',
        fontSize: 17,
    }


});
