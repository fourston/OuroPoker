import React, { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Checkboxs } from './Checkbox';

interface IProps {
  title: string;
  active: boolean;
  onPress?: () => void;
}
export const BlockCheckbox: FC<IProps> = ({ active, title, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={[styles.text, { color: active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)' }]}>{title}</Text>
    <Checkboxs active={active} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    lineHeight: 14,
  },
});
