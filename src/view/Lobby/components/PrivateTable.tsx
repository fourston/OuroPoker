import React, { FC } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import {getImage} from '../../../helpers/resource';

interface IProps {
  onPress: () => void;
}
export const PrivateTable: FC<IProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={{ width: Dimensions.get('window').width / 4, justifyContent: 'center', alignItems: 'center' }} onPress={onPress}>
      <View style={styles.container}>
        <Image source={getImage('save_table')} style={styles.gradiend} />
        <Text style={styles.text_small}>Новый стол</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 56,
    maxHeight: 56,
    overflow: 'hidden',
    position: 'relative',
    flex: 1,
  },
  text_small: {
    fontSize: 10,
    lineHeight: 12,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 4,
  },
  gradiend: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
