import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
interface IProps {
    transparent?: boolean;
}
export const TabsContent: FC<IProps> = ({ children, transparent }) => (
    <View style={styles.container}>
        {!transparent && (
            <LinearGradient
                colors={["#164080", "#3E66A1"]}
                start={[0, 0.4]}
                end={[1, 0]}
                style={styles.gradiend}
            />
        )}
        {children}
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        borderRadius: 8,
        borderTopLeftRadius: 0,
        overflow: "hidden",
        borderColor: "#3E66A1",
        borderWidth: 1,
        zIndex: 2,
    },
    gradiend: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
});
