import React from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native';
import {spacing,fontSizes} from "../../utils/sizes";
import {colors} from "../../utils/colors";

const historyItem = ({item,index}) =>{
    return (
        <Text style={{color : item.status>1 ? 'red' : 'green',fontSize : fontSizes.md}}>
            {item.subject}
        </Text>
    )
}

export const FocusHistory = ({focusHistory,onClear}) => {
    const clearHistory = () => {
        onClear();
    }

    return (
        <>
            <SafeAreaView style={{flex: 1,alignItems: 'center'}}>
                <Text style={styles.title}>Focused Things</Text>
                {
                    !!focusHistory.length && (
                        <FlatList
                            style={{flex: 1}}
                            contentContainerStyle={{flex: 1,alignItems: 'center'}}
                            data={focusHistory}
                            renderItem={historyItem}
                        />
                    )
                }
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    historyItem:  (status) => {
        return (
            {color : status>1 ? 'red' : 'green',fontSize : fontSizes.md}
        )
    },
    title:{
        color : colors.white,
        fontSize : fontSizes.lg
    }
});
