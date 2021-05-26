import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../types';
export const CheckBoxActiveIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 32, height: height ? height : 21 }} viewBox='0 0 32 21' fill='none'>
    <Path
      d='M31.25 9.5C31.25 4.66751 27.3325 0.75 22.5 0.75H9.5C4.66751 0.75 0.75 4.66751 0.75 9.5C0.75 14.3325 4.66751 18.25 9.5 18.25H22.5C27.3325 18.25 31.25 14.3325 31.25 9.5Z'
      stroke='#729FE1'
      stroke-width='1.5'
    />

    <Path
      fill='#355D9C'
      clip-rule='evenodd'
      d='M22.5 17C18.3579 17 15 13.6421 15 9.5C15 5.35786 18.3579 2 22.5 2C26.6421 2 30 5.35786 30 9.5C30 13.6421 26.6421 17 22.5 17Z'
    />
  </Svg>
);
