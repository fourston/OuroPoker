import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Tab, TabsContent } from '../../component';
import { LinearGradient } from 'expo-linear-gradient';
import { Condition } from './Condition';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import api from '../../api';
import { IAplicationState } from '../../redux/reduser';
import { ITransactions, IUser } from '../../helpers/types';
import { connect } from 'react-redux';
import { IBalance } from '../../helpers/types/IBalancy';
import { AddOURO } from './components/AddOURO';
import { FailedTransfer } from './components/FailedTransfer';
import { SuccesTransfer } from './components/SuccesTransfer';
import { getbalance } from '../../redux/action';
import { gettransactions } from '../../redux/action';

import Wrapper from '../../component/Wrapper';
import HistoryModal from './components/HistoryModal';
import PinCodeModal from './components/PinCodeModal';
import { getispinset } from '../../redux/action/pinCodeActions';

type IBillsType = 'OURO' | 'CONDITIONS';

interface IState {
    activeTab: IBillsType;
    isAdd: boolean;
    address: string;
    isTransferSucces: boolean;
    isTransferFailed: boolean;
    value: string;
    wallet: string;
    error: string;
    isHistoryModal: boolean;
    isPinCodeModal: boolean;
}

interface IStateProps {
    user: IUser;
    balance: IBalance;
    transactions: ITransactions;
}
interface IDispatchProps {
    getBalance: (uuid: string) => void;
    getTransactions: (uuid: string) => void;
    getIsPinSet: () => void;
}

interface IProps extends NavigationInjectedProps, IStateProps, IDispatchProps {}

class Bills extends React.Component<IProps, IState> {
    isHistoryModal: boolean;
    isPinCodeModal: boolean;
    constructor(props: IProps) {
        super(props);
        this.state = {
            activeTab: 'OURO',
            isAdd: false,
            isTransferSucces: false,
            isTransferFailed: false,
            value: '',
            wallet: '',
            address: '',
            error: '',
            isHistoryModal: false,
            isPinCodeModal: false,
        };
    }
    private onTabChange = (activeTab: IBillsType) => () => this.setState({ activeTab });
    private _mounted = false;
    private _balanceTimer = null;

    async componentDidMount() {
        this._mounted = true;
        this.getBalance();
        this.getTransactions();

        if (!this._balanceTimer) {
            this._balanceTimer = setInterval(() => {
                if (this._mounted) {
                    this.getBalance();
                }
            }, 5000);
        }
    }

    componentWillUnmount() {
        this._mounted = false;
        if (this._balanceTimer) {
            clearInterval(this._balanceTimer);
        }
    }

    getBalance() {
        const { user } = this.props;
        this.props.getBalance(user.uuid);
    }

    getTransactions() {
        const { user } = this.props;
        this.props.getTransactions(user.uuid);
    }

    getDeposid = async () => {
        api('crypto', 'deposit')
            .get()
            .then((e) => {
                this.setState({
                    isAdd: true,
                    address: e.data.address,
                });
            })
            .catch((e) => console.log(e, 'catchgetDeposid'));
    };

    sendDeposid = async (pin: string) => {
        let { value, wallet } = this.state;
        this.setState({ isPinCodeModal: false });
        if (value <= this.props.balance.ouro && wallet.length === 43) {
            let data = pin.length === 4 ? { withdrawalPassword: pin } : null;
            api('crypto', 'withdrawal', wallet, value)
                .data(data)
                .post()
                .then((e) => {
                    console.log(e);
                    if (e.data.status === 'OK') {
                        this.setState({ isTransferSucces: true });
                    } else {
                        this.setState({ isTransferFailed: true });
                    }
                    this.setState({
                        value: '',
                        wallet: '',
                    });
                })
                .catch((e) => {
                    this.setState({ isTransferFailed: true });
                });
        } else {
            if (value > this.props.balance.ouro) {
                this.setState({ error: 'НЕ хватает денег на счету' });
            } else if (wallet.length !== 43) {
                this.setState({ error: 'Не правильный кошелек' });
            }
            setTimeout(() => {
                this.setState({ error: '' });
            }, 2000);
        }
    };

