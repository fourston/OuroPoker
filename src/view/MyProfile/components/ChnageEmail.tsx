import React, { FC, useState } from 'react';
import { ModalContainer, Buttons } from '../../../component';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';

interface IProps {
  onCancel: () => void;
  open: boolean;
  onChange: (email: string) => void;
}
export const ChnageEmail: FC<IProps> = ({ onCancel, open, onChange }) => {
  let [email, setEmail] = useState<string>('');

  return (
    <ModalContainer open={open} onCancel={onCancel}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior='position' style={{}}>
          <>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 12, marginBottom: 20 }}>Изменение e-mail</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder={'Новый e-mail'} placeholderTextColor={'#729FE1'} {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})} />
              <Buttons text='Сохранить' variant='green' style={{ width: 160, marginBottom: 20 }} onPress={() => onChange(email)} />
            </View>
          </>
        </KeyboardAvoidingView>
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
