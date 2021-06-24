import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from "../../components/RoundedButton";
import {fontSizes, spacing} from "../../utils/sizes";
import {colors} from "../../utils/colors";

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
    },
    titleContainer:{
        flex:0.5,
        padding:spacing.md,
        justifyContent: 'center'
    },
    title:{
        color:colors.white,
        fontWeight:'bold',
        fontSize:fontSizes.lg
    },
    inputContainer:{
        paddingTop:spacing.md,
        flexDirection:'row',
        alignItems:'center'
    }
});
