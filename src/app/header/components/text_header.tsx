import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FAB} from 'react-native-elements/dist/buttons/FAB';

const TextHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clear Word</Text>
    </View>
  );
};
const styles = StyleSheet.create({
 container:{
  marginRight:10
  },
  text: {
    color:"#D8D8D8"
  }
});
export default TextHeader;
