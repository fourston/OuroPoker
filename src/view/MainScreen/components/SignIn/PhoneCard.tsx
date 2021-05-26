import React, { FC, useState } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { Buttons } from '../../../../component';
import { TextInputMask } from 'react-native-masked-text';

interface IProps {
  submit: (type: string, value: string | object) => void;
  awaitCode: string;
}

export const SignInPhoneCard: FC<IProps> = ({ submit, awaitCode }) => {
  let [phone, setPhone] = useState<string>(awaitCode || '+7');
  let [code, setCode] = useState<string>('');

  const buttonText = awaitCode ? 'Подтвердить' : 'Войти';

  let onSubmit = () => {
    const type = !awaitCode ? 'PHONE' : 'CODE';

    if (!!awaitCode){
      submit(type, {code, phoneNumber: phone});
      return;
    }
    submit(type, phone);
  };

  return (
    <>
      <View>
        <TextInputMask
          placeholderTextColor='#729FE1'
          style={styles.input}
          keyboardType='phone-pad'
          value={phone}
          onChangeText={(text) => setPhone(text)}
          editable={!awaitCode}
          placeholder='Телефон +79XXXXXXXXX'
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '+99999999999'
          }}
          {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})}
        />
        
        {!!awaitCode && 
          <TextInput
            placeholderTextColor='#729FE1'
            style={styles.input}
            placeholder='Код из SMS'
            value={code}
            onChangeText={(text) => setCode(text)}
            secureTextEntry
            {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})}
          />
        }
        <Buttons text={buttonText} variant='green' onPress={() => onSubmit()} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  text_small: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 12,
  },
  margiAuto: {
    marginTop: 'auto',
    marginBottom: 'auto',
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
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    backgroundColor: '#B0D86F',
    elevation: 4,
    borderRadius: 4,
  },
});
