import React, { FC, useState } from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    ScrollView,
    AsyncStorage,
    TouchableOpacity,
    ActivityIndicator,
    Clipboard,
    Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import api, { avatar } from "../../api";
import { IUserFrend, IUser } from "../../helpers/types";
import { FriendsView } from "./components/FriendsView";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import { IAplicationState } from "../../redux/reduser";
import { connect } from "react-redux";

interface IStateProps {
    user: IUser;
}
interface IProps extends NavigationInjectedProps, IStateProps {}

const SearchFriends: FC<IProps> = ({ navigation, user }) => {
    const [search, setSearch] = useState<string>("");
    const [uuid, setUuid] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [copy, setCopy] = useState<boolean>(false);
    const [timer, setTimer] = useState<any>(null);
    const [searchFrends, setSearchFrends] = useState<IUserFrend[]>([]);
    const getFrends = async () => {
        setLoading(true);

        api("profile", "users_find")
            .data({ search })
            .get()
            .then((e) => {
                setLoading(false);
                setSearchFrends(e.data);
            })
            .catch((e) => {
                setLoading(false);
            });
    };
    const handleChange = (text) => {
        if (timer) {
            clearTimeout(timer);
        }
        setTimer(
            setTimeout(() => {
                getFrends();
            }, 300)
        );
        setSearch(text);
    };
    const copyToClipboard = () => {
        Clipboard.setString(user.uuid);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 1000);
    };
    const getSelectFreind = () => {
        return searchFrends.find((item) => item.uuid === uuid);
    };
    return (
        <View style={[styles.flex, { flex: 1 }]}>
            <View
                style={{
                    width: 201,
                    height: "100%",
                    borderRightWidth: 1,
                    borderRightColor: "#3E66A1",
                }}
            >
                <LinearGradient
                    colors={["#164080", "#3E66A1"]}
                    start={[0, 0.4]}
                    end={[1, 0]}
                    style={styles.gradiend}
                />
                <View style={{ padding: 20, paddingBottom: 10 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Никнейм или ID"
                        value={search}
                        onChangeText={handleChange}
                        placeholderTextColor={"#729FE1"}
                        {...(Platform.OS == "ios"
                            ? {}
                            : { disableFullscreenUI: true })}
                    />
                </View>
                <ScrollView
                    scrollIndicatorInsets={{ left: 0, right: 100000 }}
                    style={{ flex: 1 }}
                >
                    {loading ? (
                        <ActivityIndicator
                            style={{
                                padding: 20,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        />
                    ) : searchFrends.length > 0 ? (
                        searchFrends.map((item, index) => (
                            <TouchableOpacity
                                onPress={() => setUuid(item.uuid)}
                                style={[
                                    styles.frendContainer,
                                    {
                                        backgroundColor:
                                            item.uuid === uuid
                                                ? "rgba(13, 35, 69, 0.8)"
                                                : "transparent",
                                    },
                                ]}
                                key={index}
                            >
                                <Image
                                    source={{ uri: avatar(item.uuid) }}
                                    style={{ width: 42, height: 42 }}
                                />
                                <View style={{ marginLeft: 20 }}>
                                    <Text
                                        style={[
                                            styles.textLg,
                                            { marginBottom: 6 },
                                        ]}
                                    >
                                        {item.nikName}
                                    </Text>
                                    {/* <Text style={styles.textGrey}>{'2 дня назад'}</Text> */}
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <View style={{ padding: 20 }}>
                            <Text>Ничего не найдено</Text>
                        </View>
                    )}
                </ScrollView>
            </View>
            {!!uuid && !!getSelectFreind() ? (
                <FriendsView
                    navigations={navigation}
                    friendInfo={getSelectFreind()}
                />
            ) : (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(13, 35, 69, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 20,
                    }}
                >
                    <View style={{}}>
                        <Text style={styles.textSM}>
                            Начните вводить никнейм или ID пользователя{" "}
                        </Text>
                        <Text style={styles.textSM}> или </Text>
                        <Text style={styles.textSM}>
                            сообщите игрокам свой ID и они смогут
                        </Text>
                        <Text style={styles.textSM}>
                            добавить вас в друзья.
                        </Text>
                    </View>
                    <View>
                        {copy && (
                            <Text
                                style={[
                                    styles.textMD,
                                    {
                                        color: "white",
                                        textAlign: "center",
                                        marginBottom: 30,
                                    },
                                ]}
                            >
                                Скопировано
                            </Text>
                        )}
                        <Text
                            style={[
                                styles.textMD,
                                { color: "#FFFFFF", textAlign: "center" },
                            ]}
                        >
                            {" "}
                            Ваш ID: {user.uuid}
                        </Text>
                        <Text
                            onPress={copyToClipboard}
                            style={[
                                styles.textMD,
                                {
                                    color: "rgba(255, 255, 255, 0.4)",
                                    textAlign: "center",
                                },
                            ]}
                        >
                            (Скопировать)
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
};
const mapStateToProps = ({ user }: IAplicationState): IStateProps => ({
    user,
});

const mapDispatchToProps = () => ({});

export default withNavigation(
    connect(mapStateToProps, mapDispatchToProps)(SearchFriends)
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00477A",
        position: "relative",
    },
    frendContainer: {
        paddingVertical: 5,
        paddingLeft: 20,
        display: "flex",
        flexDirection: "row",
    },
    gradiend: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    flex: {
        display: "flex",
        flexDirection: "row",
    },

    textGrey: {
        color: "rgba(255, 255, 255, 0.4)",
        fontSize: 10,
        lineHeight: 10,
    },
    textLg: {
        fontSize: 14,
        lineHeight: 17,
        color: "#FFFFFF",
    },
    textSM: {
        fontSize: 10,
        lineHeight: 12,
        color: "#FFFFFF",
        textAlign: "center",
    },
    textMD: {
        fontSize: 14,
        lineHeight: 20,
    },
    input: {
        paddingLeft: 8,
        color: "#729FE1",
        fontSize: 10,
        lineHeight: 12,
        width: "100%",
        backgroundColor: "#1A3969",
        marginBottom: 8,
        borderRadius: 4,
        height: 30,
        borderWidth: 1,
        borderColor: "#3E66A1",
    },
});
