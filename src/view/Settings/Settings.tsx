import React from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { TabsContent, Tab, BlockCheckbox } from "../../component";
import { VolumeSlider } from "./VolumeSlider";
import { SettingSelect } from "./SettingSelect";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import { IAplicationState } from "../../redux/reduser";
import { IUser } from "../../helpers/types";
import { getUserInfo } from "../../redux/action/userActions";
import { connect } from "react-redux";
import api from "../../api";
import playSound from "../../sound";
import Wrapper from "../../component/Wrapper";

interface IStateProps {
    user: IUser;
}
interface IDispatchProps {
    getUser: () => void;
}
type ISettingTabType = "ALL" | "NOTIFICATION";

interface IState {
    activeTab: ISettingTabType;
    volume_s: number;
    volume_m: number;
}
interface IProps extends NavigationInjectedProps, IStateProps, IDispatchProps {}

class Settings extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            activeTab: "ALL",
            volume_s: 0.4,
            volume_m: 0.4,
        };
    }

    async componentDidMount() {
        const volume_s = await AsyncStorage.getItem("masterVolumeSound");
        const volume_m = await AsyncStorage.getItem("masterVolumeMusic");
        this.setState({ volume_s: +volume_s, volume_m: +volume_m });
    }

    blockingSendMessage = async () => {
        api(
            "profile",
            `${
                this.props.user.blockingSendMessage ? "unblocking" : "blocking"
            }_chats`
        )
            .post()
            .then((response) => {
                this.props.getUser();
            })
            .catch((e) => console.log(e, "red"));
    };
    blockingToFriend = async () => {
        api(
            "profile",
            `${
                this.props.user.blockingToFriend ? "unblocking" : "blocking"
            }_friends`
        )
            .post()
            .then((response) => {
                this.props.getUser();
            })
            .catch((e) => console.log(e, "red"));
    };

    async setVolume(type, value) {
        await AsyncStorage.setItem(type, String(value));

        if (type == "masterVolumeSound") {
            this.setState({ volume_s: value });
            playSound("my_turn");
        }

        // if (type == 'masterVolumeMusic'){
        //   playSound('rise');
        // }
    }

    private onTabChange = (activeTab: ISettingTabType) => () =>
        this.setState({ activeTab });
    private renderNotification = () => (
        <View
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                padding: 20,
            }}
        >
            <View style={{ flex: 1 }}>
                <BlockCheckbox
                    active={true}
                    title="Новые друзья (подтверждение дружбы)"
                />
                <BlockCheckbox
                    active={false}
                    title="Приглашения друзей присоединиться к игре"
                />
                <BlockCheckbox active={true} title="Сообщения от друзей" />
            </View>
        </View>
    );
    private renderAll = () => {
        const { volume_s, volume_m } = this.state;

        return (
            <View
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    padding: 20,
                }}
            >
                <View style={{ flex: 4 }}>
                    <VolumeSlider
                        value={volume_s}
                        onChange={(value) =>
                            this.setVolume("masterVolumeSound", value)
                        }
                    />
                    {/* <VolumeSlider title='Громкость музыки' value={volume_m * 10} onChange={(value) => this.setVolume('masterVolumeMusic', value)}/> */}
                    {/* <View style={[styles.flexBetween, { marginTop: 'auto', marginBottom: 'auto' }]}>
            <SettingSelect active={true} title='Русский язык' />
            <SettingSelect active={false} title='Английский язык' />
          </View> */}
                </View>
                <View style={{ flex: 6, marginLeft: 40 }}>
                    <BlockCheckbox
                        onPress={this.blockingSendMessage}
                        active={this.props.user.blockingSendMessage}
                        title="Блокировка чата"
                    />
                    {/* <BlockCheckbox active={false} title='Вибрация' /> */}
                    <BlockCheckbox
                        onPress={this.blockingToFriend}
                        active={this.props.user.blockingToFriend}
                        title="Запрет на добавление в друзья"
                    />
                    {/* <BlockCheckbox active={true} title='Включить подсказки' /> */}
                </View>
            </View>
        );
    };
    render() {
        const { activeTab } = this.state;
        return (
            <Wrapper>
                <View style={styles.content}>
                    <View style={styles.flex}>
                        <Tab
                            active={activeTab === "ALL"}
                            title="Общие"
                            onPress={this.onTabChange("ALL")}
                        />
                        {/* <Tab active={activeTab === 'NOTIFICATION'} title='Уведомления' onPress={this.onTabChange('NOTIFICATION')} /> */}
                    </View>
                    <TabsContent>
                        {activeTab === "ALL"
                            ? this.renderAll()
                            : this.renderNotification()}
                    </TabsContent>
                </View>
            </Wrapper>
        );
    }
}
const mapStateToProps = ({ user }: IAplicationState): IStateProps => ({
    user,
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
    getUser: () => dispatch(getUserInfo()),
});

export default withNavigation(
    connect(mapStateToProps, mapDispatchToProps)(Settings)
);

const styles = StyleSheet.create({
    smallText: {
        color: "#FFFFFF",
        fontSize: 10,
        lineHeight: 12,
    },
    flex: {
        display: "flex",
        flexDirection: "row",
    },
    flexBetween: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    content: {
        margin: 20,
        flex: 1,
        zIndex: 2,
    },
});
