import React, { FC } from "react";
import { View, Image } from "react-native";
import { getImage } from "../helpers/resource";

export const RedCards: FC = ({}) => {
    return (
        <View
            style={{
                width: 17,
                height: 18,
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <Image
                source={getImage("redCard")}
                style={{ width: 20, height: 29 }}
                resizeMode="cover"
            />
            <Image
                source={getImage("redCard")}
                style={{
                    width: 20,
                    height: 29,
                    marginLeft: -6,
                    marginBottom: -2,
                    transform: [{ rotate: "20deg" }],
                }}
                resizeMode="cover"
            />
        </View>
    );
};
