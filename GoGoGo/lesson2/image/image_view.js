/**
 * Created by zhangjie on 2017/4/11.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

/**
 * 在浏览器中，如果你不给图片指定尺寸，那么浏览器会首先渲染一个0x0大小的元素占位，
 * 然后下载图片，在下载完成后再基于正确的尺寸来渲染图片。这样做的最大问题是UI会在图片加载的过程中上下跳动，使得用户体验非常糟糕。
 *
 * 在React Native中我们有意避免了这一行为。如此一来开发者就需要做更多工作来提前知晓远程图片的尺寸（或宽高比），
 * 但我们相信这样可以带来更好的用户体验。然而，从已经打包好的应用资源文件中读取图片
 * （使用require('image!x')语法）则无需指定尺寸，因为它们的尺寸在加载时就可以立刻知道。
 */

export default class ImageView extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      load: 'local',
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button title="从本地工程中引入图片" onPress={this.change.bind(this, 'local')}/>
        <Button title="从网络中引入图片" onPress={this.change.bind(this, 'net')}/>
        <Button title="从原生APP中引入图片" onPress={this.change.bind(this, 'native')}/>
        {this.loadImg()}
      </View>
    )
  }
  
  change(from) {
    this.setState({
      load: from,
    })
  }
  
  loadImg() {
    if (this.state.load === 'local') {
      return (
        <Image source={require('../../img/angel.jpg')}></Image>
      )
    } else if (this.state.load === 'net') {
      return (
        //从网络获取图片，需要手动指定图片大小，否则不会显示
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
               style={{width: 200, height: 200}}
        />
      )
    } else if (this.state.load === 'native') {
      return (
        //从原生手机中图片，需要手动指定图片大小，否则不会显示
        <Image source={{uri: 'ic_launcher'}}
               style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Inside</Text>
        </Image>
      )
    }
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
  }
  
});
