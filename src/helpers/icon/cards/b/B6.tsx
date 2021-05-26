import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../../types';
export const B6: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 87, height: height ? height : 124 }} viewBox='0 0 87 124' fill='none'>
    <Path d='M1 4C1 1.79086 2.79086 0 5 0H82C84.2091 0 86 1.79086 86 4V118C86 120.209 84.2091 122 82 122H5C2.79086 122 1 120.209 1 118V4Z' fill='white' />

    <Path
      d='M21 24C21 21.7909 22.7909 20 25 20H62C64.2091 20 66 21.7909 66 24V98C66 100.209 64.2091 102 62 102H25C22.7909 102 21 100.209 21 98V24Z'
      fill='#EDF2F5'
    />
    <Path
      d='M24.3213 9.45215V12.9385H23.9111C21.9971 12.9678 20.4541 13.4658 19.2822 14.4326C18.1201 15.3994 17.4219 16.7422 17.1875 18.4609C18.3203 17.3086 19.751 16.7324 21.4795 16.7324C23.335 16.7324 24.8096 17.3965 25.9033 18.7246C26.9971 20.0527 27.5439 21.8008 27.5439 23.9688C27.5439 25.3555 27.2412 26.6104 26.6357 27.7334C26.04 28.8564 25.1904 29.7305 24.0869 30.3555C22.9932 30.9805 21.7529 31.293 20.3662 31.293C18.1201 31.293 16.3037 30.5117 14.917 28.9492C13.54 27.3867 12.8516 25.3018 12.8516 22.6943V21.1709C12.8516 18.8564 13.2861 16.8154 14.1553 15.0479C15.0342 13.2705 16.2891 11.8984 17.9199 10.9316C19.5605 9.95508 21.46 9.46191 23.6182 9.45215H24.3213ZM20.1904 20.1309C19.5068 20.1309 18.8867 20.3115 18.3301 20.6729C17.7734 21.0244 17.3633 21.4932 17.0996 22.0791V23.3682C17.0996 24.7842 17.3779 25.8926 17.9346 26.6934C18.4912 27.4844 19.2725 27.8799 20.2783 27.8799C21.1865 27.8799 21.9189 27.5234 22.4756 26.8105C23.042 26.0879 23.3252 25.1553 23.3252 24.0127C23.3252 22.8506 23.042 21.9131 22.4756 21.2002C21.9092 20.4873 21.1475 20.1309 20.1904 20.1309Z'
      fill='#FF3D3D'
    />
    <Path d='M20.8391 41L31 50.8391L21.1609 61L11 51.1609L20.8391 41Z' fill='#FF3D3D' />
    <Path d='M55.6782 72L76 91.6782L56.3218 112L36 92.3218L55.6782 72Z' fill='#FF3D3D' />
  </Svg>
);
