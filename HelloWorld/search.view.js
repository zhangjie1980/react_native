/**
 * Created by zhangjie on 16/7/28.
 */

import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

class SearchView extends Component {

    hide(val) {
        this.setState({
            show: false,
            value: val,
        });
    }

    show(text) {
        this.setState({
            value: text,
            show: true,
        });
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            show: false,
            value: null,
        };
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入要搜索的内容"
                        value={this.state.value}
                        onChangeText={this.show.bind(this)}>
                    </TextInput>
                    <TouchableHighlight underlayColor='#E1F6FF' onPress={this.hide.bind(this, this.state.value)}>
                        <View style={styles.search}>
                            <Text style={styles.searchText}>搜索</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {this.state.show && this.state.value ?
                    <View style={styles.result}>
                        <Text onPress={this.hide.bind(this, this.state.value + '加东方QQ')}
                              style={styles.item} numberOfLines={1}>{this.state.value}加东方QQ</Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '园街')}
                              style={styles.item} numberOfLines={1}>{this.state.value}园街</Text>
                        <Text onPress={this.hide.bind(this, 80 + this.state.value + '综合商店')}
                              style={styles.item} numberOfLines={1}>80{this.state.value}综合商店</Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '桃')}
                              style={styles.item} numberOfLines={1}>{this.state.value}桃</Text>
                        <Text onPress={this.hide.bind(this, '啦拉拉123' + this.state.value)}
                              style={styles.item} numberOfLines={1}>啦拉拉{this.state.value}</Text>
                    </View>
                    : null
                }
            </View>


        );
    }


}

const styles = {

    container: {
        flexDirection: 'row',
        padding: 10,
    },

    input: {
        flex: 1,
        height: 30,
        borderWidth: 1,
        borderColor: '#000000',
        paddingLeft: 10,
        paddingRight: 10,
    },

    search: {
        width: 50,
        height: 30,
        backgroundColor: '#0000ee',
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchText: {
        color: '#FFFFFF',
    }

};

module.exports = SearchView;