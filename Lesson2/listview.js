/**
 * Created by zhangjie on 16/9/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
} from 'react-native';

import RowComoponent from './row.js';

export default class LisViewComponent extends Component {
    
    static defaultProps = {
    };
    
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
                renderRow={(rowData) => <RowComoponent data = {rowData}/>}
            />
        );
    }
    
    componentWillMount() {
        this._fakeData();
    }
    
    _fakeData() {
        
        var rows = [];
        for (var i = 0 ; i < 20 ; ++i) {
            rows.push("row " + i);
        }
        
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(rows),
        });
        
    }
    
}

const styles = {
    
    flex: {
        flex: 1,
    }
    
};