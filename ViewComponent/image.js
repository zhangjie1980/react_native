/**
 * Created by zhangjie on 16/10/16.
 */
import React, {Component} from "react";
import {StyleSheet, View, Image, PixelRatio, TouchableHighlight} from "react-native";

export default class ImageComponent extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            index: 0,
            imgs: [
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => {
                    this.props.navigator.pop();
                }}>
                    <Image style={styles.img}
                           source={require('./img/1.png')}
                        //source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    >
                    </Image>
                </TouchableHighlight>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: 375,
        height: 667,
        backgroundColor: 'red',
    }

});
