import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    AsyncStorage,
    ActivityIndicator,
    Clipboard,
} from 'react-native';
import { Buttons } from '../../component';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { getImage } from '../../helpers/resource';
import api from '../../api';
import { IUser } from '../../helpers/types';
import { IAplicationState } from '../../redux/reduser';
import { IBalance } from '../../helpers/types/IBalancy';
import { connect } from 'react-redux';
import { ChangePassword } from './components/ChangePassword';
import { SuccesModal } from './components/SuccesModal';
import { ChnageEmail } from './components/ChnageEmail';
import { FailedModal } from './components/FailedModal';
import { ChangeName } from './components/ChangeName';
import { getUserInfo } from '../../redux/action/userActions';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import Wrapper from '../../component/Wrapper';
import PinCodeModal from '../Bills/components/PinCodeModal';
import { getispinset, resetPinData, updatepin, setpin } from '../../redux/action/pinCodeActions';

interface IProps extends NavigationInjectedProps {}

interface IState {
    isModal:
        | 'PASSWORD'
        | 'OLD-PIN-CODE'
        | 'UPDATE-PIN-CODE'
        | 'SET-PIN-CODE'
        | 'SUCESS'
        | 'NONE'
        | 'FAILED'
        | 'EMAIL'
        | 'NAME';
    copy: boolean;
    image: string;
    oldPin: string;
}
interface IStateProps {
    balance: IBalance;
    user: IUser;
    isPinCodeSet: boolean;
    pinUpdateSuccess: boolean | null;
    pinSetSuccess: boolean | null;
}
interface IDispatchProps {
    getUser: () => void;
    changeImage: () => void;
    getIsPinSet: () => void;
    updatePin: (newPin: string, oldPin: string) => void;
    setPin: (pin: string) => void;
    resetPinData: () => void;
}
interface IProps extends IStateProps, IDispatchProps, NavigationInjectedProps {}

