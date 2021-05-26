import React, { useState, FC } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    Modal,
    TouchableWithoutFeedback,
    Platform,
} from "react-native";
import { CloseIcon } from "../../../helpers/icons";
import { Buttons } from "../../../component";
import { IAplicationState } from "../../../redux/reduser";
import { IBalance } from "../../../helpers/types/IBalancy";
import { connect } from "react-redux";
import Slider from "../../../component/Slider";

interface IStateProps {
    balance: IBalance;
}
// interface IDispatchProps {}
interface IProps extends IStateProps {
    submit: (amount: number) => void;
    isOpen: boolean;
    onCancel: () => void;
}

const SendModal: FC<IProps> = ({ submit, isOpen, onCancel, balance }) => {
    let [value, setValue] = useState(10);
    return (
        <Modal
            visible={isOpen}
            transparent
            supportedOrientations={["landscape"]}
            onDismiss={onCancel}
        >
            <TouchableWithoutFeedback onPress={onCancel}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(13, 35, 69, 0.8)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{ width: "80%", height: "80%", borderRadius: 8 }}
                    >
                        <LinearGradient
                            colors={["#164080", "#3E66A1"]}
                            start={[0, 0.4]}
                            end={[1, 0]}
                            style={styles.gradiend}
                        />
                        <TouchableOpacity
                            style={{ position: "absolute", top: 10, right: 10 }}
                            onPress={onCancel}
                        >
                            <CloseIcon />
                        </TouchableOpacity>
                        <View
                            style={{
                                marginHorizontal: 40,
                                marginVertical: 20,
                                flex: 1,
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    marginBottom: 10,
                                }}
                            >
                                Передача фишек
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <View
                                    style={{
                                        height: 30,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#1A3969",
                                        borderRadius: 4,
                                        borderColor: "#3E66A1",
                                        borderWidth: 1,
                                        paddingHorizontal: 10,
                                    }}
                                >
                                    <Text
                                        style={[
                                            styles.text_lg,
                                            { color: "#BEF566" },
                                        ]}
                                    >
                                        {value} OURO
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <View
                                    style={[
                                        styles.flex,
                                        { alignItems: "center" },
                                    ]}
                                >
                                    <Slider
                                        minimumValue={0}
                                        maximumValue={+balance.ouro}
                                        step={1}
                                        value={value}
                                        onChange={(value) => setValue(value)}
                                    />
                                </View>
                            </View>
                            <Text
                                style={[
                                    styles.text_lg,
                                    { textAlign: "center", color: "white" },
                                ]}
                            >
                                Ваш баланс: {balance.ouro} OURO
                            </Text>
                            <View style={{ justifyContent: "space-between" }}>
                                <Buttons
                                    text="Передать"
                                    variant="green"
                                    style={{
                                        width: 160,
                                        marginRight: "auto",
                                        marginLeft: "auto",
                                    }}
                                    onPress={() => submit(value)}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
const mapStateToProps = ({ balance }: IAplicationState): IStateProps => ({
    balance,
});

// const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps)(SendModal);

const styles = StyleSheet.create({
    gradiend: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
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
    text_lg: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: "600",
    },
    text_sm: {
        fontSize: 10,
        lineHeight: 12,
        fontWeight: "600",
    },
});
