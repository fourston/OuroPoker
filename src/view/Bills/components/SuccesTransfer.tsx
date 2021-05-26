import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ModalContainer } from '../../../component';

interface IProps {
  onCancel: () => void;
  open: boolean;
}

export const SuccesTransfer: FC<IProps> = ({ open, onCancel }) => {
  return (
    <ModalContainer open={open} onCancel={onCancel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.textSM}>Вывод криптовалюты</Text>
        <Text style={styles.textSM}>Успех</Text>
        <View style={{ backgroundColor: '#FF3D3D', alignItems: 'center', width: '100%', paddingVertical: 9 }}>
          <Text style={styles.textSmall}>Вы успешно перевели средства !</Text>
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
    marginBottom: 20,
    lineHeight: 14,
    color: '#FFFFFF',
  },
});
