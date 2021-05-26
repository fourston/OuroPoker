import React, { FC } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    View,
    CheckBox,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChIcon } from '../../helpers/icons';

interface IProps {
    text: string;
    onPress?: () => void;
    variant: 'orange' | 'green' | 'default' | 'yellow';
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}
interface IIconProps {
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}
interface ICheckboxButtonProps {
    onPress?: () => void;
    active: boolean;
    text: string;
    style?: StyleProp<ViewStyle>;
}
export const Buttons: FC<IProps> = ({ text, variant, onPress, style, disabled }) => {
    const colors = () => {
        switch (variant) {
            case 'green':
                return ['#B0D86F', '#75A627'];
            case 'default':
                return ['#5597FA', '#355D9C'];
            case 'orange':
                return ['#FF9A3D', '#FF3D3D'];
            case 'yellow':
                return ['#FFEC43', '#FF7009'];
            default:
                return ['#5597FA', '#355D9C'];
        }
    };
    return (
        <TouchableOpacity
            style={[styles.btn, style, { opacity: disabled ? 0.4 : 1 }]}
            onPress={onPress}
        >
            <LinearGradient
                colors={colors()}
                start={[1, 0]}
                end={[1, 1]}
                style={[styles.gradiend, { opacity: disabled ? 0.4 : 1 }]}
            />
            <Text style={[styles.textSmall, { opacity: disabled ? 0.4 : 1 }]}>{text}</Text>
        </TouchableOpacity>
    );
};

export const IconButton: FC<IIconProps> = ({ children, onPress, style }) => (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
        <LinearGradient
            colors={['#5597FA', '#355D9C']}
            start={[1, 0]}
            end={[1, 1]}
            style={styles.gradiend}
        />
        {children}
    </TouchableOpacity>
);

export const CheckboxButton: FC<ICheckboxButtonProps> = ({
    children,
    onPress,
    style,
    text,
    active,
}) => (
    <TouchableOpacity style={[styles.btn, { flexDirection: 'row' }, style]} onPress={onPress}>
        <LinearGradient
            colors={['#5597FA', '#355D9C']}
            start={[1, 0]}
            end={[1, 1]}
            style={styles.gradiend}
        />
        <View
            style={{
                width: 14,
                height: 14,
                backgroundColor: '#1A3969',
                borderRadius: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
            }}
        >
            {active && <ChIcon />}
        </View>
        <Text style={styles.textSmall}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    textSmall: {
        color: '#FFFFFF',
        fontSize: 10,
        lineHeight: 12,
        textAlign: 'center',
    },
    gradiend: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: 'hidden',
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        zIndex: 23,
        elevation: 4,
        overflow: 'hidden',
        borderRadius: 4,
        paddingVertical: 9,
        paddingHorizontal: 10,
    },
});
