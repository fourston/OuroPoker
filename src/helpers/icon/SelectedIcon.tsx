import React, { FC } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { ISvgProps } from '../types';
export const SelectedIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 14, height: height ? height : 15 }} viewBox='0 0 14 15' fill='none'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7 13.9995C3.16667 13.9995 0 10.8328 0 6.99951C0 3.16618 3.16129 -0.000488281 6.99462 -0.000488281C10.828 -0.000488281 14 3.16618 14 6.99951C14 10.8328 10.8333 13.9995 7 13.9995ZM7 12.9995C10.3226 12.9995 13.0054 10.3221 13 6.99951C12.9946 3.67693 10.3172 0.999512 6.99462 0.999512C3.66667 0.999512 1.00538 3.67693 1.00538 6.99951C1.00538 10.3221 3.67204 12.9995 7 12.9995Z'
      fill='#FF8010'
    />
    <Circle cx='7' cy='6.99951' r='4' fill='#FFE640' />
    <Circle cx='7' cy='6.99951' r='3.5' stroke='#FFE640' />
  </Svg>
);
