import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../types';
export const CheckBoxDisabledIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 31, height: height ? height : 19 }} viewBox='0 0 31 19' fill='none'>
    <Path
      d='M0.75 9.5C0.75 4.66751 4.66751 0.75 9.5 0.75H21.5C26.3325 0.75 30.25 4.66751 30.25 9.5C30.25 14.3325 26.3325 18.25 21.5 18.25H9.5C4.66751 18.25 0.75 14.3325 0.75 9.5Z'
      fill='#3D65A0'
      stroke='#164080'
      stroke-width='1.5'
    />
    <Path
      d='M16.75 9.5C16.75 13.5041 13.5041 16.75 9.5 16.75C5.49594 16.75 2.25 13.5041 2.25 9.5C2.25 5.49594 5.49594 2.25 9.5 2.25C13.5041 2.25 16.75 5.49594 16.75 9.5Z'
      fill='#164080'
      stroke='#164080'
      stroke-width='0.5'
    />
  </Svg>
);
