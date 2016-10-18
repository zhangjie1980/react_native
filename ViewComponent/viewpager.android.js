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
        this.state = {};
    }
    
    render() {
        return (
            <View style={styles.flex}>
                <ViewPagerAndroid
                    style={styles.flex}
                    initialPage={0}>
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
            </View>
        );
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
    
    page1: {
        backgroundColor: 'red',
    },
    
    page2: {
        backgroundColor: 'green',
    },
    
    page3: {
        backgroundColor: 'blue',
    }
});
