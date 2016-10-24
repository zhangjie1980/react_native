/**
 * Created by zhangjie on 16/10/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Text,
} from 'react-native';



export default class SectionListViewComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({
                getRowData: (dataBlob, sectionId, rowId) => dataBlob[sectionId + ":" + rowId],
                getSectionHeaderData: (dataBlob, sectionId) => dataBlob[sectionId],
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })
        };
    }
    
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        } else {
            return this.renderListView();
        }
    }
    
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.fetchData();
        }, 1000);
    }
    
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    
    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text>正在获取数据中...</Text>
            </View>
        )
    }
    
    renderListView() {
        return (
            <ListView
                style={styles.list}
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionId, rowId) => this.renderRow(rowData, sectionId, rowId)}
                renderSectionHeader={(sectionData, sectionId) => this.renderSectionHeader(sectionData, sectionId)}
                removeClippedSubviews={true}
            />
        )
    }
    
    renderRow(rowData, sectionId, rowId) {
        return (
            <View style={styles.row}>
                <Text>{rowData + "-" + sectionId + "-" + rowId}</Text>
            </View>
        )
    }
    
    renderSectionHeader(sectionData, sectionId) {
        return (
            <View style={styles.section}>
                <Text>{sectionData + "-" + sectionId}</Text>
            </View>
        )
    }
    
    fetchData() {
    
        var responseData={
            "results" : [
                {
                    "organization":"马云的淘宝",
                    "id" : 12348124,
                    "users" : [
                        {"user": "aaaaa", "md5": "589a574553250be33f3b1170624ad2d1"},
                        {"user": "bbbbb", "md5": "5cbc80332e3523dd9d90cc116daf9d8e"},
                        {"user": "ccccc", "md5": "7d8c37997f09c122794651b1ec841491"},
                        {"user": "ddddd", "md5": "3aaaaa332e3523dd9d90cc116daf9d8e"},
                        {"user": "eeeee", "md5": "2bbbbb332e3523dd9d90cc116daf9d8e"},
                    ]
                },
                {
                    "organization" : "马化腾的腾讯",
                    "id" : 1235513,
                    "users" : [
                        {"user": "aaaaa", "md5": "589a574553250be33f3b1170624ad2d1"},
                        {"user": "bbbbb", "md5": "5cbc80332e3523dd9d90cc116daf9d8e"},
                        {"user": "ccccc", "md5": "7d8c37997f09c122794651b1ec841491"},
                        {"user": "ddddd", "md5": "3aaaaa332e3523dd9d90cc116daf9d8e"},
                        {"user": "eeeee", "md5": "2bbbbb332e3523dd9d90cc116daf9d8e"},
                    ]
                },
                {
                    "organization" : "李彦宏的百度",
                    "id" : 1237141,
                    "users" : [
                        {"user": "aaaaa", "md5": "589a574553250be33f3b1170624ad2d1"},
                        {"user": "bbbbb", "md5": "5cbc80332e3523dd9d90cc116daf9d8e"},
                        {"user": "ccccc", "md5": "7d8c37997f09c122794651b1ec841491"},
                        {"user": "ddddd", "md5": "3aaaaa332e3523dd9d90cc116daf9d8e"},
                        {"user": "eeeee", "md5": "2bbbbb332e3523dd9d90cc116daf9d8e"},
                    ]
                },
                {
                    "organization" : "周鸿祎的360",
                    "id" : 1727272,
                    "users" : [
                        {"user": "aaaaa", "md5": "589a574553250be33f3b1170624ad2d1"},
                        {"user": "bbbbb", "md5": "5cbc80332e3523dd9d90cc116daf9d8e"},
                        {"user": "ccccc", "md5": "7d8c37997f09c122794651b1ec841491"},
                        {"user": "ddddd", "md5": "3aaaaa332e3523dd9d90cc116daf9d8e"},
                        {"user": "eeeee", "md5": "2bbbbb332e3523dd9d90cc116daf9d8e"},
                    ]
                }
            ]
        };
    
        var organizations = responseData.results,
            length = organizations.length,
            //4个组织机构
            dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            organization,
            users,
            userLength,
            user,
            i,
            j;
    
        for (i = 0; i < length; i++) {
            organization = organizations[i];
        
            sectionIDs.push(organization.id);
            dataBlob[organization.id] = organization.organization;
        
            users = organization.users;
            userLength = users.length;
        
            rowIDs[i] = [];//rowIDs是一个二维数组
        
            for(j = 0; j < userLength; j++) {
                user = users[j].user;
                rowIDs[i].push(users[j].md5);
            
                dataBlob[organization.id + ':' + users[j].md5] = user;
            }
        }
    
        this.setState({
            dataSource : this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
            loaded     : true
        });
        
    }
}

const styles = StyleSheet.create({
    
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    list: {
        flex: 1,
        marginTop: 20,
    },
    
    section: {
        height: 30,
        backgroundColor: '#f9adfe',
        justifyContent: 'center',
    },
    
    row: {
        height: 80,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#bebebe',
        borderBottomWidth: 1,
    }
    
});
