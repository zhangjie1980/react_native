/**
 * Created by zhangjie on 16/7/29.
 */

import React, {Component} from 'react';
import {
    View,
    ProgressViewIOS,
} from 'react-native';

class ProgressView extends Component {
    render() {
        return (
            <View>
                <ProgressViewIOS
                    style={styles.progress}
                    progress={0.5}
                />
            </View>
        );
    }
}

const styles = {
    progress: {
        width: 200,
        height: 100,
    }
};

module.exports = ProgressView;
