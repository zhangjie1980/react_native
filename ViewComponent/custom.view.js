import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class CustomViewComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item, styles.leftItem, styles.center]}>
                    <Text>酒店</Text>
                </View>
                <View style={[styles.item, styles.centerItem]}>
                    <View style={[{flex: 1, borderBottomWidth: 1, borderColor: '#FFFFFF'}, styles.center]}>
                        <Text>旅游</Text>
                    </View>
                    <View style={[{flex: 1}, styles.center]}>
                        <Text>机票</Text>
                    </View>
                </View>
                <View style={[styles.item, styles.RightItem]}>
                    <View style={[{flex: 1, borderBottomWidth: 1, borderColor: '#FFFFFF'}, styles.center]}>
                        <Text>自由行</Text>
                    </View>
                    <View style={[{flex: 1}, styles.center]}>
                        <Text>租车</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    item: {
        flex: 1,
        height: 80,
        borderWidth: 1,
        borderColor: '#ffffff',
        backgroundColor: 'orange',
    },
    
    leftItem: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    
    centerItem: {
    },
    
    RightItem: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        
    }
    
    
});
