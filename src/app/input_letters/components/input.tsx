import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from 'react-native-elements';

const CustomInput: React.FC<Props> = ({ letters, valid }) => {

  return (
    <View>
      <Input
        value={letters}
        inputContainerStyle={{ height: 70, borderColor: "black", borderWidth: 1 }}
        inputStyle={{ fontSize: 35, color: '#6EB635', fontWeight: 'bold', padding:20 }}
        errorMessage={valid}
        errorStyle={valid == "Invalid" ? styles.errorMessage : styles.successMessage}
      />
    </View>

  );
};
interface Props {
  letters: string;
  valid: string
}
const styles = StyleSheet.create({
  errorMessage: {
    color: "red"
  },
  successMessage: {
    color: "#6EB635"
  }
});
export default CustomInput;
