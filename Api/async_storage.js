/**
 * Created by zhangjie on 16/10/24.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';

export default class AsyncStorageComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            setKey: "",
            setValue: "",
            getKey: "",
            getValue: "",
            outPut: "",
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input_view}>
                    <TextInput style={styles.set_input} value={this.state.setKey} onChangeText={(text) => this.setState({setKey: text})}/>
                    <View style={styles.space}/>
                    <TextInput style={styles.set_input} value={this.state.setValue} onChangeText={(text) => this.setState({setValue: text})}/>
                </View>
                <TouchableHighlight
                    style={{marginTop: 10}}
                    underlayColor="#63d5fc"
                    onPress={() => {
                        this.setValue();
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>设置值</Text>
                    </View>
                </TouchableHighlight>
    
                <View style={styles.input_view}>
                    <TextInput style={styles.set_input} value={this.state.getKey} onChangeText={(text) => this.setState({getKey: text})}/>
                    <View style={styles.space}/>
                    <TextInput style={styles.set_input} value={this.state.getValue} editable={false} />
                </View>
                <TouchableHighlight
                    style={{marginTop: 10}}
                    underlayColor="#63d5fc"
                    onPress={() => {
                        this.getValue();
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>获取值</Text>
                    </View>
                </TouchableHighlight>
    
                <TouchableHighlight
                    style={{marginTop: 10}}
                    underlayColor="#63d5fc"
                    onPress={() => {
                        this.clear();
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>清除所有</Text>
                    </View>
                </TouchableHighlight>
    
                <TouchableHighlight
                    style={{marginTop: 10}}
                    underlayColor="#63d5fc"
                    onPress={() => {
                        this.getAllKeys();
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>获取所有KEY</Text>
                    </View>
                </TouchableHighlight>
    
                <TouchableHighlight
                    style={{marginTop: 10}}
                    underlayColor="#63d5fc"
                    onPress={() => {
                        this.multiGet();
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>获取所有KEY-VALUE</Text>
                    </View>
                </TouchableHighlight>
                
                <View style={styles.out_put}>
                    <Text>{this.state.outPut}</Text>
                </View>
            </View>
        );
    }
    
    setValue() {
        if (this.state.setKey == "" || this.state.setValue == "") {
            alert("参数不能为空");
            return;
        }
        AsyncStorage.setItem(this.state.setKey, this.state.setValue, (error) => {
            if (error) {
                alert("保存失败");
            } else {
                this.setState({
                    setKey: "",
                    setValue: "",
                })
            }
        })
    }
    
    getValue() {
        if (this.state.getKey == "") {
            alert("参数不能为空");
            return;
        }
        AsyncStorage.getItem(this.state.getKey, (error, result) => {
            if (error) {
                alert("获取值失败");
            } else {
                this.setState({
                    getValue: result,
                })
            }
        })
    }
    
    clear() {
        AsyncStorage.clear((error) => {
            if (error) {
                alert("清除失败");
            } else {
                this.setState({
                    setKey: "",
                    setValue: "",
                    getKey: "",
                    getValue: "",
                    outPut: "",
                })
            }
        })
    }
    
    getAllKeys() {
        AsyncStorage.getAllKeys((error, array) => {
            if (error) {
                alert("获取所有KEY失败")
            } else {
                this.setState({
                    outPut: JSON.stringify(array),
                })
            }
        })
    }
    
    multiGet() {
        AsyncStorage.getAllKeys((error, array) => {
            if (error) {
                alert("获取所有KEY失败")
            } else {
                return array;
            }
        }).then((array) => {
            AsyncStorage.multiGet(array, (error, arrays) => {
                if (error) {
                    alert("获取所有KEY-VALUE失败")
                } else {
                    this.setState({
                        outPut: JSON.stringify(arrays),
                    })
                }
            })
        }).done();
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 20,
    },
    
    input_view: {
        flexDirection: 'row'
    },
    
    set_input: {
        flex: 1,
        height: 40,
        borderColor: '#bebebe',
        borderWidth: 1,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    
    space: {
        width: 10,
        height: 40,
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
    
    out_put: {
        flex: 1,
        backgroundColor: '#bebebe',
        marginTop: 10,
    }
});
