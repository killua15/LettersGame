import React, { useEffect,useState} from 'react';
import {StyleSheet, View} from 'react-native';
import functions from '../../../share/functions';
import { IItem } from '../../board/component/grid_letter';
import CustomInput from '../components/input';

const InputLetters: React.FC<Props> = ({ letters }) => {
  const [valid, setValid] = useState("")
  useEffect(() => {
    if (letters.length > 0) {
      if (functions.isValidWord(letters)) {
        setValid("Valid")
      } else {
        setValid("Invalid")
      }
    } else { 
      setValid("")
    }
   
  }, [letters])
  return (
    <View style={styles.container}>
      <CustomInput letters={letters} valid={valid} />
    </View>
  );
};
const styles = StyleSheet.create({
 container:{
   height:100,
  
 
 }
});
interface Props {
  //setShoppingList: React.Dispatch<React.SetStateAction<IItem[]>>;
  letters: string;
}
export default InputLetters;
