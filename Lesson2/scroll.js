/**
 * Created by zhangjie on 16/9/13.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    RefreshControl,
} from 'react-native';

import RowComponent from './row.js';

export default class ScorllViewComponent extends Component {
    
    static defaultProps = {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isRefreshing: false,
            loaded: 0,
        };
    }
    
    render() {
        return (
            <ScrollView style={styles.scroll}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={()=>{this._onRefresh()}}
                                tintColor="#ff0000"
                                title="Loading..."
                                titleColor="#00ff00"
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="#ffff00"
                            />
                        }>
                <RowComponent data={this.props.array[0]} press={this._onPress}/>
                <RowComponent data={this.props.array[1]} press={this._onPress}/>
                <RowComponent data={this.props.array[2]} press={this._onPress}/>
                <RowComponent data={this.props.array[3]} press={this._onPress}/>
                <RowComponent data={this.props.array[4]} press={this._onPress}/>
                <RowComponent data={this.props.array[5]} press={this._onPress}/>
                <RowComponent data={this.props.array[6]} press={this._onPress}/>
                <RowComponent data={this.props.array[7]} press={this._onPress}/>
                <RowComponent data={this.props.array[8]} press={this._onPress}/>
                <RowComponent data={this.props.array[9]} press={this._onPress}/>
            </ScrollView>
        );
    }
    
    _onPress(data) {
        alert(data);
    }
    
    _onRefresh() {
        console.log("onRefresh");
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
            });
        }, 5000);
    }
}

const styles = StyleSheet.create({
    
    scroll: {
        flex: 1,
        padding: 20,
    },
    
    red: {
        height: 40,
        backgroundColor: 'red',
        marginTop: 20,
    },
    
    blue: {
        height: 40,
        backgroundColor: 'blue',
        marginTop: 20,
    },
    
    yellow: {
        height: 40,
        backgroundColor: 'yellow',
        marginTop: 20,
    },
    
    green: {
        height: 40,
        backgroundColor: 'green',
        marginTop: 20,
    }
    
    
});
