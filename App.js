import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Focus} from "./src/features/focus/focus";
import {colors} from "./src/utils/colors";

export default function App() {

  const [focusSubject,setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {
        focusSubject ? (
            <Text>build timer</Text>
        ):(
            <Focus addSubject={setFocusSubject}/>
        )
      }
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.darkBlue
  },
});
