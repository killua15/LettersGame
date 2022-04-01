import React from 'react';
import {StyleSheet, View} from 'react-native';
import { IItem } from '../../board/component/grid_letter';
import ButtonHeader from '../components/button_header';
import TextHeader from '../components/text_header';

const Header: React.FC<Props> = ({clearWord}) => {
  return (
    <View style={styles.header}>
      <TextHeader />
      <ButtonHeader clearWord={clearWord} />
    </View>
  );
};
interface Props {
  clearWord: () => void
}
const styles = StyleSheet.create({
  header: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default Header;
