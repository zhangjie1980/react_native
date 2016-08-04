/**
 * Created by zhangjie on 16/7/29.
 */

import React, {Component} from 'react';
import {
    View,
    Image,
} from 'react-native';

class Advert extends Component {

    render() {
        return (
            <View>
                <Image
                    style={styles.img}
                    resizeMode='contain'
                    source={{uri: 'https://static.9f.cn/pos/img/20160722/1469183016945.png'}}
                />
            </View>
        );
    }
}

const styles = {

    img: {
        flex: 1,
        height: 100,
    },

};

module.exports = Advert;
