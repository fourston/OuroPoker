import React, { FC } from 'react';
import { Modal, View, StyleSheet, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { CloseIcon } from '../../helpers/icons';
import { IUserFrend } from '../../helpers/types';
import {avatar} from '../../api';

interface IProps {
  onCancel: () => void;
  open: boolean;
  friend: IUserFrend;
}

export const SuccesFriendReques: FC<IProps> = ({ open, onCancel, friend }) => {
  let uriImage = avatar(friend.uuid);
  
  return (
    <Modal transparent visible={open} supportedOrientations={['landscape']}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={{ backgroundColor: 'rgba(13, 35, 69, 0.6)', flex: 1, display: 'flex' }}>
          <View
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 'auto',
              marginBottom: 'auto',
              width: 320,
              backgroundColor: '#3E66A1',
              borderRadius: 8,
              paddingTop: 18,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <TouchableOpacity style={{ position: 'absolute', top: 18, right: 18 }} onPress={onCancel}>
              <CloseIcon />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textSM}>Добавление в друзья</Text>
              <Image source={{ uri: uriImage }} style={{ width: 60, height: 60, marginTop: 20, marginBottom: 10, borderRadius: 8 }} />
              <Text style={styles.textMD}>{friend.nikName}</Text>
              <Text style={[styles.textSM, { color: '#729FE1', marginBottom: 22, maxWidth: 100 }]} numberOfLines={1}>
                ID: {friend.uuid}
              </Text>
              <View style={{ backgroundColor: '#75A627', alignItems: 'center', width: '100%', paddingVertical: 9 }}>
                <Text style={styles.textSmall}>Приглашение в друзья успешно отправлено !</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
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
