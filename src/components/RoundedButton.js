import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

export const RoundedButton = ({
    style={},
    textStyle={},
    size=125,
    ...props
})=>{
    return(
        <TouchableOpacity style={[styles(size).radius,style]}>
            <Text style={[styles(size).text,textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = size =>{
    return StyleSheet.create({
        radius:{
            borderRadius:size/2,
            width:size,
            height:size,
            alignItems:'center',
            borderColor:'#fff',
            borderWidth:2
        },
        text:{
            color:'#FFF',
            fontSize:size/3,
            margin: 'auto '
        }
    })
} ;
