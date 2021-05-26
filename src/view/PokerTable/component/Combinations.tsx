import React, { FC, useEffect, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { IconButton } from '../../../component';
import {
    CardsIcon,
    CombinationIcon,
    FullAIcon,
    FullAAIcon,
    FullABIcon,
    FullACIcon,
    FullADIcon,
    FullBBIcon,
    FullCCIcon,
    FullCIcon,
    FullDIcon,
} from '../../../helpers/icons';

interface IProps {}

let data: Array<{
    combinations: string;
    cards: React.ReactNode;
}> = [
    {
        combinations: 'Стрит  флеш',
        cards: <FullCIcon />,
    },
    {
        combinations: 'Каре',
        cards: <FullDIcon />,
    },
    {
        combinations: 'Фул Хаус',
        cards: <FullABIcon />,
    },
    {
        combinations: 'Флеш',
        cards: <FullACIcon />,
    },
    {
        combinations: 'Стрит',
        cards: <FullADIcon />,
    },
    {
        combinations: 'Сет',
        cards: <FullAAIcon />,
    },
    {
        combinations: 'Две пары',
        cards: <FullBBIcon />,
    },
    {
        combinations: 'Пара',
        cards: <FullCCIcon />,
    },
    {
        combinations: 'Старшая карта',
        cards: <FullAIcon />,
    },
];
export const Combinations: FC<IProps> = ({}) => {
    let [open, setOpen] = useState<boolean>(false);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(Dimensions.get('window').height);
    }, []);

    if (open) {
        return (
            <View>
                <TouchableOpacity
                    style={[styles.overlay, { height: height }]}
                    onPress={() => setOpen(false)}
                />
                <View style={[styles.modalContainer, { height: height - 60 }]}>
                    <View style={styles.wrapper}>
                        <View style={styles.combinationsWrapper}>
                            <ScrollView>
                                {data.map((item, index) => (
                                    <View
                                        key={index}
                                        style={[
                                            styles.cardContainer,
                                            {
                                                backgroundColor:
                                                    (index + 1) % 2 === 0
                                                        ? 'transparent'
                                                        : '#365F9F',
                                            },
                                        ]}
                                    >
                                        {item.cards}
                                        <View
                                            style={{
                                                alignItems: 'center',
                                                flex: 1,
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text style={styles.text}>{item.combinations}</Text>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={styles.btnWrapper}>
                            <TouchableOpacity
                                style={styles.btn_combination}
                                onPress={() => setOpen(false)}
                            >
                                <CombinationIcon />
                                <Text style={[styles.text, { marginLeft: 10 }]}>Комбинации</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <IconButton style={styles.icon_btn} onPress={() => setOpen(true)}>
            <CardsIcon />
        </IconButton>
    );
};
const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        left: 0,
        bottom: 0,
        zIndex: 0,
    },
    btn_combination: {
        flex: 1,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 6,
        zIndex: 100,
    },
    text: {
        fontSize: 10,
        lineHeight: 12,
        color: 'white',
        textAlign: 'center',
    },
    modalContainer: {
        zIndex: 495,
        width: 188,
        // height: Dimensions.get('window').height - 60,
        backgroundColor: '#5393F3',
        borderWidth: 1,
        borderColor: '#3E66A1',
        borderRadius: 4,
    },
    wrapper: {
        flex: 1,
    },
    combinationsWrapper: {
        paddingVertical: 5,
        paddingLeft: 6,
        flex: 1,
    },
    btnWrapper: {
        height: 30,
    },
    bg_dark: {
        backgroundColor: '#365F9F',
    },
    icon_btn: {
        marginRight: 5,
        zIndex: 2,
    },
    cardContainer: {
        flexDirection: 'row',
        marginBottom: 3,
    },
});
