import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {colors} from "../utils/colors";
import {fontSizes, spacing} from "../utils/sizes";

const minutesToMillis = min => min*1000*60;

const formatTime = time => time < 10 ? `0${time}` : time;

export const CountDown = ({
        minutes = 1,
        isPaused = true,
        onProgress
    }) =>{

    const interval = useRef(null);

    const countDown = () =>{
        setMillis(time => {
            if (time === 0){
                return time;
            }
            const timeLeft = time - 1000;
            onProgress(timeLeft/minutesToMillis(minutes));
            return timeLeft;
        });
    }

    useEffect(() => {

        if(isPaused){
            if(interval.current) clearInterval(interval.current);
            return;
        }

        interval.current = setInterval(countDown,1000);

        // cleanup when un mounting
        return () => clearInterval(interval.current);
    }, [isPaused]);


    const [millis,setMillis] = useState(minutesToMillis(minutes));

    const minute = Math.floor(millis/1000/60)%60;
    const seconds = Math.floor(millis/1000)%60;

    return (
        <Text style={styles.text}>{formatTime(minute)} : {formatTime(seconds)}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize:fontSizes.xxxl,
        fontWeight:'bold',
        color: colors.white,
        padding:spacing.lg,
        backgroundColor: 'rgba(94,132,226,0.3)'
    },
});
