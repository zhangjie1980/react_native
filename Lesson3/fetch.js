/**
 * Created by zhangjie on 16/9/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
} from 'react-native';

import RowComponent from './row.js';

export default class FetchListViewComponent extends Component {
    
    static defaultProps = {};
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            })
        };
    }
    
    render() {
        return (
            <ListView
                style={styles.flex}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <RowComponent data={rowData} press={this._onPress}/>}
            />
        );
    }
    
    componentWillMount() {
        this._fetchData();
    }
    
    _onPress(data) {
        alert(data);
    }
    
    _fetchData() {
        /**
         * fetch异步调用
         * 不带有任何参数
         */
        
        /*
         fetch("http://localhost:8888")
         .then((response) => response.json())
         .then((responseJson) => {
         console.log(responseJson);
         this.setState({
         dataSource: this.state.dataSource.cloneWithRows(responseJson.result)
         });
         })
         .catch((error) => {
         console.log(error);
         })
         .done();
         */
        
        /**
         * GET请求
         */
        var request = fetch("http://localhost:8888?name=zhangjie", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'json'
            },
        });
        
        request
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.result),
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    
        /**
         * POST请求
         */
        /*
        var request = fetch("http://localhost:8888", {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: 'key=1'
        });
        
        request
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.result),
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
        */
    }
    
}

const styles = StyleSheet.create({
    
    flex: {
        flex: 1,
    }
    
});
