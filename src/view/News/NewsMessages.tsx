import React, { FC, useState } from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { getImage } from "../../helpers/resource";
import { LinearGradient } from "expo-linear-gradient";
import { Buttons } from "../../component";

let newsmMenu = [
    {
        name: "Добро пожаловать в Crypto Poker",
        title: "Уважаемые пользователи и любители азартных игр!",
        desc: [
            "Поздравляем вас с официальным релизом нашего приложения Crypto Poker!  Это совершенно бесплатный онлайн-покер от компании Blockchain Technology. Вас ожидает классический Техасский Холдем на блокчейне современной DPoS криптовалюты OUROBOROS.",
            "Большая просьба, обо всех ошибках, багах, проблемах, а также с любыми вопросами, пожеланиями и предложениями — писать в наш саппорт во вкладке Поддержка. Мы обязательно учтем каждое сообщение и будем дальше развивать наше приложение!",
            "Играйте, наслаждайтесь, улучшайте свои навыки, выигрывайте и зарабатывайте вместе с Crypto Poker — лучшим приложениями для любителей криптовалюты OURO и азартных игр!",
        ],
    },
];
export const NewsMessages: FC = () => {
    let [activeIndex, setActiveIndex] = useState(0);
    return (
        <View style={[styles.flex, { flex: 1 }]}>
            <View
                style={{
                    width: "40%",
                }}
            >
                <LinearGradient
                    colors={["#164080", "#3E66A1"]}
                    start={[0, 0.4]}
                    end={[1, 0]}
                    style={styles.gradiend}
                />
                <ScrollView style={{ flex: 1, marginTop: 15 }}>
                    {newsmMenu.map((item, index) => (
                        <TouchableOpacity
                            onPress={() => setActiveIndex(index)}
                            style={[
                                styles.item,
                                activeIndex === index ? styles.activeItem : {},
                            ]}
                            key={index}
                        >
                            <Text style={styles.textLg}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View
                style={{
                    borderRadius: 40,
                    width: "60%",
                }}
            >
                <ImageBackground
                    source={getImage("news_bg")}
                    style={styles.bgImage}
                >
                    <ScrollView
                        style={{
                            height: "100%",
                            paddingHorizontal: 25,
                            paddingVertical: 30,
                        }}
                    >
                        <Text style={styles.textTitle}>
                            {newsmMenu[activeIndex].title}
                        </Text>
                        <View style={styles.textDesc}>
                            {newsmMenu[activeIndex].desc.map((item, index) => (
                                <Text style={styles.newsText} key={index}>
                                    {item}
                                </Text>
                            ))}
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        </View>
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
    flex: {
        display: "flex",
        flexDirection: "row",
    },
    activeItem: {
        backgroundColor: "rgba(13, 35, 69, 0.8)",
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    item: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 15,
        alignItems: "center",
        paddingLeft: 20,
    },
    textLg: {
        fontSize: 14,
        lineHeight: 17,
        color: "#FFFFFF",
    },
    textSM: {
        fontSize: 10,
        lineHeight: 10,
        color: "#5597FA",
    },
    textTitle: {
        color: "#FFB443",
        fontSize: 14,
        lineHeight: 17,
        fontWeight: "600",
        marginBottom: 10,
    },
    textDesc: {
        marginBottom: 30,
    },
    newsText: {
        color: "#FFFFFF",
        fontSize: 10,
        lineHeight: 14,
        marginBottom: 10,
    },
});
