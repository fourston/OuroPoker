import React, { FC } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { ISvgProps } from '../types';

export const FullBBIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 106, height: height ? height : 32 }} viewBox='0 0 106 32' fill='none'>
    <Rect x='1' width='20' height='30' rx='2' fill='white' />
    <Path
      d='M7.41309 8.1582C7.04525 8.51953 6.61556 8.7002 6.12402 8.7002C5.49577 8.7002 4.99284 8.48535 4.61523 8.05566C4.23763 7.62272 4.04883 7.04004 4.04883 6.30762C4.04883 5.84212 4.14974 5.41569 4.35156 5.02832C4.55664 4.6377 4.84147 4.33496 5.20605 4.12012C5.57064 3.90202 5.98079 3.79297 6.43652 3.79297C6.90527 3.79297 7.32194 3.91016 7.68652 4.14453C8.05111 4.37891 8.33431 4.71582 8.53613 5.15527C8.73796 5.59473 8.84049 6.09766 8.84375 6.66406V7.18652C8.84375 8.37142 8.54915 9.30241 7.95996 9.97949C7.37077 10.6566 6.53581 11.0179 5.45508 11.0635L5.1084 11.0684V9.8916L5.4209 9.88672C6.64811 9.83138 7.31217 9.25521 7.41309 8.1582ZM6.4707 7.62109C6.69857 7.62109 6.89388 7.5625 7.05664 7.44531C7.22266 7.32812 7.34798 7.18652 7.43262 7.02051V6.43945C7.43262 5.96094 7.34147 5.58984 7.15918 5.32617C6.97689 5.0625 6.73275 4.93066 6.42676 4.93066C6.14355 4.93066 5.91081 5.06087 5.72852 5.32129C5.54622 5.57845 5.45508 5.90234 5.45508 6.29297C5.45508 6.68034 5.54297 6.99935 5.71875 7.25C5.89779 7.4974 6.14844 7.62109 6.4707 7.62109Z'
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
      d='M28.4131 8.1582C28.0452 8.51953 27.6156 8.7002 27.124 8.7002C26.4958 8.7002 25.9928 8.48535 25.6152 8.05566C25.2376 7.62272 25.0488 7.04004 25.0488 6.30762C25.0488 5.84212 25.1497 5.41569 25.3516 5.02832C25.5566 4.6377 25.8415 4.33496 26.2061 4.12012C26.5706 3.90202 26.9808 3.79297 27.4365 3.79297C27.9053 3.79297 28.3219 3.91016 28.6865 4.14453C29.0511 4.37891 29.3343 4.71582 29.5361 5.15527C29.738 5.59473 29.8405 6.09766 29.8438 6.66406V7.18652C29.8438 8.37142 29.5492 9.30241 28.96 9.97949C28.3708 10.6566 27.5358 11.0179 26.4551 11.0635L26.1084 11.0684V9.8916L26.4209 9.88672C27.6481 9.83138 28.3122 9.25521 28.4131 8.1582ZM27.4707 7.62109C27.6986 7.62109 27.8939 7.5625 28.0566 7.44531C28.2227 7.32812 28.348 7.18652 28.4326 7.02051V6.43945C28.4326 5.96094 28.3415 5.58984 28.1592 5.32617C27.9769 5.0625 27.7327 4.93066 27.4268 4.93066C27.1436 4.93066 26.9108 5.06087 26.7285 5.32129C26.5462 5.57845 26.4551 5.90234 26.4551 6.29297C26.4551 6.68034 26.543 6.99935 26.7188 7.25C26.8978 7.4974 27.1484 7.62109 27.4707 7.62109Z'
      fill='#FF3D3D'
    />
    <Path
      d='M50.7461 5.78027C50.7461 6.12533 50.6598 6.43132 50.4873 6.69824C50.3148 6.96517 50.0771 7.17839 49.7744 7.33789C50.1195 7.50391 50.3929 7.7334 50.5947 8.02637C50.7965 8.31608 50.8975 8.65788 50.8975 9.05176C50.8975 9.68327 50.6826 10.1829 50.2529 10.5508C49.8232 10.9154 49.2389 11.0977 48.5 11.0977C47.7611 11.0977 47.1751 10.9137 46.7422 10.5459C46.3092 10.1781 46.0928 9.68001 46.0928 9.05176C46.0928 8.65788 46.1937 8.31445 46.3955 8.02148C46.5973 7.72852 46.8691 7.50065 47.2109 7.33789C46.9082 7.17839 46.6706 6.96517 46.498 6.69824C46.3288 6.43132 46.2441 6.12533 46.2441 5.78027C46.2441 5.1748 46.446 4.69303 46.8496 4.33496C47.2533 3.97363 47.8018 3.79297 48.4951 3.79297C49.1852 3.79297 49.7321 3.97201 50.1357 4.33008C50.5426 4.6849 50.7461 5.16829 50.7461 5.78027ZM49.4814 8.94922C49.4814 8.63997 49.3919 8.39258 49.2129 8.20703C49.0339 8.02148 48.793 7.92871 48.4902 7.92871C48.1908 7.92871 47.9515 8.02148 47.7725 8.20703C47.5934 8.38932 47.5039 8.63672 47.5039 8.94922C47.5039 9.25195 47.5918 9.49609 47.7676 9.68164C47.9434 9.86719 48.1875 9.95996 48.5 9.95996C48.806 9.95996 49.0452 9.87044 49.2178 9.69141C49.3936 9.51237 49.4814 9.26497 49.4814 8.94922ZM49.335 5.84863C49.335 5.57194 49.2617 5.35059 49.1152 5.18457C48.9688 5.0153 48.762 4.93066 48.4951 4.93066C48.2314 4.93066 48.0264 5.01204 47.8799 5.1748C47.7334 5.33757 47.6602 5.56217 47.6602 5.84863C47.6602 6.13184 47.7334 6.3597 47.8799 6.53223C48.0264 6.70475 48.2331 6.79102 48.5 6.79102C48.7669 6.79102 48.972 6.70475 49.1152 6.53223C49.2617 6.3597 49.335 6.13184 49.335 5.84863Z'
      fill='black'
    />
    <Path
      d='M71.7461 5.78027C71.7461 6.12533 71.6598 6.43132 71.4873 6.69824C71.3148 6.96517 71.0771 7.17839 70.7744 7.33789C71.1195 7.50391 71.3929 7.7334 71.5947 8.02637C71.7965 8.31608 71.8975 8.65788 71.8975 9.05176C71.8975 9.68327 71.6826 10.1829 71.2529 10.5508C70.8232 10.9154 70.2389 11.0977 69.5 11.0977C68.7611 11.0977 68.1751 10.9137 67.7422 10.5459C67.3092 10.1781 67.0928 9.68001 67.0928 9.05176C67.0928 8.65788 67.1937 8.31445 67.3955 8.02148C67.5973 7.72852 67.8691 7.50065 68.2109 7.33789C67.9082 7.17839 67.6706 6.96517 67.498 6.69824C67.3288 6.43132 67.2441 6.12533 67.2441 5.78027C67.2441 5.1748 67.446 4.69303 67.8496 4.33496C68.2533 3.97363 68.8018 3.79297 69.4951 3.79297C70.1852 3.79297 70.7321 3.97201 71.1357 4.33008C71.5426 4.6849 71.7461 5.16829 71.7461 5.78027ZM70.4814 8.94922C70.4814 8.63997 70.3919 8.39258 70.2129 8.20703C70.0339 8.02148 69.793 7.92871 69.4902 7.92871C69.1908 7.92871 68.9515 8.02148 68.7725 8.20703C68.5934 8.38932 68.5039 8.63672 68.5039 8.94922C68.5039 9.25195 68.5918 9.49609 68.7676 9.68164C68.9434 9.86719 69.1875 9.95996 69.5 9.95996C69.806 9.95996 70.0452 9.87044 70.2178 9.69141C70.3936 9.51237 70.4814 9.26497 70.4814 8.94922ZM70.335 5.84863C70.335 5.57194 70.2617 5.35059 70.1152 5.18457C69.9688 5.0153 69.762 4.93066 69.4951 4.93066C69.2314 4.93066 69.0264 5.01204 68.8799 5.1748C68.7334 5.33757 68.6602 5.56217 68.6602 5.84863C68.6602 6.13184 68.7334 6.3597 68.8799 6.53223C69.0264 6.70475 69.2331 6.79102 69.5 6.79102C69.7669 6.79102 69.972 6.70475 70.1152 6.53223C70.2617 6.3597 70.335 6.13184 70.335 5.84863Z'
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