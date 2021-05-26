import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FullScreenModalContainer } from "../../../component/ModalContainer/FullScreenModalContainer";
import { ITransaction } from "../../../helpers/types";

interface IProps {
    onCancel: () => void;
    open: boolean;
    list: ITransaction[] | null;
}
export const HistoryModal: FC<IProps> = ({ onCancel, open, list }) => {
    const params = ["Дата", "Время", "Тип операции", "Сумма (OURO)"];
    return (
        <FullScreenModalContainer open={open} onCancel={onCancel}>
            <Text
                style={{
                    color: "#FFB443",
                    fontSize: 14,
                    marginLeft: 20,
                }}
            >
                История транзакций OURO
            </Text>
            <View style={styles.container}>
                <View style={styles.header}>
                    {params.map((item: string, index: number) => (
                        <View key={index} style={{ width: "25%" }}>
                            <Text style={styles.header_text}>{item}</Text>
                        </View>
                    ))}
                </View>
                {list ? (
                    <ScrollView style={{ marginHorizontal: -20 }}>
                        {list.map((item: ITransaction, index: number) => (
                            <View
                                key={index}
                                style={[
                                    styles.list_item,
                                    {
                                        backgroundColor:
                                            index % 2 === 0
                                                ? "rgba(255, 255, 255, 0.1)"
                                                : null,
                                    },
                                ]}
                            >
                                <Text style={styles.text}>{item.date}</Text>
                                <Text style={styles.text}>{item.time}</Text>
                                <Text
                                    style={[
                                        styles.text,
                                        {
                                            color:
                                                item.type === "IN"
                                                    ? "#BEF566"
                                                    : "#FF3D3D",
                                        },
                                    ]}
                                >
                                    {item.type === "IN"
                                        ? "Пополнение"
                                        : "Вывод"}
                                </Text>
                                <Text style={styles.text}>{item.amount}</Text>
                            </View>
                        ))}
                    </ScrollView>
                ) : null}
            </View>
        </FullScreenModalContainer>
    );
};
const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
    },
    header: {
        flexDirection: "row",
        height: 20,
    },
    header_text: {
        color: "rgba(255, 255, 255, 0.4)",
        fontSize: 10,
    },
    list_item: {
        alignItems: "center",
        flexDirection: "row",
        height: 30,
        paddingHorizontal: 20,
    },
    text: {
        color: "#ffffff",
        fontSize: 10,
        width: "25%",
    },
});

export default HistoryModal;
