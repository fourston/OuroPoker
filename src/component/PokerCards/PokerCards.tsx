import React, { FC } from 'react';
import { ICards } from '../../helpers/types';
import { PokerCard } from '../../helpers/icons';
interface IProps extends ICards {
  width?: number;
  height?: number;
}

export const PokerCards: FC<IProps> = ({ rank, suit, height, width }) => {
  const Card = PokerCard[suit][rank];
  return <Card height={height} width={width} />;
};
