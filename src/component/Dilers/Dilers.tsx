import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { DilerIcon } from '../../helpers/icons';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export const Dilers: FC<IProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <DilerIcon height={20} width={20} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    // backgroundColor: 'red',
    position: 'absolute',
  },

});
