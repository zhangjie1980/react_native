import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native';

export default class FetchComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            url: "http://192.168.1.105:3000",
        };
    }
    
    render() {
        let that = this;
        return (
            <View style={styles.flex}>
                <TextInput
                    style={styles.input}
                    value={this.state.url}
                    onChangeText={(text) => this.setState({
                        url: text,
                    })}
                />
                <TouchableHighlight
                    style={{marginTop: 10}}
                    underlayColor="#63d5fc"
                    onPress={() => {
                        this._getData();
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>Fetch Get请求数据</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={{marginTop: 10}}
                    underlayColor="#63d5fc"
                    onPress={() => {
                        this._postData();
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>Fetch Post请求数据</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
    
    _getData() {
        fetch(this.state.url)
            .then((resp) => {
                alert(JSON.stringify(resp));
            })
            .catch((error) => {
                console.error(error);
            })
            .done();
    }
    
    _postData() {
        fetch(this.state.url, {
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'username=zhangjie&age=36'
        })
        .then((resp) => {
            alert(JSON.stringify(resp));
        })
        .catch((error) => {
            console.error(error);
        })
        .done();
    }
}

const styles = StyleSheet.create({
    
    flex: {
        flex: 1,
        padding: 20,
    },
    
    input: {
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
        color: '#ffffff',
    }
    
    
});
