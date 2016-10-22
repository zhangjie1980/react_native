/**
 * Created by zhangjie on 16/10/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class FetchComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            movie: null,
        };
    }
    
    render() {
        //写法1
        //return (
        // <View style={styles.flex}>
        //     {
        //         this.state.movie == null ?
        //             <View>
        //                 <Text>正在获取今天的电影...</Text>
        //             </View>
        //             :
        //             <View>
        //                 <Image
        //                     style={styles.img}
        //                     source={{uri: this.state.movie.posters.thumbnail}} />
        //                 <Text>{this.state.movie.title}</Text>
        //             </View>
        //     }
        // </View>
        //);
        
        //写法2
        if (this.state.movie == null) {
            return this.renderLoadingView();
        } else {
            return this.renderMovie();
        }
        
    }
    
    componentDidMount() {
        this.timer = setTimeout(
            () => {
                if (this.state.movie == null) {
                    //获取网络数据
                    fetch(REQUEST_URL)
                        .then((response) => response.json())
                        .then((responseJson) => {
                            this.setState({
                                movie: responseJson.movies[0],
                            })
                        })
                        //调用了done() —— 这样可以抛出异常而不是简单忽略
                        .done();
                }
            }, 1000
        );
    }
    
    renderLoadingView() {
        return (
            <View style={styles.flex}>
                <Text>正在获取今天的电影...</Text>
            </View>
        )
    }
    
    renderMovie() {
        return (
            <View style={styles.flex}>
                <Image
                    style={styles.img}
                    source={{uri: this.state.movie.posters.thumbnail}}/>
                <Text>{this.state.movie.title}</Text>
            </View>
        )
    }
    
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    
    
}

const styles = StyleSheet.create({
    
    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    img: {
        width: 100,
        height: 150,
    }
    
});


