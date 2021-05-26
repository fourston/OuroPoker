import React, { FC, useState, useEffect } from "react";
import {
    StyleProp,
    ViewStyle,
    View,
    Text,
    Image,
    StyleSheet,
    AsyncStorage,
} from "react-native";
import { getImage } from "../../../helpers/resource";
import api, { avatar } from "../../../api";

interface ILobbyGamerProps {
    style?: StyleProp<ViewStyle>;
    name: string;
    balance: number;
    uuid: string;
}
interface IPropsEmptyGamer {
    placeNumber: number;
    style?: StyleProp<ViewStyle>;
}
export const LobbyGamer: FC<ILobbyGamerProps> = ({
    style,
    balance,
    name,
    uuid,
}) => {
    let [names, setNames] = useState("");
    useEffect(() => {
        getName();
    }, []);
    let getName = async () => {
        if (names === "") {
            api("profile", "users_name", uuid)
                .get()
                .then((e) => {
                    setNames(e.data);
                })
                .catch((e) => console.log(e, "catch getName"));
        }
    };
    return (
        <View
            style={[
                {
                    height: 64,
                    width: 42,
                    zIndex: 24,
                    shadowColor: "#FFF",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.39,
                    shadowRadius: 8.3,
                    elevation: 13,
                },
                style,
            ]}
        >
            <Text style={styles.text_small} numberOfLines={1}>
                {names}
            </Text>
            <Image
                source={{ uri: avatar(`${uuid}?time=${new Date()}`) }}
                style={{ width: 42, height: 40 }}
            />
            <Text style={{ fontSize: 8, lineHeight: 12, color: "white" }}>
                {balance}
            </Text>
        </View>
    );
};
export const EmptyGamer: FC<IPropsEmptyGamer> = ({ placeNumber, style }) => {
    let rotation = () => {
        switch (placeNumber) {
            case 1:
                return "0deg";
            case 2:
                return "45deg";
            case 3:
                return "120deg";
            case 4:
                return "180deg";
            case 5:
                return "180deg";
            case 6:
                return "180deg";
            case 7:
                return "240deg";
            case 8:
                return "-45deg";
            case 9:
                return "0deg";
        }
    };
    return (
        <View
            style={[
                { height: 44, width: 50, justifyContent: "flex-end" },
                style,
            ]}
        >
            <View
                style={{
                    marginTop: 24,
                    width: 40,
                    height: 45,
                    transform: [{ rotate: rotation() }],
                }}
            >
                <Image
                    source={getImage("stul")}
                    style={{ width: "100%", height: "100%" }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text_small: {
        fontSize: 10,
        lineHeight: 12,
        color: "white",
        textAlign: "center",
        marginHorizontal: 4,
    },
});
