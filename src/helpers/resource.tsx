import { Asset } from 'expo-asset';
import images from './images';

export const getImage = (image: string) => {
    if (!(image in images)) {
        return null;
    }

    return Asset.fromModule(images[image])
}