import React, { FC } from 'react';
import { View, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { ChipIcon } from '../../helpers/icons';

interface IProps {
  style?: any;
  count: number;
}

export const ChipRate: FC<IProps> = ({ style, count }) => {
  const getCount = () => {
    if (count > 1000) {
      return `${count / 1000} K`;
    } else {
      return count;
    }
  };
  // console.log(getCount())
  return (
    <View style={[styles.container, style]}>
      <ChipIcon width={14} height={14} />
      <Text style={styles.textChip}>{getCount()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 40,
    height: 14,
    borderRadius: 4,
    backgroundColor: 'rgba(2, 29, 54, 0.4)',
  },
  textChip: {
    flex: 1,
    fontSize: 10,
    lineHeight: 12,
    color: '#FFFFFF',
  },
});
