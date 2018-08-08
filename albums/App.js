import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/albumList';
//import { Header } from './src/components/header';

export default class App extends React.Component {
  render() {
    return (
      //to use all the available space we use this style
      <View style={{flex:1}}>
        <Header headerText={'Android Voice 111'}/>
        <AlbumList />
      </View>
    );
  }
}

