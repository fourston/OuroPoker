import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { getImage } from "../../../helpers/resource";
import {
    NavigationParams,
    NavigationRoute,
    NavigationScreenProp,
} from "react-navigation";
import { IAplicationState } from "../../../redux/reduser";
import { getUserInfo } from "../../../redux/action/userActions";
import { IUser, IUserFrend } from "../../../helpers/types";
import { connect } from "react-redux";
import { friendsActions } from "../../../redux/action/freinds";
import { getbalance } from "../../../redux/action";
import { IBalance } from "../../../helpers/types/IBalancy";
import { avatar } from "../../../api";

interface IStateProps {
    user: IUser;
    friends: IUserFrend[];
    balance: IBalance;
}
interface IDispatchProps {
    getUser: () => void;
    getFriends: () => void;
    getBalance: (uuid: string) => void;
    changeImage: () => void;
}

interface IProps extends IStateProps, IDispatchProps {
    navigation: NavigationScreenProp<
        NavigationRoute<NavigationParams>,
        NavigationParams
    >;
}

class ProfileCard extends Component<IProps> {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const { user } = this.props;
        this.props.getFriends();
        this.props.getBalance(user.uuid);
        this.props.changeImage();
    }

    // componentDidUpdate(prevProps){
    //   const {user, friends, getFriends, balance} = this.props;
    //   console.log(prevProps.friends,  friends)
    //   if (!!friends && !!user.uuid && !balance.ouro && prevProps.friends != friends) {
    //     getFriends();
    //   }
    // }

    render() {
        const {
            navigation,
            user,
            getUser,
            friends,
            getFriends,
            getBalance,
            balance,
        } = this.props;

        let uriImage = avatar(user.uuid);

        return (
            <View style={{ flex: 3, marginRight: 20, paddingBottom: 20 }}>
                <Text style={styles.text_14}> Профиль</Text>
                <TouchableOpacity
                    style={styles.my_container}
                    onPress={() => navigation.navigate("MyProfile")}
                >
                    <View
                        style={{
                            width: 60,
                            height: 60,
                        }}
                    >
                        <Image
                            source={{
                                uri: !!user.image ? user.image : uriImage,
                            }}
                            style={{
                                flex: 1,
                                width: null,
                                height: null,
                                resizeMode: "contain",
                                borderRadius: 6,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            marginLeft: 10,
                            paddingBottom: 5,
                        }}
                    >
                        <Text
                            style={{
                                color: "#ffffff",
                                fontSize: 14,
                                lineHeight: 17,
                                fontWeight: "600",
                            }}
                        >
                            {user.name}
                        </Text>
                        <Text style={styles.text_small}>
                            {balance.ouro ? `${balance.ouro} OURO` : " "}
                        </Text>
                        {/* <Text style={styles.text_small}>{balance.pzm} PZM</Text> */}
                    </View>
                </TouchableOpacity>
                <Text style={styles.text_14}> Друзья </Text>
                <View style={styles.frendss_container}>
                    {friends.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() =>
                                navigation.navigate("AnotherProfile", {
                                    uuid: item.uuid,
                                    backRoute: "",
                                })
                            }
                            style={{ marginBottom: 8 }}
                        >
                            <Image
                                source={{ uri: avatar(item.uuid) }}
                                style={styles.freinds_image}
                            />
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        style={styles.frends_btn}
                        onPress={() =>
                            navigation.navigate("Friends", { tab: "SEARCH" })
                        }
                    >
                        <Image source={getImage("addp")} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00477A",
        position: "relative",
    },
    frendss_container: {
        backgroundColor: "rgba(62, 102, 161, 0.8)",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 5,
        display: "flex",
        flexDirection: "row",
        flex: 1,
        flexWrap: "wrap",
    },
    freinds_image: {
        width: 42,
        height: 42,
        marginHorizontal: 5,
        borderRadius: 4,
    },
    frends_btn: {
        width: 42,
        height: 42,
        marginHorizontal: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(12, 40, 82, 0.6)",
        borderRadius: 4,
    },
    my_container: {
        backgroundColor: "rgba(62, 102, 161, 0.8)",
        borderRadius: 8,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
    },
    text_small: {
        color: "#FFFFFF",
        fontSize: 10,
        lineHeight: 12,
    },
    flex: {
        display: "flex",
        flexDirection: "row",
    },
    text_14: {
        color: "#FFFFFF",
        fontSize: 12,
        lineHeight: 14,
        marginBottom: 6,
    },
});

const mapStateToProps = ({
    auth,
    user,
    friends,
    balance,
}: IAplicationState): IStateProps => ({
    user,
    friends,
    balance,
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
    getUser: () => dispatch(getUserInfo()),
    getFriends: () => friendsActions.get(dispatch),
    getBalance: (uuid) => dispatch(getbalance(uuid)),
    changeImage: () => dispatch({ type: "CHANGE_IMAGE" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
