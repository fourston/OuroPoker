import React, { Component, FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import {
    BillIcon,
    MessagesIcon,
    FriendsIcon,
    HelpIcon,
    SettingIcon,
    NewsIconSvg,
} from '../../helpers/icons';
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';
import { IAuth } from '../../redux/types';
import { connect } from 'react-redux';
import { IAplicationState } from '../../redux/reduser';
import { getImage } from '../../helpers/resource';

interface IStateProps {
    auth: IAuth.Reduser;
}

interface IItemProps {
    title: string;
    icon: React.ReactNode;
    active: boolean;
    onPress: () => void;
}

interface IProps {
    navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>;
    auth: IAuth.Reduser;
}

const Items: FC<IItemProps> = ({ active, onPress, title, icon }) => (
    <TouchableOpacity style={[styles.item]} onPress={onPress}>
        <View style={{ marginTop: active ? 'auto' : 0 }} />
        {/* <Image style={[styles.marginBottom, { marginTop: active ? 'auto' : 0 }]} source={icon} /> */}
        {icon}
        <Text style={[styles.itemText, { marginTop: 8 }]}>{title}</Text>
        {active && (
            <View
                style={{
                    width: 50,
                    height: 2,
                    backgroundColor: '#5597FA',
                    marginTop: 'auto',
                    borderRadius: 2,
                }}
            />
        )}
    </TouchableOpacity>
);

class Header extends Component<IProps> {
    constructor(props) {
        super(props);

        this.toScreen = this.toScreen.bind(this);
    }

    toScreen(path: string, reqAuth?: boolean) {
        const { navigation, auth } = this.props;

        if (!!reqAuth && !(auth && auth.token)) {
            return;
        }

        const routes = {
            MESSAGES: { path: 'Messages', params: { tab: 'MESSAGES' } },
            NEWS: { path: 'News', params: { tab: 'NEWS' } },
            HELP: { path: 'Help', params: { tab: 'HELP' } },
        };

        const route = routes[path];

        if (route) {
            navigation.navigate(route.path, route.params);
            return;
        }

        navigation.navigate(path);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Items
                    title={'Новости'}
                    active={
                        navigation.state.routeName === 'News' &&
                        navigation.getParam('tab') === 'NEWS'
                    }
                    onPress={() => this.toScreen('NEWS', true)}
                    icon={<NewsIconSvg />}
                />
                <Items
                    title={'Мой счет'}
                    active={navigation.state.routeName === 'Bills'}
                    onPress={() => this.toScreen('Bills', true)}
                    icon={<BillIcon />}
                />
                <Items
                    title={'Сообщения'}
                    active={
                        navigation.state.routeName === 'Messages' &&
                        navigation.getParam('tab') === 'MESSAGES'
                    }
                    onPress={() => this.toScreen('MESSAGES', true)}
                    icon={<MessagesIcon />}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('MainScreen')}
                    style={{
                        flex: 2,
                    }}
                >
                    <View
                        style={{
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'center',
                        }}
                    >
                        <Image source={getImage('logo')} />
                        <Text
                            style={{
                                color: 'rgba(255, 255, 255, 0.4)',
                                fontSize: 8,
                                lineHeight: 10,
                                fontWeight: '600',
                                marginTop: 3,
                            }}
                        >
                            Техасский холдем
                        </Text>
                    </View>
                </TouchableOpacity>

                <Items
                    title={'Друзья'}
                    active={navigation.state.routeName === 'Friends'}
                    onPress={() => this.toScreen('Friends', true)}
                    icon={<FriendsIcon />}
                />
                <Items
                    title={'Поддержка'}
                    active={
                        navigation.state.routeName === 'Messages' &&
                        navigation.getParam('tab') === 'HELP'
                    }
                    onPress={() => this.toScreen('HELP')}
                    icon={<HelpIcon />}
                />
                <Items
                    title={'Настройки'}
                    active={navigation.state.routeName === 'Settings'}
                    onPress={() => this.toScreen('Settings', true)}
                    icon={<SettingIcon />}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ auth }: IAplicationState): IStateProps => ({
    auth,
});

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: 74,
        backgroundColor: 'rgba(62, 102, 161, 0.6)',
        elevation: 4,
    },
    item: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: 40,
        justifyContent: 'space-between',
    },
    itemText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 10,
        lineHeight: 12,
    },
    marginBottom: {
        marginBottom: 4,
    },
});
