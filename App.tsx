/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {

  Alert,
  StyleSheet,
  View,

} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { IItem } from './src/app/board/component/grid_letter';
import Board from './src/app/board/container/board';

import Header from './src/app/header/container/header';
import InputLetters from './src/app/input_letters/container/input_leters';

const App = () => {
  const [selectedLetters, setSelectedLetters] =  useState<IItem[]>([])
  const [srtLetter, setSrtLetter] =  useState("")
  
  const addLetter = (letter) => { 
    const filter = selectedLetters.filter(el => el.id == letter.id)
    if (filter.length == 0) {
      selectedLetters.push(letter)
      setSelectedLetters(selectedLetters)
      selectedLetters.map(letter => {
        var srt = `${srtLetter}${letter.letter}`
        setSrtLetter(srt)
      })
    } else { 
      Alert.alert("Esta letra esta seleccionada seleccionada")
    }
    
  }
  const clearWord = () => { 
    setSrtLetter("")
    setSelectedLetters([])
  }
  return (
    <SafeAreaProvider>
      <View
        style={{
          marginTop: 50,
          marginBottom: 50,
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}>
        <Header clearWord={clearWord}/>
        <Board addLetter={addLetter} selected={ selectedLetters} />
        <InputLetters letters={srtLetter} />
      </View>
    </SafeAreaProvider>
  );
};



const styles = StyleSheet.create({

});

export default App;
