import React, { FC } from 'react';
import {  View, StyleSheet, Image, Text } from 'react-native';
import { ModalContainer } from './ModalContainer';
import { IUserFrend } from '../../helpers/types';
import { Buttons } from '../Buttons/Buttons';
import {avatar} from '../../api';

interface IProps {
  onCancel: () => void;
  open: boolean;
  friend: IUserFrend;
  onDelete: () => void;
}

export const FriendDelete: FC<IProps> = ({ open, onCancel, friend, onDelete }) => {
  let uriImage = avatar(friend.uuid);
  
  return (
    <ModalContainer open={open} onCancel={onCancel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.textSM}>Удалить из друзей ?</Text>
        <Image source={{ uri: uriImage }} style={{ width: 60, height: 60, marginTop: 20, borderRadius: 8 }} />
        <Text style={styles.textMD}>{friend.nikName}</Text>
        <Text style={[styles.textSM, { color: '#729FE1', marginBottom: 22, maxWidth: 100 }]} numberOfLines={1}>
          ID: {friend.uuid}
        </Text>
        <Buttons text='Удалить' variant='orange' onPress={onDelete} style={{ marginBottom: 20, width: 150 }} />
      </View>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(13, 35, 69, 0.8)',
    display: 'flex',
    padding: 20,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  textSmall: {
    color: '#FFFFFF',
    fontSize: 10,
    lineHeight: 12,
  },
  textMD: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
    marginBottom: 6,
  },
  textSM: {
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
});
