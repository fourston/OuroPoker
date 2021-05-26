import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {getImage} from '../../helpers/resource';

export const BackgroundImage: React.FC = () => {
  return (<Image source={getImage('all_bg')} style={styles.image} resizeMode='cover' />);
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
