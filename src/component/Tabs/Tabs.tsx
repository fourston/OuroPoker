import React, { FC } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface IProps {
  active: boolean;
  title: string;
  onPress?: () => void;
}

export const Tab: FC<IProps> = ({ active, title, onPress }) => {
  return (
    <TouchableOpacity style={active ? styles.tabActive : styles.tab} onPress={onPress}>
      <Text style={active ? styles.textActive : styles.smallText}>{title}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  smallText: {
    color: '#AAAAAA',
    fontSize: 10,
    lineHeight: 12,
  },
  textActive: {
    fontSize: 10,
    lineHeight: 12,
    color: '#FFFFFF',
  },
  tab: {
    width: 100,
    height: 32,
    backgroundColor: '#184281',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    marginBottom: -2,
    borderColor: '#3E66A1',
    borderWidth: 1,
    borderBottomColor: '#184281',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  tabActive: {
    width: 100,
    height: 32,
    backgroundColor: '#3E66A1',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    marginBottom: -2,
    borderColor: '#3E66A1',
    borderWidth: 1,
    borderBottomColor: '#3E66A1',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
});
