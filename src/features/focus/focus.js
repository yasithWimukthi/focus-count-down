import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from "../../components/RoundedButton";

export const Focus = ({addSubject}) =>{

    const [tempItem,setTempItem] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on ?</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{flex: 1,marginRight:20}}
                        value={tempItem}
                        //onSubmitEditing={({nativeEvent}) => setTempItem(nativeEvent.text)}
                        onChangeText={tempItem => setTempItem(tempItem)}
                    />
                    <RoundedButton
                        title='+'
                        size={50}
                        onPress={()=>addSubject(tempItem)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:50
    },
    titleContainer:{
        flex:0.5,
        padding:16,
        justifyContent: 'center'
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:24
    },
    inputContainer:{
        paddingTop:20,
        flexDirection:'row',
        alignItems:'center'
    }
});
