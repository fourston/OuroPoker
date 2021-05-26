import React, { FC, useState } from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { IconButton, Buttons } from "../../../component";
import { LeftIcon, RightIcon } from "../../../helpers/icons";
import { LinearGradient } from "expo-linear-gradient";
import { IAplicationState } from "../../../redux/reduser";
import { getUserInfo } from "../../../redux/action/userActions";
import { connect } from "react-redux";
import { IUser } from "../../../helpers/types";
import { IBalance, ICreateGameBlinds } from "../../../helpers/types/IBalancy";
import { commands } from "../../../helpers/actions";
interface IStateProps {
    user: IUser;
    balance: IBalance;
}
interface IDispatchProps {
    getUser: () => void;
}

interface IProps extends IDispatchProps, IStateProps {
    blinds: ICreateGameBlinds[];
    sendCommand: (command: string) => void;
}

const LobbyBottom: FC<IProps> = ({
    blinds = [],
    user,
    balance,
    sendCommand,
}) => {
    let [active, setActive] = useState<number>(0);
    const onPressPrev = () => {
        if (!!blinds) {
            if (active > 0) {
                sendCommand(
                    commands.getLobbyFillter(
                        false,
                        "NINE",
                        blinds[active - 1].name
                    )
                );
                setActive(active - 1);
            }
        }
    };
    const onPressNext = () => {
        if (!!blinds) {
            if (active + 1 < blinds.length) {
                sendCommand(
                    commands.getLobbyFillter(
                        false,
                        undefined,
                        blinds[active + 1].name
                    )
                );
                setActive(active + 1);
            }
        }
    };
    // console.log(user.image);
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#164080", "#3E66A1"]}
                start={[0, 0.4]}
                end={[1, 0]}
                style={styles.gradiend}
            />
            <TouchableOpacity
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
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
                            resizeMode: "contain",
                            borderRadius: 6,
                        }}
                    />
                </View>
                <View style={styles.user_container}>
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
                    <Text style={styles.text_small}>{balance.ouro} OURO</Text>
                    {/* <Text style={styles.text_small}>{balance.pzm} PZM</Text> */}
                </View>
            </TouchableOpacity>
            <View style={styles.table_select}>
                <IconButton onPress={onPressPrev}>
                    <LeftIcon />
                </IconButton>
                {!!blinds[active] && (
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <Text style={styles.text_tableTitle}>
                            Бай-ин:{blinds[active].min}/{blinds[active].max}{" "}
                            OURO
                        </Text>
                        <Text style={styles.text_tableDesc}>
                            Блайнды:{blinds[active].smallBlind}/
                            {blinds[active].bigBlind} OURO
                        </Text>
                    </View>
                )}
                <IconButton onPress={onPressNext}>
                    <RightIcon />
                </IconButton>
            </View>
            <Buttons
                onPress={() => sendCommand(commands.getLobbyFriends)}
                variant="default"
                text="Столы с друзьями"
                style={{ height: "100%", width: 137 }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        position: "relative",

        width: "100%",
        height: 82,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#3E66A1",
        overflow: "hidden",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    user_container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: 10,
        paddingBottom: 5,
    },
    table_select: {
        alignItems: "center",
        flex: 2,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: "#1A3969",
        borderColor: "#1A3969",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 20,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    text_small: {
        fontSize: 10,
        lineHeight: 12,
        color: "white",
        marginHorizontal: 4,
    },
    text_tableTitle: {
        fontSize: 12,
        lineHeight: 14,
        textAlign: "center",
        color: "#FFFFFF",
    },
    text_tableDesc: {
        fontSize: 10,
        lineHeight: 12,
        textAlign: "center",
        color: "#729FE1",
    },
    gradiend: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
});

const mapStateToProps = ({
    auth,
    user,
    balance,
}: IAplicationState): IStateProps => ({
    user,
    balance,
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
    getUser: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LobbyBottom);
