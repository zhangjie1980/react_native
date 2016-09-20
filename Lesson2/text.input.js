/**
 * Created by zhangjie on 16/9/9.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native';

export default class TextInputComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            account: "",
            password: "",
            enable: false,
        };
    }
    
    render() {
        return (
            <View style={styles.flex}>
                <TextInput
                    style={[styles.search, {marginTop: 100}]}
                    placeholder="请输入您的手机号码"
                    keyboardType='numeric'
                    numberOfLines={1}
                    maxLength={11}
                    // 如果提供了这个属性，那么用户是无法重新设置值的
                    // 并且会发生闪烁效果
                    //value="138"
                    onChangeText={(text)=>this.accountOnChange(text)}
                    value={this.state.account}
                />
                
                <TextInput
                    style={[styles.search, {marginTop: 5}]}
                    placeholder="请输入您的密码"
                    keyboardType='default'
                    numberOfLines={1}
                    secureTextEntry={true}
                    onChangeText={(text) => this.passwordOnChange(text)}
                    value={this.state.password}
                />
                
                <TouchableHighlight
                    underlayColor= {
                        this.state.enable ? '#5bc0de' : 'gray'
                    }
                    activeOpacity={1.0}
                    style={[
                        styles.login,
                        {
                            backgroundColor: this.state.enable ? '#63B8FF' : 'gray'
                        }
                    ]}
                    onPress={
                        this.state.enable ? this.handleLogin.bind(this) : null
                    }
                    >
                    <Text style={styles.loginText}>登 录</Text>
                </TouchableHighlight>
            </View>
        );
    }
    
    accountOnChange(account) {
        this.setState({account: account});
        this.updateLogin(account, this.state.password);
    }
    
    passwordOnChange(password) {
        this.setState({password: password});
        this.updateLogin(this.state.account, password);
    }
    
    updateLogin(account, password) {
        console.log("account = " + account);
        console.log("password = " + password);
        if (account.length != 11 || password.length < 6) {
            this.setState({enable: false});
        } else {
            this.setState({enable: true});
        }
    }
    
    handleLogin(e) {
        alert("Account: " + this.state.account + " password: " + this.state.password);
    }
}


const styles = StyleSheet.create({
    
    flex: {
        flex: 1,
        padding: 20
    },
    
    search: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
    },
    
    login: {
        marginTop: 15,
        // backgroundColor: '#63B8FF',
        borderColor: '#5bc0de',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
    loginText: {
        fontSize: 20,
        color: '#ffffff',
    }
    
    
    
    
});
