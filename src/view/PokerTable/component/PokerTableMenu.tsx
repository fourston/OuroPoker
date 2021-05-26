import React, { FC } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
} from "react-native";

interface IProps {
    isOpen: boolean;
    onCancel: () => void;
    leaveTable: () => void;
    stendUp: () => void;
    toHistory: () => void;
    status: string;
}

export const PokerTableMenu: FC<IProps> = ({
    isOpen,
    onCancel,
    leaveTable,
    stendUp,
    toHistory,
    status,
}) => {
    return (
        <Modal
            visible={isOpen}
            transparent
            supportedOrientations={["landscape"]}
            onDismiss={onCancel}
        >
            <TouchableWithoutFeedback onPress={onCancel}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(13, 35, 69, 0.8)",
                    }}
                >
                    <View style={styles.menuContainer}>
                        <LinearGradient
                            colors={["#164080", "#3E66A1"]}
                            start={[0, 0.4]}
                            end={[1, 0]}
                            style={styles.gradiend}
                        />
                        <TouchableOpacity style={styles.menuItem}>
                            <Text
                                style={styles.menuItemText}
                                onPress={onCancel}
                            >
                                {"Продолжить"}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.menuItem}
                            onPress={() => {
                                status === "PRE_FLOP"
                                    ? console.log(status)
                                    : leaveTable();
                            }}
                        >
                            <Text
                                style={
                                    status === "PRE_FLOP"
                                        ? styles.menuItemText_inactive
                                        : styles.menuItemText
                                }
                            >
                                {"Покинуть стол"}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.menuItem}
                            onPress={() => {
                                status === "PRE_FLOP"
                                    ? console.log(status)
                                    : leaveTable();
                            }}
                        >
                            <Text
                                style={
                                    status === "PRE_FLOP"
                                        ? styles.menuItemText_inactive
                                        : styles.menuItemText
                                }
                            >
                                {"Отойти"}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => toHistory()}
                            style={styles.menuItem}
                        >
                            <Text style={styles.menuItemText}>
                                {"История раздач"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    gradiend: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    menuContainer: {
        alignSelf: "flex-end",
        backgroundColor: "red",
        position: "relative",
        width: 136,
        marginRight: 20,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
    },
    menuItem: {
        borderBottomColor: "rgba(255, 255, 255, 0.2)",
        borderBottomWidth: 1,
    },
    menuItemText: {
        textAlign: "right",
        color: "white",
        marginRight: 20,
        fontSize: 12,
        lineHeight: 14,
        marginVertical: 15,
    },
    menuItemText_inactive: {
        textAlign: "right",
        color: "#D3D3D3",
        opacity: 0.3,
        marginRight: 20,
        fontSize: 12,
        lineHeight: 14,
        marginVertical: 15,
    },
});
