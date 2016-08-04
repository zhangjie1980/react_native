/**
 * Created by zhangjie on 16/7/27.
 */

import React, {Component} from 'react';

import {
    View,
    Text,
    PixelRatio,
} from 'react-native';

const Detail = require('./detail');

class ListItem extends Component {

    show(title, navigator) {
        if (navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
                params: {
                    title: title,
                }
            })
        }
    }

    render() {
        return (
            <View style={ styles.listItem }>
                <Text
                    onPress={this.show.bind(this, this.props.title, this.props.navigator)}
                    numberOfLines={1}
                    style={ styles.listItemFont}>{this.props.title}</Text>
            </View>
        );
    }

}

const styles = {

    flex: {
        flex: 1,
    },

    listItem: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#DDDDDD',
        justifyContent: 'center',
    },

    listItemFont: {
        fontSize: 16,
    }

};

module.exports = ListItem;