class MyProfile extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isModal: 'NONE',
            copy: false,
            image: '',
            oldPin: '',
        };

        this.cancelModal = this.cancelModal.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changePinCode = this.changePinCode.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeName = this.changeName.bind(this);
    }
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    componentDidMount() {
        this.props.getIsPinSet();
    }

    componentDidUpdate() {
        this.getPermissionAsync();
    }

    componentWillUnmount() {
        this.props.resetPinData();
    }

    fileLoad = async () => {
        let token = await AsyncStorage.getItem('userToken');
        ImagePicker.launchImageLibraryAsync({
            aspect: [4, 4],
            quality: 0,
            allowsEditing: true,
        })
            .then((result: any) => {
                if (!result.cancelled) {
                    let photo: ImageInfo = result;

                    this.setState({ image: photo.uri });
                    this.auploadImageAsync(photo);
                }
            })
            .catch((e) => console.log(e));
    };
    auploadImageAsync = async (photo: ImageInfo) => {
        const uriParts = photo.uri.split('.');
        const fileType = uriParts[uriParts.length - 1];
        FileSystem.readAsStringAsync(photo.uri, {
            encoding: 'base64',
        })
            .then((e) => {
                this.sendImage(e, `photo.${fileType}`);
            })
            .catch((e) => console.log(e));
    };
    sendImage = async (base64MAin: string, type: string) => {
        api('profile', 'upload_avatar')
            .data({
                data: base64MAin,
                name: type,
            })
            .post()
            .then((e) => {
                this.props.changeImage();
                this.setState({ isModal: 'SUCESS' });
            })
            .catch((e) => {
                this.setState({ isModal: 'FAILED' });
            });
    };

    // _pickImage = async () => {
    //   let result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 4],
    //     quality: 1,
    //   });
    //   return result;
    // };

    changeEmail = async (email: string) => {
        api('auth', 'change_email')
            .data({ email })
            .post()
            .then((e) => {
                this.props.getUser();
                this.setState({ isModal: 'SUCESS' });
            })
            .catch((e) => {
                this.setState({ isModal: 'FAILED' });
            });
    };
    changePassword = async (password: string, newPassword: string) => {
        api('auth', 'change_password')
            .data({
                password,
                newPassword,
            })
            .post()
            .then((e) => {
                this.props.getUser();
                this.setState({ isModal: 'SUCESS' });
            })
            .catch((e) => {
                this.setState({ isModal: 'FAILED' });
            });
    };
    changePinCode = async (newPin: string) => {
        console.log('changePinCode', newPin, this.state.oldPin);
        this.props.updatePin(newPin, this.state.oldPin);
    };
    setOldPinCode = async (pin: string) => {
        this.setState({ isModal: 'UPDATE-PIN-CODE', oldPin: pin });
    };
    setPinCode = async (pin: string) => {
        this.props.setPin(pin);
    };
    changeName = async (name: string) => {
        api('auth', 'change_name')
            .data({ name })
            .post()
            .then((e) => {
                this.props.getUser();
                this.setState({ isModal: 'SUCESS' });
            })
            .catch((e) => {
                this.setState({ isModal: 'FAILED' });
            });
    };

    handleCopy = () => {
        Clipboard.setString(this.props.user.uuid);
        this.setState({ copy: true });
        setTimeout(() => {
            this.setState({ copy: false });
        }, 1000);
    };

    cancelModal = () => {
        if (this.state.isModal === 'SET-PIN-CODE') this.props.getIsPinSet();
        if (this.state.isModal === 'UPDATE-PIN-CODE' || this.state.isModal === 'SET-PIN-CODE')
            this.props.resetPinData();
        this.setState({ isModal: 'NONE' });
    };

    render() {
        const { navigation, balance, user } = this.props;
        let { isModal, copy } = this.state;
        return (
            <Wrapper>
                {!!user ? (
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                            paddingTop: 22,
                            paddingBottom: 20,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 6,
                            }}
                            onPress={() => this.props.navigation.navigate('MainScreen')}
                        >
                            <Image source={getImage('back')} style={{ marginRight: 8 }} />
                            <Text
                                style={{
                                    color: '#729FE1',
                                    fontSize: 12,
                                    lineHeight: 14,
                                }}
                            >
                                Назад
                            </Text>
                        </TouchableOpacity>
                        {/* <Text style={{ textAlign: 'right', color: '#FFFFFF', fontSize: 12, lineHeight: 14, marginBottom: 6 }}>Начал играть 06.01.2020</Text> */}
                        <View
                            style={{
                                backgroundColor: 'rgba(62, 102, 161, 0.8)',
                                borderRadius: 8,
                                padding: 20,
                                paddingTop: 20,
                            }}
                        >
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <TouchableOpacity onPress={this.fileLoad}>
                                    <View
                                        style={{
                                            width: 60,
                                            height: 60,
                                        }}
                                    >
                                        <Image
                                            source={{
                                                uri: user.image,
                                            }}
                                            style={{
                                                flex: 1,
                                                width: null,
                                                height: null,
                                                resizeMode: 'contain',
                                                borderRadius: 6,
                                            }}
                                        />
                                    </View>
                                    <View style={styles.btnProfile}>
                                        <Text style={styles.text_small}>Изменить</Text>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginLeft: 20,
                                        paddingBottom: 5,
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() => this.setState({ isModal: 'NAME' })}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            marginBottom: 'auto',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: '#ffffff',
                                                fontSize: 14,
                                                lineHeight: 17,
                                                fontWeight: '600',
                                                marginRight: 8,
                                            }}
                                        >
                                            {user.name}
                                        </Text>
                                        <Image source={getImage('edit')} />
                                    </TouchableOpacity>
                                    <Text style={[styles.text_small, { marginBottom: 8 }]}>
                                        {balance.ouro} OURO
                                    </Text>
                                    {/* <Text style={styles.text_small}>{balance.pzm} PZM</Text> */}
                                </View>
                                <View
                                    style={{
                                        marginRight: 'auto',
                                        marginLeft: 'auto',
                                        paddingBottom: 5,
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() => this.setState({ isModal: 'EMAIL' })}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            marginBottom: 'auto',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: '#ffffff',
                                                fontSize: 14,
                                                lineHeight: 17,
                                                fontWeight: '600',
                                                marginRight: 8,
                                            }}
                                        >
                                            {user.email}
                                        </Text>
                                        <Image source={getImage('edit')} />
                                    </TouchableOpacity>
                                    {copy && (
                                        <Text
                                            style={[
                                                styles.text_small,
                                                {
                                                    textAlign: 'center',
                                                    marginBottom: 4,
                                                },
                                            ]}
                                        >
                                            Скопировано
                                        </Text>
                                    )}
                                    <TouchableOpacity
                                        onPress={this.handleCopy}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            marginBottom: 8,
                                        }}
                                    >
                                        <Text
                                            style={[styles.text_small, { maxWidth: 120 }]}
                                            numberOfLines={1}
                                        >
                                            ID: {user.uuid}
                                        </Text>
                                        <Text style={[styles.text_small, { color: '#729FE1' }]}>
                                            (Скопировать)
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Buttons
                                        text="Изменить пароль"
                                        variant="default"
                                        onPress={() =>
                                            this.setState({
                                                isModal: 'PASSWORD',
                                            })
                                        }
                                    />
                                    {this.props.isPinCodeSet ? (
                                        <TouchableOpacity
                                            style={styles.textButton}
                                            onPress={() =>
                                                this.setState({
                                                    isModal: 'OLD-PIN-CODE',
                                                })
                                            }
                                        >
                                            <Text
                                                style={[
                                                    styles.text_small,
                                                    {
                                                        color: '#D58E24',
                                                        borderColor: '#D58E24',
                                                        borderBottomWidth: 1,
                                                        paddingBottom: 2,
                                                        textAlign: 'center',
                                                    },
                                                ]}
                                            >
                                                Изменить PIN-код
                                            </Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity
                                            style={styles.textButton}
                                            onPress={() =>
                                                this.setState({
                                                    isModal: 'SET-PIN-CODE',
                                                })
                                            }
                                        >
                                            <Text
                                                style={[
                                                    styles.text_small,
                                                    {
                                                        color: '#D58E24',
                                                        borderColor: '#D58E24',
                                                        borderBottomWidth: 1,
                                                        paddingBottom: 2,
                                                        textAlign: 'center',
                                                    },
                                                ]}
                                            >
                                                Задать PIN-код
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                        </View>
                        <View style={styles.balanseContainer}>
                            <View>
                                <Text style={styles.textSM}>Сыграно игр</Text>
                                <Text style={styles.textB}>{user.countGames}</Text>
                            </View>
                            <View>
                                <Text style={styles.textSM}>Лучшие выигрыши</Text>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Text style={styles.textB}>{user.bestWins[0].win}</Text>
                                    <Text
                                        style={{
                                            color: '#729FE1',
                                            fontSize: 18,
                                            lineHeight: 22,
                                        }}
                                    >
                                        {' '}
                                        {user.bestWins[0].currency}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    {/* <Text style={styles.textB}>{user.bestWins[1].win}</Text>
                  <Text style={{ color: '#729FE1', fontSize: 18, lineHeight: 22 }}> {user.bestWins[1].currency}</Text> */}
                                </View>
                            </View>
                        </View>
                        <ChangePassword
                            onCancel={this.cancelModal}
                            open={isModal === 'PASSWORD'}
                            onChange={this.changePassword}
                        />
                        <PinCodeModal
                            open={isModal === 'OLD-PIN-CODE'}
                            onCancel={this.cancelModal}
                            buttonText="Далее"
                            requestSuccess={this.props.pinUpdateSuccess}
                            onSubmit={this.setOldPinCode}
                            title="Введите старый PIN-код"
                        />
                        <PinCodeModal
                            open={isModal === 'UPDATE-PIN-CODE'}
                            onCancel={this.cancelModal}
                            buttonText="Далее"
                            requestSuccess={this.props.pinUpdateSuccess}
                            onSubmit={this.changePinCode}
                            title="Введите новый PIN-код"
                            multipleValues={['Код', 'Повторите код']}
                        />
                        <PinCodeModal
                            open={isModal === 'SET-PIN-CODE'}
                            onCancel={this.cancelModal}
                            buttonText="Сохранить"
                            requestSuccess={this.props.pinSetSuccess}
                            onSubmit={this.setPinCode}
                            title="Задать PIN-код"
                        />
                        <ChnageEmail
                            onChange={this.changeEmail}
                            onCancel={this.cancelModal}
                            open={isModal === 'EMAIL'}
                        />
                        <ChangeName
                            onChange={this.changeName}
                            onCancel={this.cancelModal}
                            open={isModal === 'NAME'}
                        />
                        <SuccesModal onCancel={this.cancelModal} open={isModal === 'SUCESS'} />
                        <FailedModal onCancel={this.cancelModal} open={isModal === 'FAILED'} />
                    </View>
                ) : (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <ActivityIndicator color="green" />
                    </View>
                )}
            </Wrapper>
        );
    }
}

