import React, { FC } from 'react';
import { ModalContainer, Buttons } from '../../../component';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface IProps {
  onCancel: () => void;
  open: boolean;
}
export const SuccesModal: FC<IProps> = ({ onCancel, open }) => {
  return (
    <ModalContainer open={open} onCancel={onCancel}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 12, marginBottom: 20 }}>Изменение Прошли успешно</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Buttons text='ОК' variant='green' style={{ width: 160, marginBottom: 20 }} onPress={onCancel} />
          </View>
        </>
      </TouchableWithoutFeedback>
    </ModalContainer>
  );
};
const styles = StyleSheet.create({
  input: {
    paddingLeft: 8,
    color: '#729FE1',
    fontSize: 10,
    lineHeight: 12,
    width: 160,
    backgroundColor: '#1A3969',
    marginBottom: 8,
    borderRadius: 4,
    height: 30,
    borderWidth: 1,
    borderColor: '#3E66A1',
  },
});
