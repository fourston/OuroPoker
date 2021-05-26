import React, { FC } from 'react';
import { CheckBoxActiveIcon, CheckBoxDisabledIcon } from '../../helpers/icons';

interface IProps {
  active: boolean;
}
export const Checkboxs: FC<IProps> = ({ active }) => (active ? <CheckBoxActiveIcon /> : <CheckBoxDisabledIcon />);
