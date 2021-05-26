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
import { getImage } from "../../../helpers/resource";
import { Buttons } from "../../../component";
import { IAplicationState } from "../../../redux/reduser";
import { IBalance } from "../../../helpers/types/IBalancy";
import { connect } from "react-redux";
import { ILobbyTables, IUser } from "../../../helpers/types";
import Slider from "../../../component/Slider";

interface IStateProps {
    balance: IBalance;
    user: IUser;
}
// interface IDispatchProps {}
interface IProps extends IStateProps {
    submit: (amount: number, name: string) => void;
    isOpen: boolean;
    onCancel: () => void;
    table: ILobbyTables;
}

const SetModal: FC<IProps> = ({
    submit,
    isOpen,
    onCancel,
    balance,
    table,
    user,
}) => {
    let [value, setValue] = useState(10);

    const getValues = () => {
        return {
            min: +table.blind.min,
            max:
                +balance.ouro > +table.blind.max
                    ? +table.blind.max
                    : +balance.ouro,
            value: value > +table.blind.min ? value : +table.blind.min,
        };
    };

    return (
        <Modal
            visible={isOpen}
            transparent
            supportedOrientations={["landscape"]}
            onDismiss={onCancel}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(13, 35, 69, 0.8)",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View style={{ width: "80%", height: "80%", borderRadius: 8 }}>
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
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                textAlign: "center",
                                marginBottom: 10,
                            }}
                        >
                            Взять в игру
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <View>
                                <Text
                                    style={[
                                        styles.text_lg,
                                        { color: "#FFFFFF" },
                                    ]}
                                >
                                    {table.blind ? table.blind.min : 0} OURO
                                </Text>
                                <Text
                                    style={[
                                        styles.text_sm,
                                        { color: "#FFFFFF" },
                                    ]}
                                >
                                    Min
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={[
                                        styles.text_lg,
                                        {
                                            textAlign: "right",
                                            color: "#729FE1",
                                            fontSize: 12,
                                            marginBottom: 5,
                                        },
                                    ]}
                                >
                                    Ставки:{" "}
                                    {table.blind ? table.blind.smallBlind : 0}/
                                    {table.blind ? table.blind.bigBlind : 0}{" "}
                                    OURO
                                </Text>
                                <View
                                    style={{
                                        height: 30,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#1A3969",
                                        borderRadius: 4,
                                        borderColor: "#3E66A1",
                                        borderWidth: 1,
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

                            <View>
                                <Text
                                    style={[
                                        styles.text_lg,
                                        {
                                            color: "#FFFFFF",
                                            textAlign: "right",
                                        },
                                    ]}
                                >
                                    {table.blind.max} OURO
                                </Text>
                                <Text
                                    style={[
                                        styles.text_sm,
                                        {
                                            color: "#FFFFFF",
                                            textAlign: "right",
                                        },
                                    ]}
                                >
                                    Max
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: 20 }}>
                            <View style={{ flex: 1, marginBottom: 20 }}>
                                <Slider
                                    minimumValue={getValues().min}
                                    maximumValue={getValues().max}
                                    step={1}
                                    value={getValues().value}
                                    onChange={(value) => setValue(value)}
                                />
                            </View>
                        </View>
                        <View
                            style={{ flex: 1, justifyContent: "space-between" }}
                        >
                            {/* <Text style={[styles.text_lg, { textAlign: 'center', color: 'white' }]}>Автопополнение за столом</Text> */}
                            <Text
                                style={[
                                    styles.text_lg,
                                    { textAlign: "center", color: "white" },
                                ]}
                            >
                                Ваш баланс: {balance.ouro} OURO
                            </Text>
                            <Buttons
                                text="Играть"
                                variant="green"
                                style={{
                                    width: 160,
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                }}
                                onPress={() => submit(value, user.name)}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const mapStateToProps = ({ balance, user }: IAplicationState): IStateProps => ({
    balance,
    user,
});

// const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps)(SetModal);

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
