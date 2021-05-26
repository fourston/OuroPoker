import React, { FC, useState } from 'react';
import { ModalContainer, Buttons } from '../../../component';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';

interface IProps {
  onCancel: () => void;
  open: boolean;
  onChange: (password: string, newPassword: string) => void;
}
export const ChangePassword: FC<IProps> = ({ onCancel, open, onChange }) => {
  let [error, setError] = useState<boolean>(false);
  let [password, setPassword] = useState<string>('');
  let [newPassword, setNewPassword] = useState<string>('');
  let [dnewPassword, setdNewPassword] = useState<string>('');

  const handleSubmit = () => {
    if (newPassword !== dnewPassword) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      return;
    }

    onChange(password, newPassword);
  };

  const cancel = () => {
    console.log('cancel')
    onCancel()
  }

  return (
    <ModalContainer open={open} onCancel={cancel}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior='position'>
          <>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 12, marginBottom: 20 }}>Изменение пароля</Text>
            {error && <Text style={{ textAlign: 'center', color: 'red', fontSize: 10, marginBottom: 4 }}>Пароль не совпадает</Text>}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                placeholder={'Старый пароль'}
                placeholderTextColor={'#729FE1'}
                {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})}
              />
              <TextInput
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
                style={styles.input}
                placeholder={'Новый пароль'}
                placeholderTextColor={'#729FE1'}
                {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})}
              />
              <TextInput
                value={dnewPassword}
                onChangeText={(text) => setdNewPassword(text)}
                style={styles.input}
                placeholder={'Повторите пароль'}
                placeholderTextColor={'#729FE1'}
                {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})}
              />
              <Buttons text='Сохранить' variant='green' style={{ width: 160, marginBottom: 20 }} onPress={handleSubmit} />
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
