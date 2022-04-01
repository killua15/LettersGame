/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import GridLetters, { IItem } from '../component/grid_letter';

const Board: React.FC<Props> = ({addLetter,selected}) => {
  return (
    <View style={{flex: 1, marginTop: 100, marginBottom: 100}}>
      <GridLetters addLetter={addLetter} selected={selected} />
    </View>
  );
};
interface Props {
  selected:IItem[],
  addLetter: (item:IItem) => void
}

const styles = StyleSheet.create({});

export default Board;
