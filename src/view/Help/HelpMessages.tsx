import React, { FC, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import { Buttons } from '../../component';

let newsmMenu = [
    {
        name: 'Технические вопросы',
        title: 'Технические вопросы',
        desc: 'Документ фиксирует минимальный необходимый для коммерческого запуска услуги набор функционала, наборы передаваемых и хранимых данных. Базовый набор требований не подлежит изменению в ходе подготовки к запуску проекта. Кроме случаев возникновения необходимости внесения дополнительного функционала, порядок которого обговаривается отдельно.',
    },
];

export const HelpMessages: FC = () => {
    let [activeIndex, setActiveIndex] = useState(0);

    const handlePress = (name: string) => {
        Linking.openURL(`https://t.me/CryptoPokerBT`).catch((error) => console.log(error));
    };

    return (
        <View style={[styles.flex, { flex: 1 }]}>
            <View style={styles.leftBar}>
                <LinearGradient
                    colors={['#164080', '#3E66A1']}
                    start={[0, 0.4]}
                    end={[1, 0]}
                    style={styles.gradiend}
                />
                <ScrollView style={{ flex: 1, marginTop: 15 }}>
                    {newsmMenu.map((item, index) => (
                        <TouchableOpacity
                            onPress={() => setActiveIndex(index)}
                            style={[styles.item]}
                            key={index}
                        >
                            <Text style={styles.textLg}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(13, 35, 69, 0.8)',
                }}
            >
                <ScrollView
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        paddingHorizontal: 25,
                        paddingVertical: 30,
                    }}
                >
                    <Text style={styles.textTitle}>{newsmMenu[activeIndex].title}</Text>
                    <Text style={styles.textDesc}>{newsmMenu[activeIndex].desc}</Text>
                    <View style={{ marginBottom: 40 }}>
                        <Buttons
                            text="Написать в поддержку"
                            variant="default"
                            style={{ marginRight: 'auto' }}
                            onPress={() => handlePress('Технические вопросы')}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gradiend: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 15,
        alignItems: 'center',
        paddingLeft: 20,
    },
    leftBar: {
        width: 201,
        // backgroundColor: 'red',
        height: '100%',
        borderRightWidth: 1,
        borderRightColor: '#3E66A1',
    },
    textLg: {
        fontSize: 14,
        lineHeight: 17,
        color: '#FFFFFF',
    },
    textSM: {
        fontSize: 10,
        lineHeight: 10,
        color: '#5597FA',
        // marginBottom: 4,
    },
    textTitle: {
        color: '#FFB443',
        // color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '600',
        marginBottom: 10,
    },
    textDesc: {
        color: '#FFFFFF',
        fontSize: 10,
        lineHeight: 14,
        marginBottom: 20,
    },
});
