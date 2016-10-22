/**
 * Created by zhangjie on 16/10/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';

import Swiper from 'react-native-swiper';

//获取图片宽度，高度
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default class SwiperComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        );
    }
    
    componentWillMount() {
        alert(width + " " + height);
    }
}

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
