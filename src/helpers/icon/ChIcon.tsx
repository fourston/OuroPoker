import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../types';
export const ChIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 10, height: height ? height : 8 }} viewBox='0 0 10 8' fill='none'>
    <Path fillRule='evenodd' clipRule='evenodd' d='M3.57143 8L0 4.15385L1 3.07692L3.57143 5.84615L9 0L10 1.07692L3.57143 8Z' fill='white' />
  </Svg>
);
