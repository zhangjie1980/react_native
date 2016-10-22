/**
 * Created by zhangjie on 16/10/18.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    ViewPagerAndroid,
    View,
    Text,
} from 'react-native';

export default class AndroidViewPagerComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currentPage: 0,
        };
    }
    
    render() {
        return (
            <View style={styles.flex}>
                <ViewPagerAndroid
                    style={styles.flex}
                    initialPage={0}
                    //这里需要获取viewPager对象
                    ref={viewPager => {
                        this.viewPager = viewPager;
                    }}>
                    <View style={[styles.flex, styles.center, styles.page1]}>
                        <Text>page1</Text>
                    </View>
                    <View style={[styles.flex, styles.center, styles.page2]}>
                        <Text>page2</Text>
                    </View>
                    <View style={[styles.flex, styles.center, styles.page3]}>
                        <Text>page3</Text>
                    </View>
                </ViewPagerAndroid>
                
                <View style={styles.buttons}>
                    <Text style={styles.button} onPress={this.onPress.bind(this, 0)}>第一页</Text>
                    <Text style={styles.button} onPress={this.onPress.bind(this, 1)}>上一页</Text>
                    <Text style={styles.button} onPress={this.onPress.bind(this, 2)}>下一页</Text>
                    <Text style={styles.button} onPress={this.onPress.bind(this, 3)}>最后</Text>
                </View>
            
            </View>
        );
    }
    
    componentDidMount() {
    }
    
    onPress(id) {
        var currentPage;
        switch (id) {
            case 0:
                currentPage = 0;
                break;
            case 1:
                if (this.state.currentPage == 0) {
                    alert("到头啦");
                    return;
                }
                currentPage = this.state.currentPage - 1 == 0 ? 0 : this.state.currentPage - 1;
                break;
            case 2:
                if (this.state.currentPage == 2) {
                    alert("已经最后一页了");
                    return;
                }
                currentPage = this.state.currentPage + 1 == 2 ? 2 : this.state.currentPage + 1;
                break;
            case 3:
                currentPage = 2;
                break;
        }
        this.viewPager.setPage(currentPage);
        this.setState({
            currentPage: currentPage,
        });
    }
}

const styles = StyleSheet.create({
    
    flex: {
        flex: 1,
    },
    
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    page1: {},
    
    page2: {},
    
    page3: {},
    
    buttons: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    
    button: {
        flex: 1,
        textAlign: 'center',
    }
});
