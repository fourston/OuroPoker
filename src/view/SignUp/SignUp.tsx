import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
import { withNavigation, NavigationInjectedProps, ScrollView } from 'react-navigation';

import { TextInputMask } from 'react-native-masked-text';

import api from '../../api';
import Wrapper from '../../component/Wrapper';
import PinCode from './PinCode';

interface IProps extends NavigationInjectedProps {}
interface IState {
    name: string;
    phoneNumber: string;
    email: string;
    password: string;
    rePassword: string;
    messages: string;
    pin: string;
}

const codes = {
    DEFAULT: 'Произошла ошибка',
    '406': 'Данные не действительны',
    INVALID_EMAIL: 'Неверный формат E-mail',
    INVALID_PHONE_NUMBER: 'Неверный формат номера телефона',
    INVALID_PASSWORD: 'Пароль должен быть не менее 5 латинских символов',
    INVALID_PASSWORD_MATCH: 'Пароль не совпадает',
    SUCCESS: 'Регистрация успешна! Ссылка на подтверждение аккаунта отправлена Вам на e-mail',
};

class SignUp extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            phoneNumber: '',
            rePassword: '',
            messages: '',
            pin: '',
        };
    }

    onSubmit = () => {
        let { email, name, password, phoneNumber, rePassword, pin } = this.state;
        const phoneRe = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

        if (!phoneRe.test(phoneNumber)) {
            this.setState({ messages: codes['INVALID_PHONE_NUMBER'] });
            return;
        }

        if (password !== rePassword) {
            this.setState({ messages: codes['INVALID_PASSWORD_MATCH'] });
            return;
        }

        let data =
            pin.length === 4
                ? { name, email, password, phoneNumber, withdrawalPassword: pin }
                : { name, email, password, phoneNumber };

        api('auth', 'register')
            .data(data)
            .post()
            .then(() => {
                this.setState({ messages: codes['SUCCESS'] }, () => {
                    setTimeout(() => {
                        this.props.navigation.navigate('MainScreen');
                    }, 3000);
                });
            })
            .catch((e) => {
                if (e && e.response) {
                    this.setError(e.response);
                }
            });
    };

    setError(error) {
        let messages = codes['DEFAULT'];

        if (error.status == 406) {
            messages = codes['406'];
        }

        if (error.status == 400 && error.data && error.data.errors && error.data.errors.length) {
            messages = codes[error.data.errors[0].message || 'DEFAULT'];
        }

        this.setState({ messages });
    }

    render() {
        let { email, name, password, phoneNumber, rePassword, messages } = this.state;
        return (
            <Wrapper header={false}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}
                >
                    <ScrollView
                        style={{ width: '100%', height: '100%' }}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View style={{ flex: 1, width: 220, paddingTop: 15 }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    lineHeight: 29,
                                    fontWeight: '600',
                                    marginBottom: 8,
                                    textAlign: 'center',
                                }}
                            >
                                Регистрация
                            </Text>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 12,
                                    lineHeight: 29,
                                    fontWeight: '600',
                                    marginBottom: 20,
                                    textAlign: 'center',
                                }}
                            >
                                {messages}
                            </Text>
                            <TextInput
                                onChangeText={(text) => this.setState({ name: text })}
                                placeholderTextColor={'#729FE1'}
                                style={styles.input}
                                placeholder={'Никнейм'}
                                autoCompleteType={'name'}
                                value={name}
                                {...(Platform.OS == 'ios' ? {} : { disableFullscreenUI: true })}
                            />

                            <TextInputMask
                                onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                                placeholderTextColor={'#729FE1'}
                                style={styles.input}
                                placeholder={'Телефон +79XXXXXXXXX'}
                                value={phoneNumber}
                                keyboardType={'phone-pad'}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '+99999999999',
                                }}
                                {...(Platform.OS == 'ios' ? {} : { disableFullscreenUI: true })}
                            />

                            <TextInput
                                onChangeText={(text) => this.setState({ email: text })}
                                placeholderTextColor={'#729FE1'}
                                style={styles.input}
                                autoCompleteType={'email'}
                                placeholder={'E-mail'}
                                keyboardType={'email-address'}
                                value={email}
                                {...(Platform.OS == 'ios' ? {} : { disableFullscreenUI: true })}
                            />
                            <TextInput
                                onChangeText={(text) => this.setState({ password: text })}
                                placeholderTextColor={'#729FE1'}
                                style={styles.input}
                                placeholder={'Пароль'}
                                keyboardType={'default'}
                                value={password}
                                secureTextEntry
                                {...(Platform.OS == 'ios' ? {} : { disableFullscreenUI: true })}
                            />
                            <TextInput
                                onChangeText={(text) => this.setState({ rePassword: text })}
                                placeholderTextColor={'#729FE1'}
                                style={styles.input}
                                placeholder={'Повторите пароль'}
                                keyboardType={'default'}
                                value={rePassword}
                                secureTextEntry
                                {...(Platform.OS == 'ios' ? {} : { disableFullscreenUI: true })}
                            />
                            <PinCode setPin={(value) => this.setState({ pin: value })} />
                        </View>

                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 8,
                                width: 220,
                                paddingBottom: 20,
                            }}
                        >
                            <TouchableOpacity
                                style={[
                                    styles.btn,
                                    { flex: 2, marginRight: 8, backgroundColor: '#355D9C' },
                                ]}
                                onPress={() => this.props.navigation.navigate('MainScreen')}
                            >
                                <Text style={styles.text_small}>Назад</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.onSubmit}
                                style={[styles.btn, { flex: 3, marginLeft: 8 }]}
                            >
                                <Text style={styles.text_small}>Зарегистрироваться</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 'auto', marginBottom: 20 }}>
                            <Text style={styles.text_small}>
                                Нажимая на кнопку регистрации, вы соглашаетесь с политикой
                                конфиденциальности
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </Wrapper>
        );
    }
}

export default withNavigation(SignUp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00477A',
        position: 'relative',
        height: '100%',
    },
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
