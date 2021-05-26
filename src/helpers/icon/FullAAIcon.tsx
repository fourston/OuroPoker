import React, { FC } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { ISvgProps } from '../types';

export const FullAAIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 106, height: height ? height : 32 }} viewBox='0 0 106 32' fill='none'>
    <Rect x='1' width='20' height='30' rx='2' fill='white' />
    <Path
      d='M8.74609 5.78027C8.74609 6.12533 8.65983 6.43132 8.4873 6.69824C8.31478 6.96517 8.07715 7.17839 7.77441 7.33789C8.11947 7.50391 8.3929 7.7334 8.59473 8.02637C8.79655 8.31608 8.89746 8.65788 8.89746 9.05176C8.89746 9.68327 8.68262 10.1829 8.25293 10.5508C7.82324 10.9154 7.23893 11.0977 6.5 11.0977C5.76107 11.0977 5.17513 10.9137 4.74219 10.5459C4.30924 10.1781 4.09277 9.68001 4.09277 9.05176C4.09277 8.65788 4.19368 8.31445 4.39551 8.02148C4.59733 7.72852 4.86914 7.50065 5.21094 7.33789C4.9082 7.17839 4.67057 6.96517 4.49805 6.69824C4.32878 6.43132 4.24414 6.12533 4.24414 5.78027C4.24414 5.1748 4.44596 4.69303 4.84961 4.33496C5.25326 3.97363 5.80176 3.79297 6.49512 3.79297C7.18522 3.79297 7.7321 3.97201 8.13574 4.33008C8.54264 4.6849 8.74609 5.16829 8.74609 5.78027ZM7.48145 8.94922C7.48145 8.63997 7.39193 8.39258 7.21289 8.20703C7.03385 8.02148 6.79297 7.92871 6.49023 7.92871C6.19076 7.92871 5.9515 8.02148 5.77246 8.20703C5.59342 8.38932 5.50391 8.63672 5.50391 8.94922C5.50391 9.25195 5.5918 9.49609 5.76758 9.68164C5.94336 9.86719 6.1875 9.95996 6.5 9.95996C6.80599 9.95996 7.04525 9.87044 7.21777 9.69141C7.39355 9.51237 7.48145 9.26497 7.48145 8.94922ZM7.33496 5.84863C7.33496 5.57194 7.26172 5.35059 7.11523 5.18457C6.96875 5.0153 6.76204 4.93066 6.49512 4.93066C6.23145 4.93066 6.02637 5.01204 5.87988 5.1748C5.7334 5.33757 5.66016 5.56217 5.66016 5.84863C5.66016 6.13184 5.7334 6.3597 5.87988 6.53223C6.02637 6.70475 6.23307 6.79102 6.5 6.79102C6.76693 6.79102 6.97201 6.70475 7.11523 6.53223C7.26172 6.3597 7.33496 6.13184 7.33496 5.84863Z'
      fill='#FF3D3D'
    />
    <Path
      d='M9.48011 14.5656C9.13394 14.2009 8.68599 14 8.21879 14C7.77053 14 7.33999 14.185 7.00006 14.5222C6.66012 14.185 6.22952 14 5.78126 14C5.31406 14 4.86611 14.2009 4.51994 14.5656C4.1728 14.9314 3.98835 15.4206 4.00057 15.9431C4.01242 16.4501 4.20774 16.9291 4.55061 17.2925L6.99999 20L9.44937 17.2925C9.79224 16.9291 9.9875 16.4501 9.99942 15.9432C10.0118 15.4205 9.82725 14.9314 9.48011 14.5656Z'
      fill='#FF3D3D'
    />
    <Rect x='22' width='20' height='30' rx='2' fill='white' />
    <Rect x='43' width='20' height='30' rx='2' fill='white' />
    <Rect x='64' width='20' height='30' rx='2' fill='white' />
    <Rect x='85' width='20' height='30' rx='2' fill='white' />
    <Path
      d='M29.7461 5.78027C29.7461 6.12533 29.6598 6.43132 29.4873 6.69824C29.3148 6.96517 29.0771 7.17839 28.7744 7.33789C29.1195 7.50391 29.3929 7.7334 29.5947 8.02637C29.7965 8.31608 29.8975 8.65788 29.8975 9.05176C29.8975 9.68327 29.6826 10.1829 29.2529 10.5508C28.8232 10.9154 28.2389 11.0977 27.5 11.0977C26.7611 11.0977 26.1751 10.9137 25.7422 10.5459C25.3092 10.1781 25.0928 9.68001 25.0928 9.05176C25.0928 8.65788 25.1937 8.31445 25.3955 8.02148C25.5973 7.72852 25.8691 7.50065 26.2109 7.33789C25.9082 7.17839 25.6706 6.96517 25.498 6.69824C25.3288 6.43132 25.2441 6.12533 25.2441 5.78027C25.2441 5.1748 25.446 4.69303 25.8496 4.33496C26.2533 3.97363 26.8018 3.79297 27.4951 3.79297C28.1852 3.79297 28.7321 3.97201 29.1357 4.33008C29.5426 4.6849 29.7461 5.16829 29.7461 5.78027ZM28.4814 8.94922C28.4814 8.63997 28.3919 8.39258 28.2129 8.20703C28.0339 8.02148 27.793 7.92871 27.4902 7.92871C27.1908 7.92871 26.9515 8.02148 26.7725 8.20703C26.5934 8.38932 26.5039 8.63672 26.5039 8.94922C26.5039 9.25195 26.5918 9.49609 26.7676 9.68164C26.9434 9.86719 27.1875 9.95996 27.5 9.95996C27.806 9.95996 28.0452 9.87044 28.2178 9.69141C28.3936 9.51237 28.4814 9.26497 28.4814 8.94922ZM28.335 5.84863C28.335 5.57194 28.2617 5.35059 28.1152 5.18457C27.9688 5.0153 27.762 4.93066 27.4951 4.93066C27.2314 4.93066 27.0264 5.01204 26.8799 5.1748C26.7334 5.33757 26.6602 5.56217 26.6602 5.84863C26.6602 6.13184 26.7334 6.3597 26.8799 6.53223C27.0264 6.70475 27.2331 6.79102 27.5 6.79102C27.7669 6.79102 27.972 6.70475 28.1152 6.53223C28.2617 6.3597 28.335 6.13184 28.335 5.84863Z'
      fill='#FF3D3D'
    />
    <Path
      d='M50.7461 5.78027C50.7461 6.12533 50.6598 6.43132 50.4873 6.69824C50.3148 6.96517 50.0771 7.17839 49.7744 7.33789C50.1195 7.50391 50.3929 7.7334 50.5947 8.02637C50.7965 8.31608 50.8975 8.65788 50.8975 9.05176C50.8975 9.68327 50.6826 10.1829 50.2529 10.5508C49.8232 10.9154 49.2389 11.0977 48.5 11.0977C47.7611 11.0977 47.1751 10.9137 46.7422 10.5459C46.3092 10.1781 46.0928 9.68001 46.0928 9.05176C46.0928 8.65788 46.1937 8.31445 46.3955 8.02148C46.5973 7.72852 46.8691 7.50065 47.2109 7.33789C46.9082 7.17839 46.6706 6.96517 46.498 6.69824C46.3288 6.43132 46.2441 6.12533 46.2441 5.78027C46.2441 5.1748 46.446 4.69303 46.8496 4.33496C47.2533 3.97363 47.8018 3.79297 48.4951 3.79297C49.1852 3.79297 49.7321 3.97201 50.1357 4.33008C50.5426 4.6849 50.7461 5.16829 50.7461 5.78027ZM49.4814 8.94922C49.4814 8.63997 49.3919 8.39258 49.2129 8.20703C49.0339 8.02148 48.793 7.92871 48.4902 7.92871C48.1908 7.92871 47.9515 8.02148 47.7725 8.20703C47.5934 8.38932 47.5039 8.63672 47.5039 8.94922C47.5039 9.25195 47.5918 9.49609 47.7676 9.68164C47.9434 9.86719 48.1875 9.95996 48.5 9.95996C48.806 9.95996 49.0452 9.87044 49.2178 9.69141C49.3936 9.51237 49.4814 9.26497 49.4814 8.94922ZM49.335 5.84863C49.335 5.57194 49.2617 5.35059 49.1152 5.18457C48.9688 5.0153 48.762 4.93066 48.4951 4.93066C48.2314 4.93066 48.0264 5.01204 47.8799 5.1748C47.7334 5.33757 47.6602 5.56217 47.6602 5.84863C47.6602 6.13184 47.7334 6.3597 47.8799 6.53223C48.0264 6.70475 48.2331 6.79102 48.5 6.79102C48.7669 6.79102 48.972 6.70475 49.1152 6.53223C49.2617 6.3597 49.335 6.13184 49.335 5.84863Z'
      fill='black'
    />
    <Path
      d='M67.3223 7.50391L67.7324 3.89062H71.7168V5.06738H68.8896L68.7139 6.5957C69.0492 6.41667 69.4056 6.32715 69.7832 6.32715C70.4603 6.32715 70.9909 6.53711 71.375 6.95703C71.7591 7.37695 71.9512 7.96452 71.9512 8.71973C71.9512 9.17871 71.8535 9.59049 71.6582 9.95508C71.4661 10.3164 71.1895 10.598 70.8281 10.7998C70.4668 10.9984 70.0404 11.0977 69.5488 11.0977C69.1191 11.0977 68.7204 11.0114 68.3525 10.8389C67.9847 10.6631 67.6934 10.4173 67.4785 10.1016C67.2669 9.78581 67.1546 9.42611 67.1416 9.02246H68.5381C68.5674 9.31868 68.6699 9.5498 68.8457 9.71582C69.0247 9.87858 69.2575 9.95996 69.5439 9.95996C69.863 9.95996 70.1087 9.84603 70.2812 9.61816C70.4538 9.38704 70.54 9.06152 70.54 8.6416C70.54 8.23796 70.4408 7.92871 70.2422 7.71387C70.0436 7.49902 69.762 7.3916 69.3975 7.3916C69.0622 7.3916 68.7904 7.47949 68.582 7.65527L68.4453 7.78223L67.3223 7.50391Z'
      fill='black'
    />
    <Path
      d='M89.5479 6.82031H90.2998C90.6579 6.82031 90.9232 6.73079 91.0957 6.55176C91.2682 6.37272 91.3545 6.13509 91.3545 5.83887C91.3545 5.55241 91.2682 5.32943 91.0957 5.16992C90.9264 5.01042 90.6921 4.93066 90.3926 4.93066C90.1224 4.93066 89.8962 5.00553 89.7139 5.15527C89.5316 5.30176 89.4404 5.49382 89.4404 5.73145H88.0293C88.0293 5.36035 88.1286 5.02832 88.3271 4.73535C88.529 4.43913 88.8089 4.20801 89.167 4.04199C89.5283 3.87598 89.9255 3.79297 90.3584 3.79297C91.1104 3.79297 91.6995 3.97363 92.126 4.33496C92.5524 4.69303 92.7656 5.18783 92.7656 5.81934C92.7656 6.14486 92.6663 6.44434 92.4678 6.71777C92.2692 6.99121 92.0088 7.20117 91.6865 7.34766C92.0869 7.49089 92.3848 7.70573 92.5801 7.99219C92.7786 8.27865 92.8779 8.61719 92.8779 9.00781C92.8779 9.63932 92.6468 10.1455 92.1846 10.5264C91.7256 10.9072 91.1169 11.0977 90.3584 11.0977C89.6488 11.0977 89.0677 10.9105 88.6152 10.5361C88.166 10.1618 87.9414 9.66699 87.9414 9.05176H89.3525C89.3525 9.31868 89.4518 9.53678 89.6504 9.70605C89.8522 9.87533 90.0996 9.95996 90.3926 9.95996C90.7279 9.95996 90.9899 9.87207 91.1787 9.69629C91.3708 9.51725 91.4668 9.28125 91.4668 8.98828C91.4668 8.27865 91.0762 7.92383 90.2949 7.92383H89.5479V6.82031Z'
      fill='black'
    />
    <Path d='M27.9517 14L31 16.9517L28.0483 20L25 17.0483L27.9517 14Z' fill='#FF3D3D' />
    <Path
      d='M49.4546 19.9948L48.4659 20C48.6364 19.7485 48.7491 19.5127 48.804 19.2926C48.8589 19.0725 48.8864 18.7441 48.8864 18.3074C48.659 18.6463 48.4347 18.8856 48.213 19.0253C47.9915 19.1651 47.7273 19.2349 47.4205 19.2349C47.0265 19.2349 46.6913 19.1074 46.4148 18.8524C46.1384 18.5974 46 18.2864 46 17.9196C46 17.5109 46.1647 17.179 46.4943 16.9239C46.8238 16.6689 47.252 16.5415 47.7786 16.5415L48.1081 16.5467C47.7634 16.0751 47.591 15.6629 47.591 15.31C47.591 14.9467 47.7302 14.6375 48.0086 14.3825C48.287 14.1275 48.6251 14 49.0228 14C49.4281 14 49.7719 14.1283 50.054 14.3851C50.3362 14.6419 50.4773 14.9554 50.4773 15.3257C50.4773 15.6611 50.2841 16.0681 49.8978 16.5467C50.0947 16.5363 50.2254 16.531 50.2898 16.531C50.7861 16.531 51.1951 16.6603 51.517 16.9188C51.839 17.1773 52 17.5057 52 17.904C52 18.2603 51.858 18.573 51.5739 18.842C51.2898 19.1109 50.9603 19.2455 50.5852 19.2455C50.2633 19.2455 49.9887 19.1712 49.7614 19.0228C49.5342 18.8743 49.3163 18.6254 49.1079 18.2761C49.1079 18.7057 49.1298 19.0289 49.1733 19.2455C49.2169 19.462 49.3107 19.7118 49.4546 19.9948Z'
      fill='black'
    />
    <Path
      d='M91.4546 19.9948L90.4659 20C90.6364 19.7485 90.7491 19.5127 90.804 19.2926C90.8589 19.0725 90.8864 18.7441 90.8864 18.3074C90.659 18.6463 90.4347 18.8856 90.213 19.0253C89.9915 19.1651 89.7273 19.2349 89.4205 19.2349C89.0265 19.2349 88.6913 19.1074 88.4148 18.8524C88.1384 18.5974 88 18.2864 88 17.9196C88 17.5109 88.1647 17.179 88.4943 16.9239C88.8238 16.6689 89.252 16.5415 89.7786 16.5415L90.1081 16.5467C89.7634 16.0751 89.591 15.6629 89.591 15.31C89.591 14.9467 89.7302 14.6375 90.0086 14.3825C90.287 14.1275 90.6251 14 91.0228 14C91.4281 14 91.7719 14.1283 92.054 14.3851C92.3362 14.6419 92.4773 14.9554 92.4773 15.3257C92.4773 15.6611 92.2841 16.0681 91.8978 16.5467C92.0947 16.5363 92.2254 16.531 92.2898 16.531C92.7861 16.531 93.1951 16.6603 93.517 16.9188C93.839 17.1773 94 17.5057 94 17.904C94 18.2603 93.858 18.573 93.5739 18.842C93.2898 19.1109 92.9603 19.2455 92.5852 19.2455C92.2633 19.2455 91.9887 19.1712 91.7614 19.0228C91.5342 18.8743 91.3163 18.6254 91.1079 18.2761C91.1079 18.7057 91.1298 19.0289 91.1733 19.2455C91.2169 19.462 91.3107 19.7118 91.4546 19.9948Z'
      fill='black'
    />
    <Path
      d='M70.4954 18.9256L70.9558 19.8539C70.9904 19.923 70.9321 19.9999 70.8485 19.9999L69.1525 20C69.0647 20 69.0089 19.9182 69.0472 19.8498L69.5058 18.9253C69.2568 19.0345 68.9984 19.091 68.7201 19.091C68.2378 19.091 67.8011 18.9175 67.4853 18.6373C65.9852 17.3073 68.3508 15.4959 69.3453 14.5714C69.5703 14.3624 69.7705 14.1763 69.9131 14.0347C69.963 13.9904 70.0387 13.9865 70.0874 14.0347C70.23 14.1763 70.4301 14.3624 70.655 14.5715C71.6494 15.4961 74.0147 17.3074 72.5147 18.6373C72.199 18.9175 71.7622 19.091 71.2799 19.091C71.0019 19.091 70.744 19.0346 70.4954 18.9256Z'
      fill='black'
    />
  </Svg>
);