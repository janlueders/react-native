//import all needed React Stuff
import React from 'react';
import { Platform, View, Text, Image, ImageBackground, TouchableOpacity,StyleSheet,FlatList } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import BlinkingIcon from './subcomponents/BlinkingIcon';

/**
 * Generate a simple TextFiled with Styles and random Content
 * @param styles
 * @param content
 * @returns {*}
 */
export function genTextField(styles,key,content){
    if(styles === null){
        return ( <Text key={key}> {content} </Text> );
    }else{
        return ( <Text key={key} style={styles}> {content} </Text> );
    }
}

/**
 * Generate an image with Styles
 * @param styles
 * @param source
 * @returns {*}
 */
export function genImage(styles,source){
    return ( <Image style={styles} source={source}></Image> );
}

/**
 * Generate Backgroundimage with Styles and random content or childs
 * @param styles
 * @param content
 * @returns {*}
 */
export function genBackgroundImage(styles,content){
    return ( <ImageBackground style={styles} source={source}>{content}</ImageBackground> );
}

/**
 * Generate Item for Flatlist with Icon and
 * @param shortPressCallback
 * @param content
 * @returns {*}
 */
export function genTouchableOpacityListItem(shortPressCallback,params,index,iconName){
    let opacityKey = Math.random().toString(36).substring(7);
    
    if(index % 2){
        return (
            <TouchableOpacity style={{ backgroundColor: '#ccc',padding:5, width:"100%"}} key={opacityKey} onPress={ () => { shortPressCallback(params) } } >
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:5,paddingTop:3}}>
                    <Icon name={iconName} size={30}/>
                    <View style={{marginLeft:5}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}} >{params.title}</Text>
                        <Text style={{fontSize: 12}} >{validDate}</Text>
                        <BlinkingIcon style={{ alignSelf:'right' }} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }else{
        return (
            <TouchableOpacity style={{ backgroundColor: '#fff',padding:5, width:"100%"}} key={opacityKey} onPress={ () => { shortPressCallback(params) } } >
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:5,paddingTop:3}}>
                    <Icon name={iconName} size={30}/>
                    <View style={{marginLeft:5}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}} >{params.title}</Text>
                        <Text style={{fontSize: 12}} >{validDate}</Text>
                        <BlinkingIcon style={{ alignSelf:'right' }} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

/**
 *
 * @param style
 * @param content
 * @returns {*}
 */
export function genView(key, style, content){
    let viewKey = "view_"+key;
    return ( <View key={viewKey} style={style} >{content}</View> );
}

/**
 * Generate a FlatList with ListItems and childs in them
 * @param dataSource
 * @param onPressCallBack
 * @param listChildren
 * @returns {*}
 */
export function genFlatListWithListItemWithChildren(dataSource,onPressCallBack,listChildren){
    return (
        <FlatList data={dataSource} renderItem={genListItemWithChildren(onPressCallBack, listChildren)}  />
    );
}
