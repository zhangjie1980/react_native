/**
 * Created by zhangjie on 16/10/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ProgressViewIOS,
    Text,
} from 'react-native';

export default class ProgressBarComponent extends Component {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            progress: 0,
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ProgressViewIOS
                    style={styles.progress}
                    progress={this.state.progress}
                    progressTintColor="red"
                />
                <Text style={{marginTop: 10}}>当前进度：{this.state.progress}</Text>
            </View>
        )
    }
    
    componentDidMount() {
        this.updateProgress();
    }
    
    updateProgress() {
        if (this.state.progress > 1) {
            this.setState({
                progress: 0,
            });
        }
        var progress = this.state.progress + 0.005;
        this.setState({
            progress: progress,
        });
        requestAnimationFrame(()=>{
            this.updateProgress();
        })
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    progress: {
        width: 200,
    }
    
});
