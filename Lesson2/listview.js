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
        sections: ['section 1', 'section 2', 'section 3', 'section 4'],
        rows: ['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6'],
    };
    
    // 构造
    constructor(props) {
        super(props);
        
        var getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
        var getRowData = (dataBlob, sectionId, rowId) => dataBlob[sectionId + ":" + rowId];
        
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            }),
        };
    }
    
    render() {
        return (
            <ListView
                style={styles.list}
                dataSource={this.state.dataSource}
                renderSectionHeader={(sectionData, sectionId) => <SectionComponent data={sectionData + " " + sectionId} />}
                renderRow={(rowData, sectionId, rowId) => <RowComponent data={rowData + " " + sectionId + " " + rowId} press={this._onPress} />}
            />
        );
    }
    
    componentWillMount() {
        this._fakeData();
    }
    
    _onPress(data) {
        alert(data);
    }
    
    _fakeData() {
        var dataBlob = {};
        var sectionIds = [];
        var rowIds = [];
        
        this.props.sections.map((data) => {
            
        });
        
    }
    
}

const styles = StyleSheet.create({
    
    list: {
        flex: 1,
        marginTop: 20,
    }
    
});