const mapStateToProps = ({ balance, user, pinCode }: IAplicationState): IStateProps => ({
    balance,
    user,
    isPinCodeSet: pinCode.isPinSet,
    pinUpdateSuccess: pinCode.updateSuccess,
    pinSetSuccess: pinCode.setSuccess,
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
    getUser: () => dispatch(getUserInfo()),
    changeImage: () => dispatch({ type: 'CHANGE_IMAGE' }),
    getIsPinSet: () => dispatch(getispinset()),
    updatePin: (newPin: string, oldPin: string) => dispatch(updatepin(newPin, oldPin)),
    setPin: (pin: string) => dispatch(setpin(pin)),
    resetPinData: () => dispatch(resetPinData()),
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(MyProfile));
const styles = StyleSheet.create({
    text_small: {
        color: '#FFFFFF',
        fontSize: 10,
        lineHeight: 12,
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        backgroundColor: '#355D9C',
        elevation: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderColor: '#3E66A1',
        borderWidth: 1,
        borderRadius: 4,
    },
    textSM: {
        color: '#FFB443',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '600',
        marginBottom: 20,
    },
    textB: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 22,
    },
    textButton: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        height: 30,
        marginTop: 10,
        paddingHorizontal: 5,
        width: '100%',
    },
    balanseContainer: {
        marginHorizontal: 20,
        backgroundColor: 'rgba(22, 64, 128, 0.6)',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 20,
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderColor: '#3E66A1',
        borderWidth: 1,
    },
    btnProfile: {
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: 1,
        backgroundColor: '#729FE1',
        marginTop: -2,
    },
});
