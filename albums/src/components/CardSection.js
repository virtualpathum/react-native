import React,{Component} from 'react';
import {View} from 'react-native';

class CardSection extends Component {
    render() {
        return(
            <View style = {styles.containerStyle}>{this.props.children}</View>
        )
    }
}

const styles ={
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        borderRadius: 2,
        borderColor:'#ffffff',
        borderBottomWidth: 0,
        backgroundColor: '#f8f8f8',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
};

export default CardSection;