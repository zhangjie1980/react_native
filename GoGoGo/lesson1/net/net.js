/**
 * Created by zhangjie on 2017/3/21.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  ListView,
  Button,
  Image,
  StyleSheet
} from 'react-native'

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


export default class Net extends Component {
  
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      })
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.flex}
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionId, rowId) => this.renderRow(rowData, sectionId, rowId)}
        />
        <Button title="获取网络数据" onPress={() => {
          this.getMoviesFromApiAsync();
        }}/>
      </View>
    )
  }
  
  renderRow(rowData, sectionId, rowId) {
    return (
      <View style={styles.item}>
        <Image style={styles.icon} source={{uri: rowData.posters.thumbnail}}/>
        <Text numberOfLines={2} style={styles.text}>{ sectionId + "-" + rowId} {'\n'} {rowData.title}</Text>
      </View>
    )
  }
  
  getMoviesFromApiAsync() {
    return fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.movies),
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20
  },
  
  flex: {
    flex: 1,
    marginTop: 20,
  },
  
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  item: {
    height: 80,
    flexDirection: 'row',
    borderBottomColor: '#bebebe',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  
  icon: {
    height: 60,
    width: 40,
  },
  
  text: {
    height: 30,
    width: 280,
    marginLeft: 10,
  }
});