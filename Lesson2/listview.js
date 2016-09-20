/**
 * Created by zhangjie on 16/9/20.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Text,
} from 'react-native';

import RowComponent from "./row.js";
import SectionComponent from "./section.js";

export default class ListViewComponent extends Component {
    
    static defaultProps = {
        names: {
            
        }
    };
    
    // 构造
    constructor(props) {
        super(props);
        
        var getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
        var getRowData = (dataBlob, sectionId, rowId) => dataBlob[sectionId + ":" + rowId];
        
        const ds = new ListView.DataSource({
            getSectionData: getSectionData,
            getRowData: getRowData,
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(this.props.names),
            
        };
    }
    
    render() {
        return (
            <ListView
                style={styles.list}
                dataSource={this.state.dataSource}
                renderSectionHeader={(sectionData, sectionId) => <SectionComponent data={sectionData} />}
                renderRow={(rowData, sectionId, rowId) => <RowComponent data={rowData} press={this._onPress} />}
            />
        );
    }
    
    _onPress(data) {
        alert(data);
    }
}

const styles = StyleSheet.create({
    
    list: {
        flex: 1,
        marginTop: 20,
    }
    
});
