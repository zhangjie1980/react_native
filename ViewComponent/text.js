import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    PixelRatio,
} from 'react-native';

import HeaderComponent from "./header.js";
import SearchComponent from './search.js';
import ListItemComponent from "./list.item.js";

export default class TextViewComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            navigator: this.props.navigator,
        };
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderComponent/>
                <SearchComponent/>
                <View style={{flex: 1}}>
                    <ListItemComponent title="美女图片看这里" navigator={this.state.navigator}/>
                    <ListItemComponent title="要闻北京新闻14℃北京这个小山村让习近平“把心留在这里" navigator={this.state.navigator}/>
                    <ListItemComponent title="习近平告诉干部如何成为行家里手" navigator={this.state.navigator}/>
                    <ListItemComponent title="上海明起实施不动产统一登记制度 此前证书不更换" navigator={this.state.navigator}/>
                    <ListItemComponent title="个人可慢就业，创造就业机会的政策不能慢" navigator={this.state.navigator}/>

                    <ImportantNewsComponent
                        news={
                            [
                                "美国嫌犯承认抢劫留学生：他是中国人 肯定有钱",
                                "快报新LOGO启用 范冰冰、TFBOYS、吴亦凡加盟",
                                "多城出台楼市调控政策",
                                "30强巡礼：尼克斯孤注一掷 砸巨资豪赌季后赛"
                            ]
                        }
                    />
                </View>
            </View>
        );
    }
}

class ImportantNewsComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        
        var news = [];
        for (var i in this.props.news) {
            var text = (
                <View style={styles.item}>
                    <Text
                        numberOfLines={1}
                        onPress={this.onPress.bind(this, this.props.news[i])}
                        //onPress={e=>this.onPress(val)}
                    >
                        {this.props.news[i]}
                    </Text>
                </View>
                
            );
            news.push(text);
        }
        
        // 初始状态
        this.state = {
            news: news,
        };
    }
    
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.newsTitle}>今日要闻</Text>
                {this.state.news}
            </View>
        );
    }
    
    onPress(text) {
        alert(text);
    }
    
    
}

const styles = StyleSheet.create({
    
    flex: {
        flex: 1,
    },
    
    newsTitle: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 10,
        color: 'red',
        fontWeight: 'bold',
    },
    
    item: {
        height: 40,
        borderBottomWidth: 2 / PixelRatio.get(),
        borderBottomColor: '#bebebe',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        
    },
    
    news: {
        
    }
    
});