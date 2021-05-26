import React, { FC } from 'react';

import {
  LeftIcon,
  MessagesIcon,
  NewsIconSvg,
  RightIcon,
  SettingIcon,
  BillIcon,
  CardsIcon,
  ChIcon,
  CheckBoxActiveIcon,
  CheckBoxDisabledIcon,
  ChipIcon,
  CloseIcon,
  CombinationIcon,
  DilerIcon,
  FilesIcon,
  FriendsIcon,
  FullAAIcon,
  FullABIcon,
  FullACIcon,
  FullADIcon,
  FullAIcon,
  FullBBIcon,
  FullCCIcon,
  FullCIcon,
  FullDIcon,
  HelpIcon,
  AK,
  Ab,
  Ap,
  As,
  B10,
  B2,
  B3,
  B4,
  B5,
  B6,
  B7,
  B8,
  B9,
  JK,
  Jb,
  Jp,
  Js,
  K10,
  K2,
  K3,
  K4,
  K5,
  K6,
  K7,
  K8,
  K9,
  KK,
  Kb,
  Kp,
  Ks,
  P10,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
  P9,
  Qb,
  Qk,
  Qp,
  Qs,
  S10,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
  S8,
  S9,
} from './icon';
import { ISvgProps } from './types';

interface ICardsIcons {
  SPADES: {
    [key: string]: FC<ISvgProps>;
  };
  CLUBS: {
    [key: string]: FC<ISvgProps>;
  };
  HEARTS: {
    [key: string]: FC<ISvgProps>;
  };
  DIAMONDS: {
    [key: string]: FC<ISvgProps>;
  };
}
export const PokerCard: ICardsIcons = {
  SPADES: {
    KING: (props) => <Kp {...props} />,
    QUEEN: (props) => <Qp {...props} />,
    JACK: (props) => <Jp {...props} />,
    ACE: (props) => <Ap {...props} />,
    2: (props) => <P2 {...props} />,
    3: (props) => <P3 {...props} />,
    4: (props) => <P4 {...props} />,
    5: (props) => <P5 {...props} />,
    6: (props) => <P6 {...props} />,
    7: (props) => <P7 {...props} />,
    8: (props) => <P8 {...props} />,
    9: (props) => <P9 {...props} />,
    10: (props) => <P10 {...props} />,
  },
  HEARTS: {
    KING: (props) => <Ks {...props} />,
    QUEEN: (props) => <Qs {...props} />,
    JACK: (props) => <Js {...props} />,
    ACE: (props) => <As {...props} />,
    2: (props) => <S2 {...props} />,
    3: (props) => <S3 {...props} />,
    4: (props) => <S4 {...props} />,
    5: (props) => <S5 {...props} />,
    6: (props) => <S6 {...props} />,
    7: (props) => <S7 {...props} />,
    8: (props) => <S8 {...props} />,
    9: (props) => <S9 {...props} />,
    10: (props) => <S10 {...props} />,
  },
  DIAMONDS: {
    KING: (props) => <Kb {...props} />,
    QUEEN: (props) => <Qb {...props} />,
    JACK: (props) => <Jb {...props} />,
    ACE: (props) => <Ab {...props} />,
    2: (props) => <B2 {...props} />,
    3: (props) => <B3 {...props} />,
    4: (props) => <B4 {...props} />,
    5: (props) => <B5 {...props} />,
    6: (props) => <B6 {...props} />,
    7: (props) => <B7 {...props} />,
    8: (props) => <B8 {...props} />,
    9: (props) => <B9 {...props} />,
    10: (props) => <B10 {...props} />,
  },
  CLUBS: {
    KING: (props) => <KK {...props} />,
    QUEEN: (props) => <Qk {...props} />,
    JACK: (props) => <JK {...props} />,
    ACE: (props) => <AK {...props} />,
    2: (props) => <K2 {...props} />,
    3: (props) => <K3 {...props} />,
    4: (props) => <K4 {...props} />,
    5: (props) => <K5 {...props} />,
    6: (props) => <K6 {...props} />,
    7: (props) => <K7 {...props} />,
    8: (props) => <K8 {...props} />,
    9: (props) => <K9 {...props} />,
    10: (props) => <K10 {...props} />,
  },
};

export {
  LeftIcon,
  MessagesIcon,
  NewsIconSvg,
  RightIcon,
  SettingIcon,
  BillIcon,
  CardsIcon,
  ChIcon,
  CheckBoxActiveIcon,
  CheckBoxDisabledIcon,
  ChipIcon,
  CloseIcon,
  CombinationIcon,
  DilerIcon,
  FilesIcon,
  FriendsIcon,
  FullAAIcon,
  FullABIcon,
  FullACIcon,
  FullADIcon,
  FullAIcon,
  FullBBIcon,
  FullCCIcon,
  FullCIcon,
  FullDIcon,
  HelpIcon,
};