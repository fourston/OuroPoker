import React, { FC, useState, useEffect } from 'react';
import { ModalContainer } from './ModalContainer';
import { TouchableOpacity, View, Platform, Text, TextInput, StyleSheet } from 'react-native';
import { UnSelectedIcon, SelectedIcon } from '../../helpers/icon';
import { TextInputMask } from 'react-native-masked-text';

interface IProps {
  open: boolean;
  onCancel?: () => void;
  onSubmit?: (value: string) => void;
  sent?: boolean;
}

export const ResetModal: FC<IProps> = ({onCancel, open, onSubmit, sent}) => {
  let [isMail, setMail] = useState<boolean>(true);
  let [value, setValue] = useState<string>('');

  useEffect(()=>{
    setValue('');
  }, [isMail])

  const toggleInput = (value = false) => {
    // if (!sent){
    //   setMail(value)
    // }
  }

  return (
    <ModalContainer  open={open} onCancel={onCancel}>
      <View style={{ paddingHorizontal: 50, paddingBottom: 20 }}>
        <Text style={styles.textHead}>Восстановление пароля</Text>
        <View style={{ paddingHorizontal: 30 }}>
          <View style={[styles.chekboxContainer]}>
            <TouchableOpacity style={styles.flexCenter} onPress={() => toggleInput(true)}>
              {isMail ? <SelectedIcon /> : <UnSelectedIcon />}
              <Text style={[styles.text_small, { marginLeft: 8 }]}>E-mail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexCenter} onPress={() => toggleInput()}>
              {!isMail ? <SelectedIcon /> : <UnSelectedIcon />}
              <Text style={[styles.text_small, { marginLeft: 8 }]}>Телефон</Text>
            </TouchableOpacity>
          </View>

          {isMail ? 
            <TextInput
              style={styles.input}
              placeholder='E-mail'
              keyboardType='email-address'
              editable={!sent}
              value={value}
              onChangeText={(text) => setValue(text)}
              placeholderTextColor={'#729FE1'}
              {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})}
            /> :
            <TextInputMask
              style={styles.input}
              keyboardType='phone-pad'
              editable={!sent}
              value={value}
              onChangeText={(text) => setValue(text)}
              placeholder='Телефон +79XXXXXXXXX'
              placeholderTextColor={'#729FE1'}
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '+99999999999'
              }}
              {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})}
            />
          }

          {!sent &&
            <TouchableOpacity style={styles.btn} onPress={() => onSubmit(value)}>
              <Text style={styles.text_small}>Восстановить</Text>
            </TouchableOpacity>
          }

          {sent &&
            <TouchableOpacity style={[styles.btn, styles.btnResend]} onPress={() => onSubmit(value)}>
              <Text style={styles.text_small}>Отправить ещё раз</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
      
      {sent &&
        <View style={{ backgroundColor: '#75A627', alignItems: 'center', width: '100%', paddingVertical: 9 }}>
          <Text style={styles.text_small}>Инструкции по восстановлению пароля успешно отправлены!</Text>
        </View>
      }
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  text_small: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 12,
  },
  textHead: {
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
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
  btnResend: {
    backgroundColor: '#FFB443'
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chekboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
