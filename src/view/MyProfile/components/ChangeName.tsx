import React, { FC, useState } from 'react';
import { ModalContainer, Buttons } from '../../../component';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';

interface IProps {
  onCancel: () => void;
  open: boolean;
  onChange: (name: string) => void;
}
export const ChangeName: FC<IProps> = ({ onCancel, open, onChange }) => {
  let [name, setName] = useState<string>('');
  return (
    <ModalContainer open={open} onCancel={onCancel}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior='position' style={{}}>
          <>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 12, marginBottom: 20 }}>Изменение никнейм</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextInput value={name} onChangeText={(text) => setName(text)} style={styles.input} placeholder={'Новый никнейм'} placeholderTextColor={'#729FE1'} {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})} />
              <Buttons text='Сохранить' variant='green' style={{ width: 160, marginBottom: 20 }} onPress={() => onChange(name)} />
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
