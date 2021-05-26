import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../types';
export const LeftIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 7, height: height ? height : 12 }} viewBox='0 0 7 12' fill='none'>
    <Path
      d='M6.25448 8.88499e-07C6.43921 9.04648e-07 6.63714 0.0631828 6.78228 0.202185C7.07257 0.480188 7.07257 0.922468 6.78228 1.20047L1.78134 6.00236L6.78228 10.7916C7.07257 11.0696 7.07257 11.5119 6.78228 11.7899C6.49199 12.0679 6.03016 12.0679 5.73987 11.8025L0.211122 6.50782C0.0659757 6.36881 5.0776e-07 6.1919 5.24331e-07 6.00235C5.40902e-07 5.81281 0.0791713 5.6359 0.211122 5.49689L5.73987 0.202185C5.88502 0.0631827 6.06975 8.72349e-07 6.25448 8.88499e-07Z'
      fill='white'
    />
  </Svg>
);
