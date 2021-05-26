import React, { FC, useState } from 'react';
import { Modal, View, StyleSheet, Image, Text, Button, Clipboard } from 'react-native';
import { ModalContainer, Buttons } from '../../../component';

interface IProps {
  onCancel: () => void;
  open: boolean;
  address: string;
}

export const AddOURO: FC<IProps> = ({ open, onCancel, address }) => {
  let [copy, setCopy] = useState<boolean>(false);
  const setCopys = () => {
    setCopy(true);
    Clipboard.setString(address);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };
  return (
    <ModalContainer open={open} onCancel={onCancel}>
      <View style={{ alignItems: 'center', height: 200 }}>
        <Text style={styles.textMD}>Пополнить счет</Text>
        <View style={styles.container}>
          <Text style={styles.textSM}>Чтобы пополнить кошелек переведите OURO счет </Text>
          <Text style={styles.textSmall}>{address}</Text>
          <Buttons text='Cкопировать' variant='green' onPress={setCopys} style={{ marginVertical: 8 }} />

          {copy && (
            <Text onPress={setCopys} style={{ color: 'white', fontSize: 10, lineHeight: 12, marginVertical: 8, textAlign: 'center' }}>
              скопировано
            </Text>
          )}
        </View>
      </View>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(13, 35, 69, 0.8)',

    padding: 20,
    // width: '50%',
  },
  textSmall: {
    color: '#FFFFFF',
    fontSize: 11,
    lineHeight: 12,
    marginBottom: 6,
  },
  textMD: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
  },
  textSM: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
});
