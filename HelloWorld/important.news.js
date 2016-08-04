/**
 * Created by zhangjie on 16/7/27.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

const ListItem = require('./list.item');

class ImportantNews extends Component {

    show(title) {
        alert(title);
    }

    render() {

        var news = [];

        for (var i in this.props.news) {
            var text = (
                <ListItem
                    title={this.props.news[i]}
                    key={i}
                ></ListItem>
            );
            news.push(text);
        }


        return (
            <View style={styles.flex}>
                <Text style={styles.newsTitle}>今日要闻</Text>
                {news}
            </View>
        );
    }

}

const styles = {
    flex: {
        flex: 1,
    },

    newsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CD1D1C',
        marginLeft: 10,
        marginTop: 15,
    }

};

module.exports = ImportantNews;