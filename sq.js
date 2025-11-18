import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [calcData, setCalcData] = useState({num:0.0, result:null});
  const doCalc =() => {
    if(isNaN(calcData.num)){
      setCalcData({...calcData, result: 'invalid input'});
      return;
    }
    const num = calcData.num;
    const sqr = num*num;
    setCalcData({calcData, result: `Result:${sqr}`});
  }
  return (
    <View style={styles.container}>
      <Text>Square calc App
      </Text>
      <TextInput value= {setCalcData.num} keyboardType="numeric"
      placeholder='Enter Number'
      onChangeText={(data) => setCalcData({...calcData, num: data})}/>
      <Button title = "Find square" onPress={doCalc}/>
      <Text> {calcData.result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },title: {
    fontsize: 35,
    fontWeight: 'bold',
  }
});
