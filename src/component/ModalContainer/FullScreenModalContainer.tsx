import React, { FC } from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { CloseIcon } from "../../helpers/icons";

interface IProps {
    onCancel?: () => void;
    open: boolean;
}
export const FullScreenModalContainer: FC<IProps> = ({
    children,
    onCancel,
    open,
}) => {
    return (
        <Modal transparent visible={open} supportedOrientations={["landscape"]}>
            <View
                style={{
                    backgroundColor: "rgba(13, 35, 69, 0.8)",
                    flex: 1,
                    display: "flex",
                    padding: 20,
                }}
            >
                <View
                    style={{
                        backgroundColor: "#3E66A1",
                        borderRadius: 8,
                        flex: 1,
                        height: "100%",
                        paddingTop: 18,
                        position: "relative",
                        width: "100%",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            top: 18,
                            right: 18,
                            zIndex: 100,
                        }}
                        onPress={onCancel}
                    >
                        <CloseIcon />
                    </TouchableOpacity>
                    <LinearGradient
                        colors={["#164080", "#3E66A1"]}
                        start={[0, 0.4]}
                        end={[1, 0]}
                        style={{
                            borderRadius: 8,
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                    />
                    {children}
                </View>
            </View>
        </Modal>
    );
};
