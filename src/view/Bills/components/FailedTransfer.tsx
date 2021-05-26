import React, { FC, useState } from 'react';
import { Modal, View, StyleSheet, Image, Text, Button, Clipboard } from 'react-native';
import { ModalContainer, Buttons } from '../../../component';

interface IProps {
  onCancel: () => void;
  open: boolean;
}

export const FailedTransfer: FC<IProps> = ({ open, onCancel }) => {
  return (
    <ModalContainer open={open} onCancel={onCancel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.textSM}>Вывод криптовалюты</Text>
        <Text style={styles.textSM}>Произошла ошибка</Text>
        <View style={{ backgroundColor: '#FF3D3D', alignItems: 'center', width: '100%', paddingVertical: 9 }}>
          <Text style={styles.textSmall}>Функция временно не доступна !</Text>
        </View>
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
    marginBottom: 20,
  },
});
