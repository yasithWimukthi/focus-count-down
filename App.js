import React,{useState,useEffect} from 'react';
import { StyleSheet, View,AsyncStorage } from 'react-native';
import {Focus} from "./src/features/focus/focus";
import {colors} from "./src/utils/colors";
import {Timer} from "./src/features/timer/timer";
import {spacing} from "./src/utils/sizes";
import {FocusHistory} from "./src/features/focus/FocusHistory";

const STATUS = {
  COMPLETE : 1,
  CANCELLED : 2
}

export default function App() {

  const [focusSubject,setFocusSubject] = useState(null);
  const [focusHistory,setFocusHistory] = useState([]);
  
  const addFocusHistorySubjectWithStatus = (subject,status) => {
    setFocusHistory([...focusHistory,{subject,status}]);
  }

  const onClear = () =>{
    setFocusHistory([]);
  }

  const saveFocusHistory = async () => {
    try{
      AsyncStorage.setItem('focusHistory',JSON.stringify(focusHistory));
    }catch(err){
      console.log(err)
    }
  }

  const loadFocusHistory = async () => {
    try{
      const history = await AsyncStorage.getItem('focusHistory');
      if (history && JSON.parse(history).length ){
        setFocusHistory(JSON.parse(history))
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    loadFocusHistory();
  },[])

  useEffect(() => {
    saveFocusHistory();
  },[focusHistory]);

  // useEffect(() => {
  //   if(focusSubject){
  //     setFocusHistory([...focusHistory,focusSubject]);
  //   }
  // },[focusSubject]);

  return (
    <View style={styles.container}>
      {
        focusSubject ? (
            <Timer
                focusSubject={focusSubject}
                timerEnd={()=> {
                  addFocusHistorySubjectWithStatus(focusSubject,STATUS.COMPLETE)
                  setFocusSubject(null);
                }}
                clearSubject={()=> {
                  addFocusHistorySubjectWithStatus(focusSubject,STATUS.CANCELLED)
                  setFocusSubject(null);
                }}
            />
        ):(
            <>
              <Focus addSubject={setFocusSubject}/>
              <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
            </>
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
