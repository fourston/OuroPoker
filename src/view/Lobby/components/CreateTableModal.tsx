import React, { FC, useState, useEffect } from "react";
import {
    View,
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
    StyleSheet,
    Text,
    Picker,
    Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CloseIcon } from "../../../helpers/icons";
import { getImage } from "../../../helpers/resource";
import { Buttons } from "../../../component";
import { ICreateGameBlinds, IBalance } from "../../../helpers/types/IBalancy";
import { IAplicationState } from "../../../redux/reduser";
import { connect } from "react-redux";
import RNPickerSelect from "react-native-picker-select";
import Slider from "../../../component/Slider";

import { IUser } from "../../../helpers/types";
interface IStateProps {
    balance: IBalance;
    user: IUser;
}
interface IProps extends IStateProps {
    isOpen: boolean;
    onCancel: () => void;
    createTable: (
        size: sizeType,
        nameBlind: string,
        amount: number,
        name: string
    ) => void;
    blinds: ICreateGameBlinds[];
}

type sizeType = "NINE" | "FIVE";
const CreateTableModal: FC<IProps> = ({
    isOpen,
    onCancel,
    createTable,
    blinds,
    balance,
    user,
}) => {
    let [size, setSize] = useState<sizeType>("NINE");
    let [amount, setAmount] = useState<number>(0);
    let [err, seterr] = useState<boolean>(false);
    let [blind, setBlind] = useState<string>("NONE");

    const changeBlinds = (type: "plus" | "minus") => () => {
        let indexs = 0;
        blinds.map((item, index) => {
            if (item.name === blind) {
                indexs = index;
            }
            return null;
        });
        if (type === "minus") {
            if (indexs > 0) {
                setBlind(blinds[indexs - 1].name);
            }
        } else {
            if (indexs < blinds.length - 1) {
                setBlind(blinds[indexs + 1].name);
            }
        }
    };
    let handleCreateTable = () => {
        if (amount < +getBlind().min) {
            seterr(true);
            setTimeout(() => {
                seterr(false);
            }, 1000);
        } else {
            createTable(size, blind, amount, user.name);
        }
    };

    const getBlind = () => blinds.find((item) => item.name === blind);
    const checkError = () =>
        getBlind() ? +getBlind().min > +balance.ouro : false;

    const getValues = () => {
        const _blind = getBlind();

        return {
            min: +_blind.min,
            max: +balance.ouro > +_blind.max ? +_blind.max : +balance.ouro,
            value: amount > +_blind.min ? amount : +_blind.min,
        };
    };

    return (
        <Modal
            visible={isOpen}
            transparent
            supportedOrientations={["landscape"]}
            onDismiss={onCancel}
        >
            <TouchableWithoutFeedback onPress={onCancel}>
                <TouchableOpacity
                    disabled
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(13, 35, 69, 0.8)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            width: "70%",
                            height: "85%",
                            borderRadius: 12,
                            overflow: "hidden",
                        }}
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
                                marginHorizontal: 20,
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
                                Создать игру
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "flex-end",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Buttons
                                    text={"Валюта OURO"}
                                    style={{ width: 70 }}
                                    variant="default"
                                />
                                <View style={{ width: 220 }}>
                                    <View style={{ alignItems: "center" }}>
                                        <Text
                                            style={{
                                                color: "white",
                                                fontSize: 12,
                                                lineHeight: 16,
                                                marginBottom: 12,
                                            }}
                                        >
                                            Блайнды
                                        </Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Buttons
                                                text={"<"}
                                                variant="default"
                                                onPress={changeBlinds("minus")}
                                            />
                                            <View style={styles.infoContainer}>
                                                <Text
                                                    style={[
                                                        styles.text_lg,
                                                        { color: "#BEF566" },
                                                    ]}
                                                >
                                                    {getBlind()
                                                        ? `${+getBlind()
                                                              .smallBlind}/${+getBlind()
                                                              .bigBlind} OURO`
                                                        : "Выберите блайнд"}
                                                </Text>
                                            </View>
                                            <Buttons
                                                text={">"}
                                                variant="default"
                                                onPress={changeBlinds("plus")}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <Buttons
                                    style={{ width: 70 }}
                                    text={`Мест      ${
                                        size === "FIVE" ? 5 : 9
                                    }`}
                                    variant="default"
                                    onPress={() =>
                                        setSize(
                                            size === "FIVE" ? "NINE" : "FIVE"
                                        )
                                    }
                                />
                            </View>

                            {err && (
                                <Text
                                    style={{
                                        textAlign: "center",
                                        color: "red",
                                        marginTop: 12,
                                    }}
                                >
                                    Минимальное количество фишек для этого стола{" "}
                                    {getBlind().min} OURO
                                </Text>
                            )}

                            {checkError() && (
                                <Text
                                    style={{
                                        textAlign: "center",
                                        color: "red",
                                        marginTop: 12,
                                    }}
                                >
                                    Недостаточно на Вашем счету{" "}
                                </Text>
                            )}

                            {!checkError() && !!getBlind() && (
                                <View
                                    style={{
                                        marginVertical: 20,
                                        flex: 1,
                                        width: "100%",
                                    }}
                                >
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
                                                {+getBlind().min} OURO
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
                                            <View style={styles.infoContainer}>
                                                <Text
                                                    style={[
                                                        styles.text_lg,
                                                        { color: "#BEF566" },
                                                    ]}
                                                >
                                                    {amount} OURO
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
                                                {+getBlind().max} OURO
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
                                    <View
                                        style={{
                                            flex: 1,
                                            marginBottom: 20,
                                            marginHorizontal: 20,
                                        }}
                                    >
                                        <Slider
                                            minimumValue={getValues().min}
                                            maximumValue={getValues().max}
                                            step={1}
                                            value={getValues().value}
                                            onChange={(value) =>
                                                setAmount(value)
                                            }
                                        />
                                    </View>
                                </View>
                            )}

                            <Text
                                style={[
                                    styles.text_lg,
                                    {
                                        color: "white",
                                        textAlign: "center",
                                        marginTop: "auto",
                                        marginBottom: 8,
                                    },
                                ]}
                            >
                                Ваш баланс: {balance.ouro} OURO
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginTop: "auto",
                                }}
                            >
                                <Buttons
                                    text="Отмена"
                                    variant="default"
                                    style={{ width: 120, marginRight: 12 }}
                                    onPress={onCancel}
                                />
                                {blind !== "NONE" && (
                                    <Buttons
                                        text="Создать"
                                        variant="green"
                                        style={{ width: 120 }}
                                        onPress={handleCreateTable}
                                    />
                                )}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
const mapStateToProps = ({ balance, user }: IAplicationState): IStateProps => ({
    balance,
    user,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CreateTableModal);

const styles = StyleSheet.create({
    gradiend: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: "hidden",
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
    infoContainer: {
        height: 30,
        width: 160,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1A3969",
        borderRadius: 4,
        borderColor: "#3E66A1",
        borderWidth: 1,
        marginHorizontal: 2,
    },
    // inputIOS: {
    //   fontSize: 16,
    //   paddingTop: 13,
    //   width: '100%',
    //   height: '100%',
    //   paddingHorizontal: 10,
    //   paddingBottom: 12,
    //   borderWidth: 1,
    //   borderRadius: 4,
    // },
});
