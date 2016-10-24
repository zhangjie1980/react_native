/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import SideMenu from 'react-native-side-menu';

export default class ViewComponent2 extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'home',
            openMenu: false,
        };
    }
    
    render() {
        
        var home = (
            <View style={[styles.container, {backgroundColor: '#bebebe'}]}>
                <Text>首页</Text>
            </View>
        );
        
        var gain = (
            <View style={[styles.container, {backgroundColor: '#febebe'}]}>
                <Text>赚吧</Text>
            </View>
        );
        
        
        var menu = <Menu onItemSelected={(item) => this.onItemSelected(item)}/>;
        
        return (
            <SideMenu menu={menu}
                 >
                <TabNavigator
                    tabBarStyle={{height: 80}}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        renderIcon={() => <Image style={styles.tab} source={require("./icon/ic_tab_item_main_normal.png")}/>}
                        renderSelectedIcon={() => <Image style={styles.tab} source={require("./icon/ic_tab_item_main_selected.png")}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        {home}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'gain'}
                        title="赚吧"
                        renderIcon={() => <Image style={styles.tab} source={require("./icon/ic_tab_item_gain_normal.png")}/>}
                        renderSelectedIcon={() => <Image style={styles.tab} source={require("./icon/ic_tab_item_gain_selected.png")}/>}
                        renderBadge={() => <Text>hello</Text>}
                        onPress={() => this.setState({selectedTab: 'gain'})}>
                        {gain}
                    </TabNavigator.Item>
                </TabNavigator>
            </SideMenu>
        );
    }
    
    onItemSelected(item) {
        
    }
}

class Menu extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
    }
    
    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired,
    };
    
    render() {
        return (
            <View style={styles.menu}>
                <Text style={styles.item} onPress={() => this.props.onItemSelected("选择题一")}>选择题一</Text>
                <Text style={styles.item} onPress={() => this.props.onItemSelected("选择题二")}>选择题二</Text>
                <Text style={styles.item} onPress={() => this.props.onItemSelected("选择题三")}>选择题三</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    
    tab: {
        height: 50,
        width: 50,
    },
    
    menu: {
        marginTop: 20,
    },
    
    item: {
        height: 40,
    }
});

AppRegistry.registerComponent('ViewComponent2', () => ViewComponent2);
