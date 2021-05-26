import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../../types';
export const P4: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 87, height: height ? height : 124 }} viewBox='0 0 87 124' fill='none'>
    <Path d='M1 4C1 1.79086 2.79086 0 5 0H82C84.2091 0 86 1.79086 86 4V118C86 120.209 84.2091 122 82 122H5C2.79086 122 1 120.209 1 118V4Z' fill='white' />

    <Path
      d='M21 24C21 21.7909 22.7909 20 25 20H62C64.2091 20 66 21.7909 66 24V98C66 100.209 64.2091 102 62 102H25C22.7909 102 21 100.209 21 98V24Z'
      fill='#EDF2F5'
    />
    <Path
      d='M25.3613 22.9727H27.7783V26.3857H25.3613V31H21.1279V26.3857H12.3828L12.1924 23.7197L21.084 9.67188H25.3613V22.9727ZM16.4111 22.9727H21.1279V15.4434L20.8496 15.9268L16.4111 22.9727Z'
      fill='black'
    />
    <Path
      d='M22.6513 57.4188L24.1861 60.5132C24.3014 60.7434 24.1069 60.9997 23.8284 60.9997L18.175 61C17.8824 61 17.6965 60.7273 17.8239 60.4993L19.3527 57.4176C18.5228 57.7816 17.6614 57.9699 16.7338 57.9699C15.1261 57.9699 13.6702 57.3916 12.6177 56.4578C7.61723 52.0244 15.5027 45.9863 18.8177 42.9047C19.5677 42.208 20.2349 41.5877 20.7102 41.1156C20.8766 40.968 21.129 40.955 21.2912 41.1156C21.7665 41.5877 22.4338 42.208 23.1835 42.9049C26.4981 45.9869 34.3823 52.0247 29.3824 56.4578C28.33 57.3916 26.874 57.9699 25.2664 57.9699C24.3398 57.9699 23.4799 57.7821 22.6513 57.4188Z'
      fill='black'
    />
    <Path
      d='M59.3026 104.838L62.3723 111.026C62.6029 111.487 62.2138 111.999 61.6568 111.999L50.35 112C49.7648 112 49.393 111.455 49.6479 110.999L52.7054 104.835C51.0457 105.563 49.3227 105.94 47.4675 105.94C44.2523 105.94 41.3404 104.783 39.2355 102.916C29.2345 94.0488 45.0055 81.9726 51.6353 75.8093C53.1353 74.4159 54.4698 73.1754 55.4204 72.2312C55.7533 71.9361 56.2579 71.91 56.5825 72.2312C57.5331 73.1754 58.8676 74.4159 60.3669 75.8099C66.9962 81.9737 82.7646 94.0494 72.7649 102.916C70.6599 104.783 67.7481 105.94 64.5328 105.94C62.6795 105.94 60.9598 105.564 59.3026 104.838Z'
      fill='black'
    />
  </Svg>
);
