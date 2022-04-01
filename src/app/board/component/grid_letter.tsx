/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {

  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import functions from '../../../share/functions';
export interface IItem {
  letter: string;
  id: int;
}
const GridLetters = (props) => {
  const dWidth = Dimensions.get('screen').width;
  const [data, setData] = useState<IItem[]>([]);

  useEffect(() => {
    setData(functions.createArrayLetter())
  }, [])

  const onClickLetters = (item) => {
    const available = functions.isLetterAvailable(item, props.selected)
    if (available == true) {
      props.addLetter(item)
    } else {
      Alert.alert("Debe complir con las reglas de seleccion")
    }

  }
  const renderItem = ({ item, index }) => {
    const filter = props.selected.filter(letter => letter.id == item.id)
    return (

      <TouchableOpacity
        onPress={() => onClickLetters(item)}>

        <LinearGradient colors={filter.length == 0 ? ['#FABC50', '#F77D27'] : ['#ABE64E', '#6EB635']} style={filter.length == 0 ? styles.linearGradient : styles.linearGradientSelect}>
          <Text style={styles.item_text}>{item.letter}</Text>
        </LinearGradient>

      </TouchableOpacity>


    );
  };

  return (
    <FlatList
      renderItem={renderItem}
      data={data}
      numColumns={4}
      style={{ flex: 1, marginTop: 10, marginBottom: 10 }}
    />

  );
};


const styles = StyleSheet.create({
  item_text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  linearGradient: {
    margin: 10,
    width: Dimensions.get('screen').width / 5,
    height: Dimensions.get('screen').width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F4505F',
    borderRadius: 20,
    borderWidth: 2,
  },
  linearGradientSelect: {
    margin: 10,
    width: Dimensions.get('screen').width / 5,
    height: Dimensions.get('screen').width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0,
  }
});

export default GridLetters;
