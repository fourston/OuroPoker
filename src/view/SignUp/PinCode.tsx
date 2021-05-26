import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

interface IProps {
    setPin: (value: string) => void;
}

const CELL_COUNT = 4;

const PinCode = (props: IProps) => {
    const { setPin } = props;
    const [value, setValue] = useState('');

    useEffect(() => {
        setPin(value);
    }, [value]);

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [focusProps, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            <View style={{ alignSelf: 'flex-start' }}>
                <Text style={styles.title}>PIN-код </Text>
                <Text style={styles.subtitle}>Для вывода средств</Text>
            </View>
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
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        color: '#729FE1',
        fontSize: 10,
        fontWeight: '400',
    },
    subtitle: {
        color: '#A5ABB4',
        fontSize: 8,
        fontWeight: '400',
    },
    codeFieldRoot: {
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
    },
    cell: {
        width: 30,
        height: 30,
        lineHeight: 30,
        color: '#729FE1',
        fontSize: 10,
        backgroundColor: '#1A3969',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#3E66A1',
        textAlign: 'center',
        marginLeft: 5,
    },
    focusCell: {
        borderColor: '#fff',
    },
});
export default PinCode;
