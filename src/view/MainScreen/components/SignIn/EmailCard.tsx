import React, { FC, useState } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { Buttons } from '../../../../component';

interface IProps {
  submit: (login: string, password: string) => void;
}

export const SignInEmailCard: FC<IProps> = ({ submit }) => {
  let [login, setLogin] = useState<string>('');
  let [password, setPassword] = useState<string>('');
  let onSubmit = () => {
    submit(login, password);
  };
  return (
    <>
      <View>
        <TextInput
          placeholderTextColor='#729FE1'
          style={styles.input}
          keyboardType='email-address'
          placeholder={'е-майл/Логин'}
          value={login}
          onChangeText={(text) => setLogin(text)}
          {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})}
        />
        <TextInput
          placeholderTextColor='#729FE1'
          style={styles.input}
          placeholder='Пароль'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          onSubmitEditing={onSubmit}
          {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})}
        />
        <Buttons text='Войти' variant='green' onPress={onSubmit} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  text_small: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 12,
  },
  input: {
    paddingLeft: 8,
    color: '#729FE1',
    fontSize: 10,
    lineHeight: 12,
    width: '100%',
    backgroundColor: '#1A3969',
    marginBottom: 8,
    borderRadius: 4,
    height: 30,
    borderWidth: 1,
    borderColor: '#3E66A1',
  },
});
