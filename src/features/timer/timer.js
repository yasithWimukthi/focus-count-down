import React,{useState} from 'react';
import { StyleSheet, Text, View, Vibration, Platform } from 'react-native';
import {useKeepAwake} from 'expo-keep-awake';
import {ProgressBar} from 'react-native-paper';
import {colors} from "../../utils/colors";
import {spacing} from "../../utils/sizes";
import {CountDown} from "../../components/CountDown";
import {RoundedButton} from "../../components/RoundedButton";
import {Timing} from "./Timing";

const DEFAULT_TIME = 0.1;

export const Timer = ({focusSubject}) =>{

    // keep display on
    useKeepAwake();

    const [isStarted,setIsStarted] = useState(false);
    const [progress,setProgress] = useState(1);
    const [minutes,setMinutes] = useState(DEFAULT_TIME);

    const onProgress = progress => {
        setProgress(progress);
    }

    const vibrate = () =>{
        if (Platform.OS === 'ios'){
            const interval = setInterval(() => Vibration.vibrate(),1000);
            setTimeout(()=>clearInterval(interval),10000);
        }else{
            Vibration.vibrate(10000);
        }
    }

    const onTimeEnd = () =>{
        vibrate();
        setMinutes(DEFAULT_TIME);
        setProgress(1);
        setIsStarted(false);
    }

    const changeTime = minutes => {
        setMinutes(minutes);
        setProgress(1);
        setIsStarted(false);
    }

    return(
        <View style={styles.container}>
            <View style={styles.countDown}>
                <CountDown
                    minutes={minutes}
                    isPaused={!isStarted}
                    onProgress={onProgress}
                    omEnd={onTimeEnd}
                />
            </View>
            <View style={{paddingTop:spacing.xxl}}>
                <Text style={styles.title}>Focusing on : </Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>

            <View style={{paddingTop:spacing.sm}}>
                <ProgressBar
                    progress={progress}
                    color='#5e84e2'
                    style={{height:10,margin:' auto', width:'95%'}}
                />
            </View>

            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={changeTime}/>
            </View>

            <View style={styles.buttonWrapper}>
                {isStarted ? (
                    <RoundedButton
                        title="pause"
                        onPress={() => setIsStarted(false)}
                    />
                ):(
                    <RoundedButton
                        title="start"
                        onPress={() => setIsStarted(true)}
                    />
                )}
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
    },
    buttonWrapper:{
        flex:0.3,
        padding:15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
});
