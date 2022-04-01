import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { FAB } from 'react-native-elements/dist/buttons/FAB';
import { IItem } from '../../board/component/grid_letter';

const ButtonHeader: React.FC<Props> = ({ clearWord }) => {
  return (
    <View style={styles.container}>
      <FAB
        onPress={() => clearWord()}
        size='small'
        visible={true}
        icon={{ name: 'close', color: 'white' }}
        color="#D8D8D8"
      />
    </View>
  );
};
interface Props {
  clearWord: () => void
}
const styles = StyleSheet.create({
  container: {
    marginRight: 10
  },
});
export default ButtonHeader;
