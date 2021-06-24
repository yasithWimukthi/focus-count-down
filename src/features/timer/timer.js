import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {colors} from "../../utils/colors";
import {spacing} from "../../utils/sizes";
import {CountDown} from "../../components/CountDown";

export const Timer = ({focusSubject}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.countDown}>
                <CountDown/>
            </View>
            <View style={{paddingTop:spacing.xxl}}>
                <Text style={styles.title}>Focusing on : </Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        color:colors.white,
        textAlign: 'center'
    },
    task:{
        color:colors.white,
        textAlign: 'center',
        fontWeight:'bold'
    },
    countDown:{
        flex:0.5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
