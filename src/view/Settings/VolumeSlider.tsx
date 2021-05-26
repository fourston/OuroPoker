import React, { FC } from "react";
import { View, Image, StyleSheet, Text, Platform } from "react-native";
// import {getImage} from '../../helpers/resource';
import Slider from "../../component/Slider";

interface IProps {
    value: number;
    onChange?: (value: number) => void;
}
export const VolumeSlider: FC<IProps> = ({ value, onChange }) => {
    const change = (value) => {
        onChange(value);
    };

    return (
        <View style={{ flex: 1, marginBottom: 20 }}>
            <Text style={styles.title}>Громкость эффектов</Text>
            <View
                style={[
                    {
                        flex: 1,
                    },
                ]}
            >
                <Slider
                    leftButton={{ icon: "soundMuted" }}
                    rightButton={{ icon: "soundMax" }}
                    step={0.1}
                    value={value}
                    onChange={change}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        color: "#FFFFFF",
        fontSize: 12,
        lineHeight: 14,
        marginBottom: 10,
    },
    text: {
        color: "#FFFFFF",
        fontSize: 12,
        lineHeight: 14,
        marginBottom: 10,
    },
    flex: {
        display: "flex",
        flexDirection: "row",
    },
    slider: {
        zIndex: 1,
        flex: 1,
        padding: 0,
    },
});
