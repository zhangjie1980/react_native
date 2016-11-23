/**
 * Created by zhangjie on 2016/11/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    NetInfo,
} from 'react-native';

var that;

export default class NetInfoComponent extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            connectionInfo: "",
            isConnected: "",
        };

        that = this;
    }

    componentWillMount() {
        // 设置网络状态监听
        // 这么写是没问题的，不过要注意，如果用在listener中，那么每次bind后返回的都是一个新的对象，所以是不合适的
        // NetInfo.addEventListener('statusChange', this._statusChange.bind(this));
        // 这么写需要全局that，或者箭头函数方式实现
        NetInfo.addEventListener('statusChange', this._statusChange);

        // 设置当前网络连接状态监听
        NetInfo.isConnected.addEventListener('connectChange', this._connectChange);

        // 获取当前网络的状态，比如 Wifi，cell（3G LTE） NONE
        NetInfo.fetch().done((connectionInfo) => {
            this.setState({
                connectionInfo: connectionInfo,
            })
        });

        // 获取当前网络的连接状态
        NetInfo.isConnected.fetch().done((isConnected) => {
            this.setState({
                isConnected: isConnected,
            })
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>NetInfo</Text>

                <Text>当前网络连接模式：{this.state.connectionInfo} </Text>
                <Text style={{marginTop: 20}}>当前网络连接状态：{this.state.isConnected ? 'online' : 'offline'} </Text>
            </View>
        )
    }

    componentWillUnmount() {
        NetInfo.removeEventListener('statusChange', this._statusChange);
        NetInfo.isConnected.removeEventListener('connectChange', this._connectChange);
    }

    箭头函数写法
    _statusChange = (connectionInfo) => {
        console.log(connectionInfo);
        this.setState({
            connectionInfo: connectionInfo,
        });
    };


    //用全局that方式
    // _statusChange(connectionInfo) {
    //     console.log(connectionInfo);
    //     that.setState({
    //         connectionInfo: connectionInfo,
    //     });
    // }

    //用bind this方式
    // _statusChange(connectionInfo) {
    //     console.log(connectionInfo);
    //     this.setState({
    //         connectionInfo: connectionInfo,
    //     });
    // }

    _connectChange = (isConnected) => {
        console.log(isConnected);
        this.setState({
            isConnected: isConnected,
        });
    }



}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
    },

    title: {
        height: 40,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },



});
