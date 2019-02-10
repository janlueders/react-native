import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from 'prop-types';

class TouchableOpacityWithIcon2Rows extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        let opacityKey = Math.random().toString(36).substring(7);
        
        if(this.props.oddOrEven % 2){
            return (
                <TouchableOpacity style={{ backgroundColor: '#ccc',padding:5, width:"100%"}} key={opacityKey} onPress={ () => { this.props.shortPressCallBackFunc(this.props.callBackParams) } } >
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:5,paddingTop:3}} >
                        <Icon name={this.props.iconName} size={30}/>
                        <View style={{marginLeft:5,width:'100%'}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}} >{this.props.firstRowContent}</Text>
                            <Text style={{fontSize: 12}} >{this.props.secondRowContent}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }else{
            return (
                <TouchableOpacity style={{ backgroundColor: '#fff',padding:5, width:"100%"}} key={opacityKey} onPress={ () => { this.props.shortPressCallBackFunc(this.props.callBackParams) } } >
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:5,paddingTop:3}} >
                        <Icon name={this.props.iconName} size={30}/>
                        <View style={{marginLeft:5,width:'100%'}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}} >{this.props.firstRowContent}</Text>
                            <Text style={{fontSize: 12}} >{this.props.secondRowContent}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

TouchableOpacityWithIcon2Rows.propTypes = {
    oddOrEven: PropTypes.number.isRequired,
    iconName: PropTypes.string.isRequired,
    firstRowContent: PropTypes.string.isRequired,
    secondRowContent: PropTypes.string.isRequired,
    shortPressCallBackFunc: PropTypes.func.isRequired,
    callBackParams: PropTypes.object.isRequired
}

export default TouchableOpacityWithIcon2Rows;
