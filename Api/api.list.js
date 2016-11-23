/**
 * Created by zhangjie on 16/10/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Text,
    TouchableHighlight,
    Alert,
} from 'react-native';

let that;

import AsyncStorageComponent from './async_storage.js';
import FetchComponent from './fetch.js';
import CameraRollComponent from './camera.roll.js';
import NetInfo from './netinfo.js';

export default class ApiListComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        
        var items = ['AsyncStorage', 'NetInfo', 'Fetch', 'CameraRoll', "test"];
        
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(items),
            navigator: this.props.navigator,
        };
        that = this;
    }
    
    render() {
        return (
            <ListView
                style={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderSeparator={this._renderSeperator}
            />
        );
    }
    
    _renderRow(rowData, sectionId, rowId, highlightRow) {
        return (
            <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#bebebe"
                onPress={() => {
                    that.onItemClick(rowData, sectionId, rowId, highlightRow);
                }}>
                <View style={styles.item}>
                    <Text>{rowData}</Text>
                </View>
            </TouchableHighlight>
        )
    }
    
    _renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
                }}
            />
        );
    }
    
    onItemClick(rowData, sectionId, rowId, highlightRow) {
        highlightRow(sectionId, rowId);
        if (rowData === 'AsyncStorage') {
            this._jumpTo('AsyncStorageComponent', AsyncStorageComponent, false);
        } else if (rowData === 'NetInfo') {
            this._jumpTo('NetInfo', NetInfo, false);
        } else if (rowData === 'Fetch') {
            this._jumpTo('FetchComponent', FetchComponent, false);
        } else if (rowData === 'CameraRoll') {
            this._jumpTo('CameraRollComponent', CameraRollComponent, false);
        }
    }

    _jumpTo(componentName, component, ignoreBack) {
        this.state.navigator.push({
            name: componentName,
            component: component,
            ignoreBack:false,
            handleBack: (navigator) => {
                Alert.alert('提示','确定要返回么?',
                    [{text:'取消',onPress:() => {}}, {text:'确定',onPress:() => { navigator.pop(); }}]);
                return true;
            }
        });
    }
}

const styles = StyleSheet.create({
    
    list: {
        flex: 1,
        marginTop: 20,
    },
    
    item: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    }
    
});
