import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../types';
export const MessagesIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 11, height: height ? height : 14 }} viewBox='0 0 11 14' fill='none'>
    <Path
      d='M11 3.2806V8.29399C11 9.43156 10.4478 10.435 9.6119 11.0221V14L7.82808 11.5746H3.11593C1.39583 11.5746 0 10.1059 0 8.29399V3.2806C0 1.46866 1.39583 0 3.11593 0H7.88219C9.60417 0 11 1.46866 11 3.2806ZM7.79528 6.3175V5.15761H6.69298V6.3175H7.79528ZM5.85707 6.3175V5.15761H4.75477V6.3175H5.85707ZM3.91885 6.3175V5.15761H2.81655V6.3175H3.91885Z'
      fill='white'
      fillOpacity='0.8'
    />
  </Svg>
);
