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
        data: [
            {
                "organization":"马云的淘宝",
                "id" : 12348124,
            },
            {
                "organization" : "马化腾的腾讯",
                "id" : 1235513,
            },
            {
                "organization" : "李彦宏的百度",
                "id" : 1237141,
            },
            {
                "organization" : "周鸿祎的360",
                "id" : 1727272,
            }
        ]
    };
    
    // 构造
    constructor(props) {
        super(props);
       
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                getSectionHeaderData: (dataBlob, sectionId) => dataBlob[sectionId],
                getRowData: (dataBlob, sectionId, rowId) => dataBlob[sectionId + ":" + rowId],
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
        
        for(var i = 0 ; i < this.props.data.length ; ++i) {
            var organization = this.props.data[i];
            sectionIds.push(organization.id);
            dataBlob[organization.id] = organization.organization;
            
            rowIds[i] = [];
            for (var j = 0 ; j < 10 ; ++j) {
                // var user = organization.users[j];
                rowIds[i].push("1000" + j);
                dataBlob[organization.id + ':' + "1000" + j] = "xxx";
            }
        }
        
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
            loaded: true,
        });
        
    }
    
}

const styles = StyleSheet.create({
    
    list: {
        flex: 1,
        marginTop: 20,
    }
    
});
