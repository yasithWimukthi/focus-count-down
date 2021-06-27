import React,{useState,useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import {Focus} from "./src/features/focus/focus";
import {colors} from "./src/utils/colors";
import {Timer} from "./src/features/timer/timer";
import {spacing} from "./src/utils/sizes";

export default function App() {

  const [focusSubject,setFocusSubject] = useState(null);
  const [focusHistory,setFocusHistory] = useState([]);

  useEffect(() => {
    if(focusSubject){
      setFocusHistory([...focusHistory,focusSubject]);
    }
  },[focusSubject]);

  return (
    <View style={styles.container}>
      {
        focusSubject ? (
            <Timer
                focusSubject={focusSubject}
                timerEnd={()=>setFocusSubject(null)}
                clearSubject={()=>setFocusSubject(null)}
            />
        ):(
            <Focus addSubject={setFocusSubject}/>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.darkBlue,
    paddingTop:spacing.md
  },
});
