import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ModalContainer } from '../../../component/ModalContainer/ModalContainer';
import { Buttons } from '../../../component';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

interface IProps {
    onCancel: () => void;
    open: boolean;
    requestSuccess: boolean | null;
    buttonText: string;
    title: string;
    onSubmit: (value: string) => void;
    multipleValues?: string[];
}
const CELL_COUNT = 4;
const CELL_WIDTH = 33;

export const PinCodeModal: FC<IProps> = ({
    onCancel,
    open,
    buttonText,
    requestSuccess,
    title,
    onSubmit,
    multipleValues,
}) => {
    const [value, setValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [matchError, setMatchError] = useState(false);

    useEffect(() => {
        if (requestSuccess === true) {
            resetValue();
            onCancel();
        } else if (requestSuccess === false) {
            resetValue();
        }
    }, [requestSuccess]);

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const secondRef = useBlurOnFulfill({ value: secondValue, cellCount: CELL_COUNT });

    const [focusProps, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [secondFocusProps, secondGetCellOnLayoutHandler] = useClearByFocusCell({
        value: secondValue,
        setValue: setSecondValue,
    });

    const resetValue = () => {
        setValue('');
        setSecondValue('');
    };

    const onPress = () => {
        if (multipleValues) {
            console.log('values', value, secondValue);
            if (value !== secondValue) {
                setMatchError(true);
            } else {
                setMatchError(false);
                resetValue();
                onSubmit(value);
            }
        } else {
            resetValue();
            onSubmit(value);
        }
    };

    return (
        <ModalContainer
            open={open}
            onCancel={() => {
                resetValue();
                onCancel();
            }}
        >
            <View style={styles.wrapper}>
                <View
                    style={{
                        width: multipleValues
                            ? CELL_COUNT * CELL_WIDTH + (CELL_COUNT - 1) * 5 + 90
                            : CELL_COUNT * CELL_WIDTH + (CELL_COUNT - 1) * 5,
                    }}
                >
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.title}>{title}</Text>
                        {requestSuccess === false || matchError === true ? (
                            <Text style={styles.error}>Ошибка</Text>
                        ) : null}
                    </View>

                    <SafeAreaView style={{ marginBottom: 5 }}>
                        {multipleValues ? (
                            multipleValues.map((item: string, index: number) => (
                                <View
                                    key={index}
                                    style={{
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        marginBottom: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#B8B8B8',
                                            fontSize: 10,
                                            marginRight: 8,
                                            textAlign: 'right',
                                            width: 55,
                                        }}
                                    >
                                        {item}
                                    </Text>
                                    <CodeField
                                        ref={index === 0 ? ref : secondRef}
                                        {...focusProps}
                                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                                        caretHidden={false}
                                        value={index === 0 ? value : secondValue}
                                        onChangeText={index === 0 ? setValue : setSecondValue}
                                        cellCount={CELL_COUNT}
                                        rootStyle={styles.codeFieldRoot}
                                        keyboardType="number-pad"
                                        textContentType="oneTimeCode"
                                        renderCell={({ index, symbol, isFocused }) => (
                                            <Text
                                                key={index}
                                                style={[styles.cell, isFocused && styles.focusCell]}
                                                onLayout={getCellOnLayoutHandler(index)}
                                            >
                                                {symbol || (isFocused ? <Cursor /> : null)}
                                            </Text>
                                        )}
                                    />
                                </View>
                            ))
                        ) : (
                            <CodeField
                                ref={ref}
                                {...focusProps}
                                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                                caretHidden={false}
                                value={value}
                                onChangeText={setValue}
                                cellCount={CELL_COUNT}
                                rootStyle={styles.codeFieldRoot}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <Text
                                        key={index}
                                        style={[styles.cell, isFocused && styles.focusCell]}
                                        onLayout={getCellOnLayoutHandler(index)}
                                    >
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                )}
                            />
                        )}
                    </SafeAreaView>
                </View>
                <View style={{ width: 160 }}>
                    <Buttons
                        text={buttonText}
                        variant="green"
                        onPress={() => onPress()}
                        style={{ marginVertical: 8 }}
                    />
                </View>
            </View>
        </ModalContainer>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        paddingVertical: 20,
        width: '100%',
    },
    title: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
    },
    codeFieldRoot: {
        justifyContent: 'space-between',
    },
    cell: {
        width: CELL_WIDTH,
        height: 30,
        lineHeight: 30,
        color: '#729FE1',
        fontSize: 10,
        backgroundColor: '#1A3969',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#3E66A1',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#fff',
    },
    error: {
        color: '#FF3D3D',
        fontSize: 10,
        marginTop: 8,
        textAlign: 'center',
    },
});

export default PinCodeModal;
