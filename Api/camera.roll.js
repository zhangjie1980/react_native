/**
 * Created by zhangjie on 2016/11/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    CameraRoll,
    Text,
    ScrollView,
    Image,
    TouchableHighlight,
} from 'react-native';

let fetchParams = {
    first: 100,
    assetType: 'Photos',
    //groupTypes in not supported on Android
    // groupTypes:'All',
};

export default class CameraRollComponent extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            img1: "http://d.hiphotos.baidu.com/image/pic/item/314e251f95cad1c8042ddbc97b3e6709c83d514d.jpg",
            img2: "http://d.hiphotos.baidu.com/image/pic/item/5882b2b7d0a20cf482c772bf73094b36acaf997f.jpg",
            images: [],
        };
    }

    render() {
        return (
            <ScrollView style={styles.flex}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Image
                            style={styles.image}
                            resizeMode='stretch'
                            source={{uri: this.state.img1}}/>
                    </View>

                    <View style={styles.column}>
                        <Image
                            style={styles.image}
                            resizeMode='stretch'
                            source={{uri: this.state.img2}}/>
                    </View>
                </View>

                <TouchableHighlight
                    style={{marginTop: 10}}
                    underlayColor="#63d5fc"
                    onPress={() => {
                        this._saveImg();
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>保存图片</Text>
                    </View>
                </TouchableHighlight>

                <View style={styles.img_grid}>
                    {
                        this.state.images.map((image) => {
                            return <Image style={styles.img}
                                          resizeMode='stretch'
                                          source={image}
                                          key={image.uri}/>
                        })
                    }
                </View>

            </ScrollView>
        );
    }

    componentWillMount() {
        this._getPhotos();
    }

    _saveImg() {
        CameraRoll.saveToCameraRoll(this.state.img1)
            .then((url) => {
                alert("保存成功" + url);
                this._getPhotos();
            })
            .catch((e) => {
                alert(e);
            })
            .done();

        CameraRoll.saveToCameraRoll(this.state.img2)
            .then((url) => {
                alert("保存成功" + url);
                this._getPhotos();
            })
            .catch((e) => {
                alert(e);
            })
            .done();
    }

    _getPhotos() {
        let _that = this;
        CameraRoll.getPhotos(fetchParams)
            .then((data) => {
                console.log(data);
                let edges = data.edges;
                let images = edges.map((edge) => edge.node.image);
                _that.setState({
                    images: images,
                });
            })
            .catch((e) => {
                alert(e);
            })
            .done();
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        padding: 20,
    },

    row: {
        flexDirection: 'row',
        flex: 1,
        height: 150,
        backgroundColor: "#bebebe"
    },

    column: {
        flex: 1,
    },

    image: {
        flex: 1,
        height: 150,
    },

    button: {
        flex: 1,
        height: 40,
        backgroundColor: '#3393ca',
        alignItems: 'center',
        justifyContent: 'center',

    },

    button_text: {
        color: 'white',
        fontSize: 16,
    },

    img_grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    img: {
        width: 80,
        height: 80,
        margin: 10,
    }
});
