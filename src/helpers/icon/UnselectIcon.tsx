import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../types';
export const UnSelectedIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 14, height: height ? height : 14 }} viewBox='0 0 14 14' fill='none'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7 14C3.16667 14 0 10.8333 0 7C0 3.16667 3.16129 0 6.99462 0C10.828 0 14 3.16667 14 7C14 10.8333 10.8333 14 7 14ZM7 13C10.3226 13 13.0054 10.3226 13 7C12.9946 3.67742 10.3172 1 6.99462 1C3.66667 1 1.00538 3.67742 1.00538 7C1.00538 10.3226 3.67204 13 7 13Z'
      fill='white'
    />
  </Svg>
);
