import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
    
    render(props) {
        const { textStyle, viewStyle } = styles;
      return (
          
         <View style={viewStyle}>
            <Text style={textStyle}>
               Albums
            </Text>
         </View>
      );
   }
}

const styles = {

    viewStyle: {
        backgroundColor: '#f8f8f8',
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
export default Header;