import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../../types';
export const AK: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 87, height: height ? height : 124 }} viewBox='0 0 87 124' fill='none'>
    <Path d='M1 4C1 1.79086 2.79086 0 5 0H82C84.2091 0 86 1.79086 86 4V118C86 120.209 84.2091 122 82 122H5C2.79086 122 1 120.209 1 118V4Z' fill='white' />
    <Path
      d='M21 24C21 21.7909 22.7909 20 25 20H62C64.2091 20 66 21.7909 66 24V98C66 100.209 64.2091 102 62 102H25C22.7909 102 21 100.209 21 98V24Z'
      fill='#EDF2F5'
    />
    <Path
      d='M23.8525 26.6055H16.1475L14.6826 31H10.0098L17.9492 9.67188H22.0215L30.0049 31H25.332L23.8525 26.6055ZM17.334 23.0459H22.666L19.9854 15.0625L17.334 23.0459Z'
      fill='black'
    />
    <Path
      d='M22.5153 60.9826L19.2197 61C19.7881 60.1616 20.1635 59.3755 20.3467 58.642C20.5298 57.9083 20.6213 56.8137 20.6213 55.3581C19.8635 56.4877 19.1158 57.2854 18.3768 57.751C17.6383 58.2169 16.7575 58.4498 15.7349 58.4498C14.4217 58.4498 13.3044 58.0246 12.3826 57.1746C11.4612 56.3246 11 55.2881 11 54.0654C11 52.7029 11.5491 51.5967 12.6476 50.7464C13.746 49.8962 15.1733 49.4715 16.9286 49.4715L18.027 49.4891C16.8778 47.917 16.3034 46.543 16.3034 45.3668C16.3034 44.1556 16.7674 43.1251 17.6953 42.2751C18.6235 41.4251 19.7504 41 21.076 41C22.4271 41 23.5729 41.4278 24.5134 42.2838C25.4541 43.1396 25.9244 44.1848 25.9244 45.4191C25.9244 46.537 25.2804 47.8936 23.9928 49.4891C24.6492 49.4542 25.0847 49.4368 25.2992 49.4368C26.9536 49.4368 28.317 49.8677 29.3901 50.7293C30.4635 51.5911 31 52.6858 31 54.0132C31 55.201 30.5267 56.2433 29.5798 57.1399C28.6328 58.0364 27.5343 58.485 26.2842 58.485C25.2111 58.485 24.2957 58.2374 23.5379 57.7426C22.7806 57.2477 22.0544 56.418 21.3598 55.2536C21.3598 56.6858 21.4325 57.7631 21.5777 58.485C21.7229 59.2066 22.0355 60.0393 22.5153 60.9826Z'
      fill='black'
    />
    <Path
      d='M59.0306 111.965L52.4394 112C53.5762 110.323 54.3271 108.751 54.6933 107.284C55.0595 105.817 55.2427 103.627 55.2427 100.716C53.727 102.975 52.2316 104.571 50.7537 105.502C49.2766 106.434 47.5151 106.9 45.4699 106.9C42.8434 106.9 40.6088 106.049 38.7651 104.349C36.9223 102.649 36 100.576 36 98.1307C36 95.4058 37.0982 93.1933 39.2951 91.4929C41.492 89.7924 44.3465 88.9431 47.8571 88.9431L50.054 88.9783C47.7557 85.8341 46.6067 83.086 46.6067 80.7336C46.6067 78.3112 47.5349 76.2503 49.3907 74.5502C51.247 72.8502 53.5009 72 56.152 72C58.8542 72 61.1459 72.8556 63.0268 74.5676C64.9082 76.2792 65.8489 78.3696 65.8489 80.8383C65.8489 83.0739 64.5608 85.7873 61.9856 88.9783C63.2983 88.9083 64.1694 88.8736 64.5985 88.8736C67.9071 88.8736 70.6341 89.7354 72.7802 91.4586C74.9269 93.1822 76 95.3715 76 98.0265C76 100.402 75.0535 102.487 73.1595 104.28C71.2656 106.073 69.0686 106.97 66.5683 106.97C64.4221 106.97 62.5915 106.475 61.0758 105.485C59.5611 104.495 58.1087 102.836 56.7197 100.507C56.7197 103.372 56.8651 105.526 57.1555 106.97C57.4458 108.413 58.071 110.079 59.0306 111.965Z'
      fill='black'
    />
  </Svg>
);
