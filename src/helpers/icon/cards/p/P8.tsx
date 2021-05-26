import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../../types';
export const P8: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 87, height: height ? height : 124 }} viewBox='0 0 87 124' fill='none'>
    <Path d='M1 4C1 1.79086 2.79086 0 5 0H82C84.2091 0 86 1.79086 86 4V118C86 120.209 84.2091 122 82 122H5C2.79086 122 1 120.209 1 118V4Z' fill='white' />
    <Path
      d='M21 24C21 21.7909 22.7909 20 25 20H62C64.2091 20 66 21.7909 66 24V98C66 100.209 64.2091 102 62 102H25C22.7909 102 21 100.209 21 98V24Z'
      fill='#EDF2F5'
    />
    <Path
      d='M26.7383 15.3408C26.7383 16.376 26.4795 17.2939 25.9619 18.0947C25.4443 18.8955 24.7314 19.5352 23.8232 20.0137C24.8584 20.5117 25.6787 21.2002 26.2842 22.0791C26.8896 22.9482 27.1924 23.9736 27.1924 25.1553C27.1924 27.0498 26.5479 28.5488 25.2588 29.6523C23.9697 30.7461 22.2168 31.293 20 31.293C17.7832 31.293 16.0254 30.7412 14.7266 29.6377C13.4277 28.5342 12.7783 27.04 12.7783 25.1553C12.7783 23.9736 13.0811 22.9434 13.6865 22.0645C14.292 21.1855 15.1074 20.502 16.1328 20.0137C15.2246 19.5352 14.5117 18.8955 13.9941 18.0947C13.4863 17.2939 13.2324 16.376 13.2324 15.3408C13.2324 13.5244 13.8379 12.0791 15.0488 11.0049C16.2598 9.9209 17.9053 9.37891 19.9854 9.37891C22.0557 9.37891 23.6963 9.91602 24.9072 10.9902C26.1279 12.0547 26.7383 13.5049 26.7383 15.3408ZM22.9443 24.8477C22.9443 23.9199 22.6758 23.1777 22.1387 22.6211C21.6016 22.0645 20.8789 21.7861 19.9707 21.7861C19.0723 21.7861 18.3545 22.0645 17.8174 22.6211C17.2803 23.168 17.0117 23.9102 17.0117 24.8477C17.0117 25.7559 17.2754 26.4883 17.8027 27.0449C18.3301 27.6016 19.0625 27.8799 20 27.8799C20.918 27.8799 21.6357 27.6113 22.1533 27.0742C22.6807 26.5371 22.9443 25.7949 22.9443 24.8477ZM22.5049 15.5459C22.5049 14.7158 22.2852 14.0518 21.8457 13.5537C21.4062 13.0459 20.7861 12.792 19.9854 12.792C19.1943 12.792 18.5791 13.0361 18.1396 13.5244C17.7002 14.0127 17.4805 14.6865 17.4805 15.5459C17.4805 16.3955 17.7002 17.0791 18.1396 17.5967C18.5791 18.1143 19.1992 18.373 20 18.373C20.8008 18.373 21.416 18.1143 21.8457 17.5967C22.2852 17.0791 22.5049 16.3955 22.5049 15.5459Z'
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
