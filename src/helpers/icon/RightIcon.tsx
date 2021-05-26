import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../types';
export const RightIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 7, height: height ? height : 12 }} viewBox='0 0 7 12' fill='none'>
    <Path
      d='M0.745523 12C0.560792 12 0.362865 11.9368 0.217719 11.7978C-0.072573 11.5198 -0.072573 11.0775 0.217719 10.7995L5.21866 5.99764L0.217719 1.2084C-0.072573 0.930393 -0.072573 0.488114 0.217719 0.21011C0.508011 -0.0678939 0.96984 -0.0678938 1.26013 0.197473L6.78888 5.49218C6.93402 5.63119 7 5.8081 7 5.99764C7 6.18719 6.92083 6.3641 6.78888 6.50311L1.26013 11.7978C1.11499 11.9368 0.930254 12 0.745523 12Z'
      fill='white'
    />
  </Svg>
);
