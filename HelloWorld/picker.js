/**
 * Created by zhangjie on 16/7/29.
 */

import React, {Component} from 'react';
import {
    View,
    Picker,
    ProgressViewIOS,
} from 'react-native';

class PickerView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            language: '中文'
        };
    }

    render() {
        return (
            <View>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.language}
                    onValueChange={
                        (lang) => this.setState({
                            language: lang
                        })
                    }>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="C语言" value="c"/>
                    <Picker.Item label="PHP开发" value="php"/>
                </Picker>
            </View>
        );
    }
}

const styles = {
    picker: {
        width: 100,
    }
};


module.exports = PickerView;
