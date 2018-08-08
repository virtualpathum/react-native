
//We need to React to convert JSX to react, that is why we destrycturing Component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums :[] };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums:response.data}))
    }

    renderAlbums(){
        return this.state.albums.map(album => < AlbumDetail key={album.title} album = {album} />);
    }
    //this method is a must for class components
    render() {
       // console.log(this.state);
        //const { textStyle, viewStyle } = styles;
      return (
          
         <ScrollView>
            {this.renderAlbums()}
         </ScrollView>
      );
   }
}

const styles = {

    viewStyle: {
        backgroundColor: '#fdfdfd',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
export default AlbumList;