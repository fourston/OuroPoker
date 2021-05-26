import React, { FC, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { ModalContainer } from '../ModalContainer/ModalContainer';
import { IUserFrend, complainType } from '../../helpers/types';
import { Buttons } from '../Buttons/Buttons';
import { UnSelectedIcon, SelectedIcon } from '../../helpers/icon';
import {avatar} from '../../api';

interface IProps {
  onCancel: () => void;
  open: boolean;
  friend: IUserFrend;
  onSubmit: (complain: complainType) => void;
}

export const Complain: FC<IProps> = ({ open, onCancel, friend, onSubmit }) => {
  let [complain, setComplain] = useState<complainType>('AVATAR');
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
        <View style={{ width: '80%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <TouchableOpacity onPress={() => setComplain('AVATAR')} style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
              {complain === 'AVATAR' ? <SelectedIcon /> : <UnSelectedIcon />}
              <Text style={{ marginLeft: 6 }}>Аватар</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setComplain('STATUS')} style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
              {complain === 'STATUS' ? <SelectedIcon /> : <UnSelectedIcon />}
              <Text style={{ marginLeft: 6 }}>Никнейм</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <TouchableOpacity onPress={() => setComplain('CHAT_BEHAVIOR')} style={{ flexDirection: 'row', flex: 1 }}>
              {complain === 'CHAT_BEHAVIOR' ? <SelectedIcon /> : <UnSelectedIcon />}
              <View style={{ marginLeft: 6 }}>
                <Text numberOfLines={1}>Поведение </Text>
                <Text numberOfLines={1}> в чате</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setComplain('CHIP_TRADING')} style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
              {complain === 'CHIP_TRADING' ? <SelectedIcon /> : <UnSelectedIcon />}
              <View style={{ marginLeft: 6, alignSelf: 'flex-start' }}>
                <Text numberOfLines={1}>Торговля </Text>
                <Text numberOfLines={1}> фишками</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Buttons text='Отправить' variant='yellow' onPress={() => onSubmit(complain)} style={{ marginBottom: 20, width: 150 }} />
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
