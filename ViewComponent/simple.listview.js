/**
 * Created by zhangjie on 16/10/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Text,
    Image,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class SimpleListViewComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            })
        };
    }
    
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        } else {
            return this.renderMovies();
        }
    }
    
    componentDidMount() {
        
        //从服务器获取电影列表
        this.timer = setTimeout(
            () => {
                this.fetchData();
            }, 1000
        );
        
    }
    
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    
    renderLoadingView() {
        return (
            <View style={styles.center}>
                <Text>正在获取本周电影信息...</Text>
            </View>
        )
    }
    
    renderMovies() {
        return (
            <ListView
                style={styles.flex}
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionId, rowId) => this.renderRow(rowData, sectionId, rowId)}
                removeClippedSubviews={true}
                initialListSize={10}
                onEndReachedThreshold={500}
                onEndReached={() => {
                    alert("onEndReached")
                }}
                pageSize={20}
                onChangeVisibleRows={(visibleRows, changedRows) => {
                    console.log(JSON.stringify(visibleRows) + "\n" + JSON.stringify(changedRows))
                }}
            />
        )
    }
    
    renderRow(rowData, sectionId, rowId) {
        return (
            <View style={styles.item}>
                <Image style={styles.icon} source={{uri: rowData.posters.thumbnail}}/>
                <Text numberOfLines={2} style={styles.text}>{ sectionId + "-" + rowId} {'\n'} {rowData.title}</Text>
            </View>
        )
    }
    
    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    loaded: true,
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.movies),
                })
            })
            .catch((e) => {
                console.log(e);
            });
    }
}

const styles = StyleSheet.create({
    
    flex: {
        flex: 1,
        marginTop: 20,
    },
    
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    item: {
        height: 80,
        flexDirection: 'row',
        borderBottomColor: '#bebebe',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    
    icon: {
        height: 60,
        width: 40,
    },
    
    text: {
        height: 30,
        width: 280,
        marginLeft: 10,
    }
    
});

