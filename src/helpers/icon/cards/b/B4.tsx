import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../../types';
export const B4: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 87, height: height ? height : 124 }} viewBox='0 0 87 124' fill='none'>
    <Path d='M1 4C1 1.79086 2.79086 0 5 0H82C84.2091 0 86 1.79086 86 4V118C86 120.209 84.2091 122 82 122H5C2.79086 122 1 120.209 1 118V4Z' fill='white' />

    <Path
      d='M21 24C21 21.7909 22.7909 20 25 20H62C64.2091 20 66 21.7909 66 24V98C66 100.209 64.2091 102 62 102H25C22.7909 102 21 100.209 21 98V24Z'
      fill='#EDF2F5'
    />
    <Path
      d='M25.3613 22.9727H27.7783V26.3857H25.3613V31H21.1279V26.3857H12.3828L12.1924 23.7197L21.084 9.67188H25.3613V22.9727ZM16.4111 22.9727H21.1279V15.4434L20.8496 15.9268L16.4111 22.9727Z'
      fill='#FF3D3D'
    />
    <Path d='M20.8391 41L31 50.8391L21.1609 61L11 51.1609L20.8391 41Z' fill='#FF3D3D' />
    <Path d='M55.6782 72L76 91.6782L56.3218 112L36 92.3218L55.6782 72Z' fill='#FF3D3D' />
  </Svg>
);
