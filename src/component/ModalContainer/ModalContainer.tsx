import React, { FC } from 'react';
import { Modal, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { CloseIcon } from '../../helpers/icons';
interface IProps {
  onCancel?: () => void;
  open: boolean;
}
export const ModalContainer: FC<IProps> = ({ children, onCancel, open }) => {
  return (
    <Modal transparent visible={open} supportedOrientations={['landscape']}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={{ backgroundColor: 'rgba(13, 35, 69, 0.6)', flex: 1, display: 'flex' }}>
          <View
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 'auto',
              marginBottom: 'auto',
              width: 320,
              backgroundColor: '#3E66A1',
              borderRadius: 8,
              paddingTop: 18,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <TouchableOpacity style={{ position: 'absolute', top: 18, right: 18, zIndex: 100 }} onPress={onCancel}>
              <CloseIcon />
            </TouchableOpacity>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
