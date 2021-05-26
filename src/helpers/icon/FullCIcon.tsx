import React, { FC } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { ISvgProps } from '../types';
export const FullCIcon: FC<ISvgProps> = ({ height, width, fill }) => (
  <Svg style={{ width: width ? width : 106, height: height ? height : 32 }} viewBox='0 0 106 32' fill='none'>
    <Rect x='1' width='20' height='30' rx='2' fill='white' />
    <Path
      d='M7.41309 8.1582C7.04525 8.51953 6.61556 8.7002 6.12402 8.7002C5.49577 8.7002 4.99284 8.48535 4.61523 8.05566C4.23763 7.62272 4.04883 7.04004 4.04883 6.30762C4.04883 5.84212 4.14974 5.41569 4.35156 5.02832C4.55664 4.6377 4.84147 4.33496 5.20605 4.12012C5.57064 3.90202 5.98079 3.79297 6.43652 3.79297C6.90527 3.79297 7.32194 3.91016 7.68652 4.14453C8.05111 4.37891 8.33431 4.71582 8.53613 5.15527C8.73796 5.59473 8.84049 6.09766 8.84375 6.66406V7.18652C8.84375 8.37142 8.54915 9.30241 7.95996 9.97949C7.37077 10.6566 6.53581 11.0179 5.45508 11.0635L5.1084 11.0684V9.8916L5.4209 9.88672C6.64811 9.83138 7.31217 9.25521 7.41309 8.1582ZM6.4707 7.62109C6.69857 7.62109 6.89388 7.5625 7.05664 7.44531C7.22266 7.32812 7.34798 7.18652 7.43262 7.02051V6.43945C7.43262 5.96094 7.34147 5.58984 7.15918 5.32617C6.97689 5.0625 6.73275 4.93066 6.42676 4.93066C6.14355 4.93066 5.91081 5.06087 5.72852 5.32129C5.54622 5.57845 5.45508 5.90234 5.45508 6.29297C5.45508 6.68034 5.54297 6.99935 5.71875 7.25C5.89779 7.4974 6.14844 7.62109 6.4707 7.62109Z'
      fill='black'
    />
    <Rect x='22' width='20' height='30' rx='2' fill='white' />
    <Rect x='43' width='20' height='30' rx='2' fill='white' />
    <Rect x='64' width='20' height='30' rx='2' fill='white' />
    <Rect x='85' width='20' height='30' rx='2' fill='white' />
    <Path
      d='M29.7461 5.78027C29.7461 6.12533 29.6598 6.43132 29.4873 6.69824C29.3148 6.96517 29.0771 7.17839 28.7744 7.33789C29.1195 7.50391 29.3929 7.7334 29.5947 8.02637C29.7965 8.31608 29.8975 8.65788 29.8975 9.05176C29.8975 9.68327 29.6826 10.1829 29.2529 10.5508C28.8232 10.9154 28.2389 11.0977 27.5 11.0977C26.7611 11.0977 26.1751 10.9137 25.7422 10.5459C25.3092 10.1781 25.0928 9.68001 25.0928 9.05176C25.0928 8.65788 25.1937 8.31445 25.3955 8.02148C25.5973 7.72852 25.8691 7.50065 26.2109 7.33789C25.9082 7.17839 25.6706 6.96517 25.498 6.69824C25.3288 6.43132 25.2441 6.12533 25.2441 5.78027C25.2441 5.1748 25.446 4.69303 25.8496 4.33496C26.2533 3.97363 26.8018 3.79297 27.4951 3.79297C28.1852 3.79297 28.7321 3.97201 29.1357 4.33008C29.5426 4.6849 29.7461 5.16829 29.7461 5.78027ZM28.4814 8.94922C28.4814 8.63997 28.3919 8.39258 28.2129 8.20703C28.0339 8.02148 27.793 7.92871 27.4902 7.92871C27.1908 7.92871 26.9515 8.02148 26.7725 8.20703C26.5934 8.38932 26.5039 8.63672 26.5039 8.94922C26.5039 9.25195 26.5918 9.49609 26.7676 9.68164C26.9434 9.86719 27.1875 9.95996 27.5 9.95996C27.806 9.95996 28.0452 9.87044 28.2178 9.69141C28.3936 9.51237 28.4814 9.26497 28.4814 8.94922ZM28.335 5.84863C28.335 5.57194 28.2617 5.35059 28.1152 5.18457C27.9688 5.0153 27.762 4.93066 27.4951 4.93066C27.2314 4.93066 27.0264 5.01204 26.8799 5.1748C26.7334 5.33757 26.6602 5.56217 26.6602 5.84863C26.6602 6.13184 26.7334 6.3597 26.8799 6.53223C27.0264 6.70475 27.2331 6.79102 27.5 6.79102C27.7669 6.79102 27.972 6.70475 28.1152 6.53223C28.2617 6.3597 28.335 6.13184 28.335 5.84863Z'
      fill='black'
    />
    <Path d='M50.9463 4.68164L48.1973 11H46.708L49.4619 5.0332H45.9268V3.89062H50.9463V4.68164Z' fill='black' />
    <Path
      d='M70.9404 3.81738V4.97949H70.8037C70.1657 4.98926 69.6514 5.15527 69.2607 5.47754C68.8734 5.7998 68.6406 6.2474 68.5625 6.82031C68.9401 6.4362 69.417 6.24414 69.9932 6.24414C70.6117 6.24414 71.1032 6.46549 71.4678 6.9082C71.8324 7.35091 72.0146 7.93359 72.0146 8.65625C72.0146 9.11849 71.9137 9.53678 71.7119 9.91113C71.5133 10.2855 71.2301 10.5768 70.8623 10.7852C70.4977 10.9935 70.0843 11.0977 69.6221 11.0977C68.8734 11.0977 68.2679 10.8372 67.8057 10.3164C67.3467 9.79557 67.1172 9.10059 67.1172 8.23145V7.72363C67.1172 6.95215 67.262 6.27181 67.5518 5.68262C67.8447 5.09017 68.263 4.63281 68.8066 4.31055C69.3535 3.98503 69.9867 3.82064 70.7061 3.81738H70.9404ZM69.5635 7.37695C69.3356 7.37695 69.1289 7.43717 68.9434 7.55762C68.7578 7.6748 68.6211 7.83105 68.5332 8.02637V8.45605C68.5332 8.92806 68.626 9.29753 68.8115 9.56445C68.9971 9.82812 69.2575 9.95996 69.5928 9.95996C69.8955 9.95996 70.1396 9.84115 70.3252 9.60352C70.514 9.36263 70.6084 9.05176 70.6084 8.6709C70.6084 8.28353 70.514 7.97103 70.3252 7.7334C70.1364 7.49577 69.8825 7.37695 69.5635 7.37695Z'
      fill='black'
    />
    <Path
      d='M88.3223 7.50391L88.7324 3.89062H92.7168V5.06738H89.8896L89.7139 6.5957C90.0492 6.41667 90.4056 6.32715 90.7832 6.32715C91.4603 6.32715 91.9909 6.53711 92.375 6.95703C92.7591 7.37695 92.9512 7.96452 92.9512 8.71973C92.9512 9.17871 92.8535 9.59049 92.6582 9.95508C92.4661 10.3164 92.1895 10.598 91.8281 10.7998C91.4668 10.9984 91.0404 11.0977 90.5488 11.0977C90.1191 11.0977 89.7204 11.0114 89.3525 10.8389C88.9847 10.6631 88.6934 10.4173 88.4785 10.1016C88.2669 9.78581 88.1546 9.42611 88.1416 9.02246H89.5381C89.5674 9.31868 89.6699 9.5498 89.8457 9.71582C90.0247 9.87858 90.2575 9.95996 90.5439 9.95996C90.863 9.95996 91.1087 9.84603 91.2812 9.61816C91.4538 9.38704 91.54 9.06152 91.54 8.6416C91.54 8.23796 91.4408 7.92871 91.2422 7.71387C91.0436 7.49902 90.762 7.3916 90.3975 7.3916C90.0622 7.3916 89.7904 7.47949 89.582 7.65527L89.4453 7.78223L88.3223 7.50391Z'
      fill='black'
    />
    <Path
      d='M49.4546 19.9948L48.4659 20C48.6364 19.7485 48.7491 19.5127 48.804 19.2926C48.8589 19.0725 48.8864 18.7441 48.8864 18.3074C48.659 18.6463 48.4347 18.8856 48.213 19.0253C47.9915 19.1651 47.7273 19.2349 47.4205 19.2349C47.0265 19.2349 46.6913 19.1074 46.4148 18.8524C46.1384 18.5974 46 18.2864 46 17.9196C46 17.5109 46.1647 17.179 46.4943 16.9239C46.8238 16.6689 47.252 16.5415 47.7786 16.5415L48.1081 16.5467C47.7634 16.0751 47.591 15.6629 47.591 15.31C47.591 14.9467 47.7302 14.6375 48.0086 14.3825C48.287 14.1275 48.6251 14 49.0228 14C49.4281 14 49.7719 14.1283 50.054 14.3851C50.3362 14.6419 50.4773 14.9554 50.4773 15.3257C50.4773 15.6611 50.2841 16.0681 49.8978 16.5467C50.0947 16.5363 50.2254 16.531 50.2898 16.531C50.7861 16.531 51.1951 16.6603 51.517 16.9188C51.839 17.1773 52 17.5057 52 17.904C52 18.2603 51.858 18.573 51.5739 18.842C51.2898 19.1109 50.9603 19.2455 50.5852 19.2455C50.2633 19.2455 49.9887 19.1712 49.7614 19.0228C49.5342 18.8743 49.3163 18.6254 49.1079 18.2761C49.1079 18.7057 49.1298 19.0289 49.1733 19.2455C49.2169 19.462 49.3107 19.7118 49.4546 19.9948Z'
      fill='black'
    />
    <Path
      d='M28.4546 19.9948L27.4659 20C27.6364 19.7485 27.7491 19.5127 27.804 19.2926C27.8589 19.0725 27.8864 18.7441 27.8864 18.3074C27.659 18.6463 27.4347 18.8856 27.213 19.0253C26.9915 19.1651 26.7273 19.2349 26.4205 19.2349C26.0265 19.2349 25.6913 19.1074 25.4148 18.8524C25.1384 18.5974 25 18.2864 25 17.9196C25 17.5109 25.1647 17.179 25.4943 16.9239C25.8238 16.6689 26.252 16.5415 26.7786 16.5415L27.1081 16.5467C26.7634 16.0751 26.591 15.6629 26.591 15.31C26.591 14.9467 26.7302 14.6375 27.0086 14.3825C27.287 14.1275 27.6251 14 28.0228 14C28.4281 14 28.7719 14.1283 29.054 14.3851C29.3362 14.6419 29.4773 14.9554 29.4773 15.3257C29.4773 15.6611 29.2841 16.0681 28.8978 16.5467C29.0947 16.5363 29.2254 16.531 29.2898 16.531C29.7861 16.531 30.1951 16.6603 30.517 16.9188C30.839 17.1773 31 17.5057 31 17.904C31 18.2603 30.858 18.573 30.5739 18.842C30.2898 19.1109 29.9603 19.2455 29.5852 19.2455C29.2633 19.2455 28.9887 19.1712 28.7614 19.0228C28.5342 18.8743 28.3163 18.6254 28.1079 18.2761C28.1079 18.7057 28.1298 19.0289 28.1733 19.2455C28.2169 19.462 28.3107 19.7118 28.4546 19.9948Z'
      fill='black'
    />
    <Path
      d='M7.45459 19.9948L6.46591 20C6.63644 19.7485 6.74906 19.5127 6.804 19.2926C6.85893 19.0725 6.8864 18.7441 6.8864 18.3074C6.65905 18.6463 6.43474 18.8856 6.21305 19.0253C5.9915 19.1651 5.72726 19.2349 5.42048 19.2349C5.02651 19.2349 4.69132 19.1074 4.41477 18.8524C4.13835 18.5974 4 18.2864 4 17.9196C4 17.5109 4.16473 17.179 4.49427 16.9239C4.82381 16.6689 5.25198 16.5415 5.77857 16.5415L6.10811 16.5467C5.76335 16.0751 5.59101 15.6629 5.59101 15.31C5.59101 14.9467 5.73023 14.6375 6.0086 14.3825C6.28704 14.1275 6.62513 14 7.02279 14C7.42814 14 7.77188 14.1283 8.05402 14.3851C8.33623 14.6419 8.47733 14.9554 8.47733 15.3257C8.47733 15.6611 8.28412 16.0681 7.89784 16.5467C8.09475 16.5363 8.22542 16.531 8.28977 16.531C8.78607 16.531 9.19511 16.6603 9.51704 16.9188C9.83904 17.1773 10 17.5057 10 17.904C10 18.2603 9.85802 18.573 9.57393 18.842C9.28983 19.1109 8.9603 19.2455 8.58525 19.2455C8.26332 19.2455 7.98872 19.1712 7.76137 19.0228C7.53417 18.8743 7.31631 18.6254 7.10795 18.2761C7.10795 18.7057 7.12976 19.0289 7.17332 19.2455C7.21688 19.462 7.31066 19.7118 7.45459 19.9948Z'
      fill='black'
    />
    <Path
      d='M70.4546 19.9948L69.4659 20C69.6364 19.7485 69.7491 19.5127 69.804 19.2926C69.8589 19.0725 69.8864 18.7441 69.8864 18.3074C69.659 18.6463 69.4347 18.8856 69.213 19.0253C68.9915 19.1651 68.7273 19.2349 68.4205 19.2349C68.0265 19.2349 67.6913 19.1074 67.4148 18.8524C67.1384 18.5974 67 18.2864 67 17.9196C67 17.5109 67.1647 17.179 67.4943 16.9239C67.8238 16.6689 68.252 16.5415 68.7786 16.5415L69.1081 16.5467C68.7634 16.0751 68.591 15.6629 68.591 15.31C68.591 14.9467 68.7302 14.6375 69.0086 14.3825C69.287 14.1275 69.6251 14 70.0228 14C70.4281 14 70.7719 14.1283 71.054 14.3851C71.3362 14.6419 71.4773 14.9554 71.4773 15.3257C71.4773 15.6611 71.2841 16.0681 70.8978 16.5467C71.0947 16.5363 71.2254 16.531 71.2898 16.531C71.7861 16.531 72.1951 16.6603 72.517 16.9188C72.839 17.1773 73 17.5057 73 17.904C73 18.2603 72.858 18.573 72.5739 18.842C72.2898 19.1109 71.9603 19.2455 71.5852 19.2455C71.2633 19.2455 70.9887 19.1712 70.7614 19.0228C70.5342 18.8743 70.3163 18.6254 70.1079 18.2761C70.1079 18.7057 70.1298 19.0289 70.1733 19.2455C70.2169 19.462 70.3107 19.7118 70.4546 19.9948Z'
      fill='black'
    />
    <Path
      d='M91.4546 19.9948L90.4659 20C90.6364 19.7485 90.7491 19.5127 90.804 19.2926C90.8589 19.0725 90.8864 18.7441 90.8864 18.3074C90.659 18.6463 90.4347 18.8856 90.213 19.0253C89.9915 19.1651 89.7273 19.2349 89.4205 19.2349C89.0265 19.2349 88.6913 19.1074 88.4148 18.8524C88.1384 18.5974 88 18.2864 88 17.9196C88 17.5109 88.1647 17.179 88.4943 16.9239C88.8238 16.6689 89.252 16.5415 89.7786 16.5415L90.1081 16.5467C89.7634 16.0751 89.591 15.6629 89.591 15.31C89.591 14.9467 89.7302 14.6375 90.0086 14.3825C90.287 14.1275 90.6251 14 91.0228 14C91.4281 14 91.7719 14.1283 92.054 14.3851C92.3362 14.6419 92.4773 14.9554 92.4773 15.3257C92.4773 15.6611 92.2841 16.0681 91.8978 16.5467C92.0947 16.5363 92.2254 16.531 92.2898 16.531C92.7861 16.531 93.1951 16.6603 93.517 16.9188C93.839 17.1773 94 17.5057 94 17.904C94 18.2603 93.858 18.573 93.5739 18.842C93.2898 19.1109 92.9603 19.2455 92.5852 19.2455C92.2633 19.2455 91.9887 19.1712 91.7614 19.0228C91.5342 18.8743 91.3163 18.6254 91.1079 18.2761C91.1079 18.7057 91.1298 19.0289 91.1733 19.2455C91.2169 19.462 91.3107 19.7118 91.4546 19.9948Z'
      fill='black'
    />
  </Svg>
);
