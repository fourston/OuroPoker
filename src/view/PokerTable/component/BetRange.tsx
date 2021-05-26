import React, { FC, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions,
    Modal,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native';
import Constants from 'expo-constants';

import { Buttons } from '../../../component';
import { IGamerActions } from '../../../helpers/types';
import { LinearGradient } from 'expo-linear-gradient';
import playSound from '../../../sound';
import VerticalSlider from '../../../component/VerticalSlider';

interface IProps {
    submit: (count: number) => void;
    betAction: IGamerActions;
}
export const BetRange: FC<IProps> = ({ submit, betAction }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<number>(
        // betAction && betAction.range ? betAction.range.min : 0,
        0,
    );
    const onClick = () => {
        if (open) {
            onSubmit();
        } else {
            setOpen(true);
        }
    };
    const onSubmit = () => {
        setOpen(false);
        submit(value);
    };
    return (
        <View style={{ flex: 1, marginRight: 5, zIndex: 23 }}>
            {!open ? (
                <Buttons
                    text="Повысить"
                    variant="default"
                    style={{ height: 30 }}
                    onPress={onClick}
                />
            ) : null}
            {open && (
                <Modal
                    supportedOrientations={['landscape']}
                    transparent={true}
                    onRequestClose={() => setOpen(false)}
                >
                    <View>
                        <TouchableOpacity onPress={() => setOpen(false)}>
                            <View
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <TouchableWithoutFeedback>
                                    <View
                                        style={{
                                            backgroundColor: 'rgba(13, 35, 69, 0.8)',
                                            borderColor: '#3E66A1',
                                            borderRadius: 8,
                                            borderWidth: 1,
                                            height: '100%',
                                            width: 150,
                                            padding: 7,
                                            marginRight: 90,
                                            alignSelf: 'flex-end',
                                        }}
                                    >
                                        {/*<View*/}
                                        {/*    style={{*/}
                                        {/*        justifyContent: 'center',*/}
                                        {/*        marginBottom: 8,*/}
                                        {/*    }}*/}
                                        {/*>*/}
                                        {/*    <Text*/}
                                        {/*        style={{*/}
                                        {/*            color: 'white',*/}
                                        {/*            textAlign: 'center',*/}
                                        {/*            fontSize: 12,*/}
                                        {/*        }}*/}
                                        {/*    >*/}
                                        {/*        Повысить на{' '}*/}
                                        {/*    </Text>*/}
                                        {/*    <Text*/}
                                        {/*        style={{*/}
                                        {/*            color: 'white',*/}
                                        {/*            textAlign: 'center',*/}
                                        {/*            fontSize: 12,*/}
                                        {/*            fontWeight: 'bold',*/}
                                        {/*        }}*/}
                                        {/*    >*/}
                                        {/*        {value}*/}
                                        {/*    </Text>*/}
                                        {/*</View>*/}

                                        <View
                                            style={{
                                                flex: 1,
                                                marginBottom: 10,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: 'white',
                                                    fontSize: 12,
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {betAction.range.max} OURO
                                            </Text>
                                            <View
                                                style={{
                                                    flex: 1,
                                                    marginVertical: 5,
                                                }}
                                            >
                                                <VerticalSlider
                                                    minimumValue={betAction.range.min}
                                                    maximumValue={betAction.range.max}
                                                    value={value}
                                                    onChange={(values) => {
                                                        if (values < betAction.range.max) {
                                                            setValue(Math.round(values));
                                                            playSound('rise_slider');
                                                        } else {
                                                            setValue(values);
                                                            playSound('rise_slider');
                                                        }
                                                    }}
                                                />
                                            </View>
                                            <Text
                                                style={{
                                                    color: 'white',
                                                    fontSize: 12,
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {betAction.range.min} OURO
                                            </Text>
                                        </View>
                                        <Buttons
                                            text="Подтвердить"
                                            variant="default"
                                            style={{ height: 30 }}
                                            onPress={onClick}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        borderRadius: 4,
        borderColor: 'rgba(114, 159, 225, 1)',
        borderWidth: 1,
        paddingVertical: 9,
        paddingHorizontal: 10,
        marginRight: 5,
    },
    slider: {
        transform: [{ rotate: '-90deg' }],
    },
    gradiend: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
});
