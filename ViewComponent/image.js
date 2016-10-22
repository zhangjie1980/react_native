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
                        //source={require('./img/1.png')}
                        source={{uri: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1477125664&di=d431801ac2a753d481a93877bbe9e1da&src=http://a.hiphotos.baidu.com/image/pic/item/f9dcd100baa1cd11daf25f19bc12c8fcc3ce2d46.jpg'}}
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
