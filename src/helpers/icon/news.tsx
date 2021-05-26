import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../types';
export const NewsIconSvg: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 18, height: height ? height : 18 }} viewBox='0 0 18 18' fill='none'>
    <Path
      d='M15.0845 0H2.91549C1.30986 0 0 1.30986 0 2.91549V15.0845C0 16.6901 1.30986 18 2.91549 18H15.0845C16.6901 18 18 16.6901 18 15.0845V2.91549C18 1.30986 16.6901 0 15.0845 0ZM6.48592 4.5C6.48592 5.55634 5.64085 6.40141 4.58451 6.40141C3.52817 6.40141 2.6831 5.55634 2.6831 4.5C2.6831 3.44366 3.52817 2.59859 4.58451 2.59859C5.64085 2.59859 6.48592 3.44366 6.48592 4.5ZM14.9577 3.73944H8.51408C8.21831 3.73944 7.98592 3.50704 7.98592 3.21127C7.98592 2.91549 8.21831 2.6831 8.51408 2.6831H14.9366C15.2324 2.6831 15.4648 2.91549 15.4648 3.21127C15.4859 3.50704 15.2535 3.73944 14.9577 3.73944ZM15.4859 5.91549C15.4859 6.21127 15.2535 6.44366 14.9577 6.44366H8.51408C8.21831 6.44366 7.98592 6.21127 7.98592 5.91549C7.98592 5.61972 8.21831 5.38732 8.51408 5.38732H14.9366C15.2535 5.38732 15.4859 5.61972 15.4859 5.91549ZM15.0845 16.9437H2.91549C1.90141 16.9437 1.07746 16.1197 1.07746 15.1056V9.12676C3.59155 9.12676 14.4296 9.12676 16.9437 9.12676V15.0845C16.9437 16.0986 16.0986 16.9437 15.0845 16.9437Z'
      fill='white'
      fillOpacity='0.8'
    />
  </Svg>
);