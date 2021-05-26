import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../types';
export const FilesIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 16, height: height ? height : 18 }} viewBox='0 0 16 18' fill='none'>
    <Path
      d='M14.5637 10.7664C14.4478 10.6488 14.2895 10.5838 14.1238 10.5856C13.9581 10.5874 13.7985 10.6558 13.68 10.7759L9.21476 15.3045C8.32656 16.2053 7.12933 16.7189 5.88645 16.7323C4.64357 16.7457 3.45684 16.2578 2.58734 15.376C1.71784 14.4942 1.23679 13.2906 1.25001 12.0301C1.26324 10.7696 1.76965 9.55545 2.65785 8.65467L8.90924 2.3147C9.56059 1.65412 10.4386 1.27749 11.35 1.26765C12.2614 1.25782 13.1317 1.61559 13.7693 2.26226C14.407 2.90893 14.7598 3.79153 14.7501 4.71589C14.7404 5.64025 14.369 6.53066 13.7176 7.19123L7.68951 13.3048C7.27502 13.7251 6.71631 13.9648 6.1363 13.9711C5.55629 13.9773 5.00249 13.7497 4.59672 13.3381C4.19095 12.9266 3.96646 12.365 3.97263 11.7767C3.9788 11.1885 4.21513 10.6219 4.62962 10.2015L8.87164 5.8994C8.99007 5.7793 9.05759 5.61741 9.05935 5.44934C9.06111 5.28127 8.99697 5.1208 8.88104 5.00323C8.76511 4.88565 8.60688 4.8206 8.44116 4.82239C8.27544 4.82418 8.11581 4.89265 7.99738 5.01276L3.75537 9.31488C3.10402 9.97546 2.73265 10.8659 2.72295 11.7902C2.71326 12.7146 3.06603 13.5972 3.70366 14.2439C4.3413 14.8905 5.21156 15.2483 6.12301 15.2385C7.03446 15.2286 7.91242 14.852 8.56377 14.1914L14.5919 8.07788C15.4801 7.17709 15.9865 5.9629 15.9997 4.7024C16.013 3.44191 15.5319 2.23837 14.6624 1.35655C13.7929 0.474729 12.6062 -0.0131401 11.3633 0.000269289C10.1204 0.0136787 8.92319 0.527268 8.03499 1.42805L1.78359 7.76803C0.658541 8.90902 0.0170844 10.447 0.000336339 12.0436C-0.0164118 13.6402 0.592921 15.1647 1.69429 16.2817C2.79566 17.3987 4.29884 18.0166 5.87316 17.9997C7.44747 17.9827 8.96396 17.3321 10.089 16.1911L14.5543 11.6626C14.6727 11.5425 14.7402 11.3806 14.742 11.2125C14.7438 11.0445 14.6796 10.884 14.5637 10.7664Z'
      fill='#A4AECE'
    />
  </Svg>
);