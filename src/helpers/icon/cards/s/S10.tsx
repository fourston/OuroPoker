import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../../types';
export const S10: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 87, height: height ? height : 124 }} viewBox='0 0 87 124' fill='none'>
    <Path d='M1 4C1 1.79086 2.79086 0 5 0H82C84.2091 0 86 1.79086 86 4V118C86 120.209 84.2091 122 82 122H5C2.79086 122 1 120.209 1 118V4Z' fill='white' />

    <Path
      d='M21 24C21 21.7909 22.7909 20 25 20H62C64.2091 20 66 21.7909 66 24V98C66 100.209 64.2091 102 62 102H25C22.7909 102 21 100.209 21 98V24Z'
      fill='#EDF2F5'
    />
    <Path d='M22.7334 31H18.5V14.6816L13.4463 16.249V12.8066L22.2793 9.64258H22.7334V31Z' fill='#FF3D3D' />
    <Path
      d='M44.0322 22.1816C44.0322 25.1309 43.4219 27.3867 42.2012 28.9492C40.9805 30.5117 39.1934 31.293 36.8398 31.293C34.5156 31.293 32.7383 30.5264 31.5078 28.9932C30.2773 27.46 29.6475 25.2627 29.6182 22.4014V18.4756C29.6182 15.4971 30.2334 13.2363 31.4639 11.6934C32.7041 10.1504 34.4863 9.37891 36.8105 9.37891C39.1348 9.37891 40.9121 10.1455 42.1426 11.6787C43.373 13.2021 44.0029 15.3945 44.0322 18.2559V22.1816ZM39.7988 17.875C39.7988 16.1074 39.5547 14.8232 39.0664 14.0225C38.5879 13.2119 37.8359 12.8066 36.8105 12.8066C35.8145 12.8066 35.0771 13.1924 34.5986 13.9639C34.1299 14.7256 33.8809 15.9219 33.8516 17.5527V22.7383C33.8516 24.4766 34.0859 25.7705 34.5547 26.6201C35.0332 27.46 35.7949 27.8799 36.8398 27.8799C37.875 27.8799 38.6221 27.4746 39.0811 26.6641C39.54 25.8535 39.7793 24.6133 39.7988 22.9434V17.875Z'
      fill='#FF3D3D'
    />
    <Path
      d='M29.267 42.8854C28.1131 41.6697 26.62 41 25.0626 41C23.5684 41 22.1333 41.6166 21.0002 42.7405C19.8671 41.6166 18.4317 41 16.9375 41C15.3802 41 13.887 41.6697 12.7331 42.8854C11.576 44.1046 10.9612 45.7355 11.0019 47.4771C11.0414 49.167 11.6925 50.7637 12.8354 51.975L21 61L29.1646 51.975C30.3075 50.7637 30.9584 49.167 30.9981 47.4773C31.0392 45.735 30.4242 44.1046 29.267 42.8854Z'
      fill='#FF3D3D'
    />
    <Path
      d='M72.534 75.7708C70.2263 73.3394 67.2399 72 64.1253 72C61.1369 72 58.2666 73.2332 56.0004 75.481C53.7341 73.2332 50.8635 72 47.8751 72C44.7604 72 41.7741 73.3394 39.4663 75.7708C37.152 78.2092 35.9223 81.4709 36.0038 84.9541C36.0828 88.3341 37.385 91.5275 39.6708 93.9499L56 112L72.3292 93.9499C74.615 91.5275 75.9167 88.3341 75.9961 84.9545C76.0784 81.4701 74.8483 78.2092 72.534 75.7708Z'
      fill='#FF3D3D'
    />
  </Svg>
);