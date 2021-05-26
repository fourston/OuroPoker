import React, { FC } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import {getImage} from '../../helpers/resource';

interface IProps {
  active: boolean;
  title: string;
  onPress?: () => void;
}
export const SettingSelect: FC<IProps> = ({ active, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {active ? <Image source={getImage('unselected')} /> : <Image source={getImage('unselected')} />}
      <Text style={[styles.textSmall, { color: active ? '#FFB328' : '#FFFFFF' }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSmall: {
    fontSize: 10,
    lineHeight: 12,
    marginLeft: 8,
  },
});
