import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../../types';
export const B9: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 87, height: height ? height : 124 }} viewBox='0 0 87 124' fill='none'>
    <Path d='M1 4C1 1.79086 2.79086 0 5 0H82C84.2091 0 86 1.79086 86 4V118C86 120.209 84.2091 122 82 122H5C2.79086 122 1 120.209 1 118V4Z' fill='white' />
    <Path
      d='M21 24C21 21.7909 22.7909 20 25 20H62C64.2091 20 66 21.7909 66 24V98C66 100.209 64.2091 102 62 102H25C22.7909 102 21 100.209 21 98V24Z'
      fill='#EDF2F5'
    />
    <Path
      d='M22.7393 22.4746C21.6357 23.5586 20.3467 24.1006 18.8721 24.1006C16.9873 24.1006 15.4785 23.4561 14.3457 22.167C13.2129 20.8682 12.6465 19.1201 12.6465 16.9229C12.6465 15.5264 12.9492 14.2471 13.5547 13.085C14.1699 11.9131 15.0244 11.0049 16.1182 10.3604C17.2119 9.70605 18.4424 9.37891 19.8096 9.37891C21.2158 9.37891 22.4658 9.73047 23.5596 10.4336C24.6533 11.1367 25.5029 12.1475 26.1084 13.4658C26.7139 14.7842 27.0215 16.293 27.0312 17.9922V19.5596C27.0312 23.1143 26.1475 25.9072 24.3799 27.9385C22.6123 29.9697 20.1074 31.0537 16.8652 31.1904L15.8252 31.2051V27.6748L16.7627 27.6602C20.4443 27.4941 22.4365 25.7656 22.7393 22.4746ZM19.9121 20.8633C20.5957 20.8633 21.1816 20.6875 21.6699 20.3359C22.168 19.9844 22.5439 19.5596 22.7979 19.0615V17.3184C22.7979 15.8828 22.5244 14.7695 21.9775 13.9785C21.4307 13.1875 20.6982 12.792 19.7803 12.792C18.9307 12.792 18.2324 13.1826 17.6855 13.9639C17.1387 14.7354 16.8652 15.707 16.8652 16.8789C16.8652 18.041 17.1289 18.998 17.6562 19.75C18.1934 20.4922 18.9453 20.8633 19.9121 20.8633Z'
      fill='#FF3D3D'
    />
    <Path d='M20.8391 41L31 50.8391L21.1609 61L11 51.1609L20.8391 41Z' fill='#FF3D3D' />
    <Path d='M55.6782 72L76 91.6782L56.3218 112L36 92.3218L55.6782 72Z' fill='#FF3D3D' />
  </Svg>
);
