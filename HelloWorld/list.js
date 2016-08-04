/**
 * Created by zhangjie on 16/7/27.
 */

import React, {Component} from 'react';
import {
    View,
} from 'react-native';

const ListItem = require('./list.item');
const ImportNews = require('./important.news');
const Header = require('./header');
const SearchView = require('./search.view');
const Advert = require('./advert');

class List extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {

        const { navigator } = this.props;
        return (
            <View>
                <Header/>
                <SearchView/>
                <Advert/>
                <ListItem title="一线城市楼市退烧 有房源一夜跌价160万" navigator={navigator}></ListItem>
                <ListItem title="解放军报报社大楼正在拆除 标识已被卸下(图)" navigator={navigator}></ListItem>
                <ListItem title="防总部署长江防汛:以防御98年量级大洪水为目标" navigator={navigator}></ListItem>
                <ListItem title="南京大学生发起亲吻陌生人活动 有女生献初吻" navigator={navigator}></ListItem>

                <ImportNews
                    news={[
                        '解放军报报社大楼正在拆除 标识已被卸下(图)',
                        '韩国停签东三省52家旅行社 或为阻止朝旅游创汇',
                        '防总部署长江防汛:以防御98年量级大洪水为目标, 这样的情况',
                    ]}>
                    ></ImportNews>

            </View>
        );
    }

}

module.exports = List;