    private renderOURO = () => (
        <View style={[styles.flex, { padding: 20 }]}>
            <View
                style={{
                    borderRightColor: 'rgba(255, 255, 255, 0.1)',
                    borderRightWidth: 1,
                    flex: 1,
                }}
            >
                <View style={[{ marginBottom: 20 }]}>
                    <View
                        style={{
                            width: 60,
                            height: 60,
                        }}
                    >
                        <Image
                            source={{
                                uri: this.props.user.image,
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
                    <View style={{ paddingVertical: 6 }}>
                        <Text style={[styles.textMD, { color: '#FFFFFF', marginBottom: 'auto' }]}>
                            {this.props.user.name}
                        </Text>
                        <Text style={[styles.textMD, { color: '#FFFFFF' }]}>
                            {this.props.balance.ouro} OURO
                        </Text>
                    </View>
                </View>
                <Text style={[styles.textLG, { color: '#FFB443', marginBottom: 10 }]}>
                    Последние операции
                </Text>
                {this.props.transactions.last.in?.amount && (
                    <>
                        <Text style={[styles.smallText, { color: '#FFFFFF' }]}>
                            Пополнение {this.props.transactions.last.in.amount} OURO
                        </Text>
                        <Text
                            style={[
                                styles.smallText,
                                {
                                    color: '#rgba(255, 255, 255, 0.4)',
                                    marginBottom: 10,
                                },
                            ]}
                        >
                            {`${this.props.transactions.last.in.date} в ${this.props.transactions.last.in.time}`}
                        </Text>
                    </>
                )}

                {this.props.transactions.last.out?.amount && (
                    <>
                        <Text style={[styles.smallText, { color: '#FFFFFF' }]}>
                            Вывод {this.props.transactions.last.out.amount} OURO
                        </Text>
                        <Text
                            style={[
                                styles.smallText,
                                {
                                    color: '#rgba(255, 255, 255, 0.4)',
                                    marginBottom: 10,
                                },
                            ]}
                        >
                            {`${this.props.transactions.last.out.date} в ${this.props.transactions.last.out.time}`}
                        </Text>
                    </>
                )}

                <TouchableOpacity
                    onPress={() => this.setState({ isHistoryModal: true })}
                    style={{ height: 25, justifyContent: 'center' }}
                >
                    <Text style={[styles.smallText, { color: '#729FE1' }]}>Вся история</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    borderRightColor: 'rgba(255, 255, 255, 0.1)',
                    flex: 1,
                    paddingHorizontal: 20,
                }}
            >
                <Text style={[styles.textLG, { color: '#FFB443', marginBottom: 20 }]}>
                    Пополнение OURO
                </Text>
                {/* <TextInput style={styles.input} placeholder='Сумма' /> */}
                <TouchableOpacity style={styles.btn} onPress={this.getDeposid}>
                    <LinearGradient
                        colors={['#5597FA', '#355D9C']}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                    />
                    <Text style={[styles.smallText, { color: '#FFFFFF' }]}>Пополнить</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <Text style={[styles.textLG, { color: '#FFB443', marginBottom: 20 }]}>
                    Вывод OURO
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Сумма'}
                    placeholderTextColor={'#729FE1'}
                    value={this.state.value}
                    onChangeText={(text) => this.setState({ value: text })}
                    {...(Platform.OS == 'ios' ? {} : { disableFullscreenUI: true })}
                />
                <TextInput
                    style={styles.input}
                    value={this.state.wallet}
                    onChangeText={(text) => this.setState({ wallet: text })}
                    placeholder={'Кошелек'}
                    placeholderTextColor={'#729FE1'}
                    {...(Platform.OS == 'ios' ? {} : { disableFullscreenUI: true })}
                />
                {!!this.state.error && (
                    <Text
                        style={[
                            styles.textMD,
                            {
                                color: 'red',
                                marginBottom: 12,
                                textAlign: 'center',
                            },
                        ]}
                    >
                        {this.state.error}{' '}
                    </Text>
                )}
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => this.setState({ isPinCodeModal: true })}
                >
                    <LinearGradient
                        colors={['#5597FA', '#355D9C']}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                    />
                    <Text style={[styles.smallText, { color: '#FFFFFF' }]}>Вывод</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    transferSuccessCancel() {
        this.setState({ isTransferSucces: false });
        this.getBalance();
    }

    transferFailedCancel() {
        this.setState({ isTransferFailed: false });
    }

    addOUROCancel() {
        this.setState({ isAdd: false });
        this.getBalance();
    }

    cancelHistoryModal = () => {
        this.setState({ isHistoryModal: false });
    };
    cancelPinCodeModal = () => {
        this.setState({ isPinCodeModal: false });
    };

    render() {
        const { activeTab, isAdd, address, isTransferFailed, isTransferSucces, isHistoryModal } =
            this.state;
        const { navigation } = this.props;
        return (
            <Wrapper>
                <View style={styles.container}>
                    <ScrollView style={{}} contentContainerStyle={{ minHeight: '80%' }}>
                        <View style={styles.content}>
                            <View style={styles.flex}>
                                <Tab
                                    active={activeTab === 'OURO'}
                                    title="OURO"
                                    onPress={this.onTabChange('OURO')}
                                />
                            </View>
                            <TabsContent>
                                {activeTab === 'OURO' ? this.renderOURO() : <Condition />}
                            </TabsContent>
                            <AddOURO
                                address={address}
                                open={isAdd}
                                onCancel={() => this.addOUROCancel()}
                            />
                            <FailedTransfer
                                open={isTransferFailed}
                                onCancel={() => this.transferFailedCancel()}
                            />
                            <SuccesTransfer
                                open={isTransferSucces}
                                onCancel={() => this.transferSuccessCancel()}
                            />
                        </View>
                    </ScrollView>
                </View>
                <HistoryModal
                    list={this.props.transactions.list}
                    open={this.state.isHistoryModal}
                    onCancel={this.cancelHistoryModal}
                />
                <PinCodeModal
                    open={this.state.isPinCodeModal}
                    onCancel={this.cancelPinCodeModal}
                    buttonText="Далее"
                    requestSuccess={null}
                    onSubmit={this.sendDeposid}
                    title="Введите PIN-код"
                />
            </Wrapper>
        );
    }
}

// export default withNavigation(Bills);
const mapStateToProps = ({ user, balance, transactions }: IAplicationState): IStateProps => ({
    user,
    balance,
    transactions,
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
    getBalance: (uuid) => dispatch(getbalance(uuid)),
    getTransactions: (uuid) => dispatch(gettransactions(uuid)),
    getIsPinSet: () => dispatch(getispinset()),
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(Bills));
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    smallText: {
        fontSize: 10,
        lineHeight: 12,
    },
    textMD: {
        fontSize: 12,
        lineHeight: 14,
    },
    textLG: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '600',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {
        margin: 20,
        flex: 1,
        zIndex: 2,
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
        width: 110,
        backgroundColor: '#B0D86F',
        elevation: 4,
        borderRadius: 4,
        overflow: 'hidden',
    },
});
