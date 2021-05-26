import normalize from 'react-native-normalize';
import { Dimensions } from 'react-native';

export const n = (value: number, scale: boolean = false) => {
    const {fontScale} = Dimensions.get('window');
    return normalize(value / (scale ? fontScale : 1));
}