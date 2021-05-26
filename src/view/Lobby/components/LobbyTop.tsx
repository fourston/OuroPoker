import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Buttons } from '../../../component';
import { sizeType, commands } from '../../../helpers/actions';

interface IProps {
  onPressCancel?: () => void;
  sendCommand: (command: string) => void;
}
export const LobbyTop: FC<IProps> = ({ onPressCancel, sendCommand }) => {
  const [size, setSize] = useState<sizeType | 'NONE'>('NONE');
  const [isFull, setIsFull] = useState<boolean>(false);
  const changeSize = () => {
    switch (size) {
      case 'NONE':
        setSize('NINE');
        postComand(isFull, 'NINE');
        break;
      case 'NINE':
        setSize('FIVE');
        postComand(isFull, 'FIVE');
        break;
      case 'FIVE':
        postComand(isFull);
        setSize('NONE');
        break;
    }
  };
  const postComand = (isFull: boolean, size?: sizeType) => {
    sendCommand(commands.getLobbyFillter(isFull, size));
  };
  const changeIsFull = () => {
    setIsFull(!isFull);
    postComand(!isFull, size !== 'NONE' ? size : undefined);
  };
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
      {/* <Buttons text='Валюта PZM' variant='default' style={{ minWidth: 100, marginRight: 6 }} /> */}
      <Buttons
        text={`Кол-во мест ${size === 'NINE' ? 9 : size === 'FIVE' ? 5 : 'Любое'}`}
        variant='default'
        style={{ minWidth: 100, marginRight: 6 }}
        onPress={changeSize}
      />
      <Buttons text={isFull ? 'Свободные столы' : 'Все столы'} variant='default' style={{ minWidth: 100, marginRight: 6 }} onPress={changeIsFull} />
      <Buttons text='Назад ' variant='default' style={{ minWidth: 100 }} onPress={onPressCancel} />
    </View>
  );
};
