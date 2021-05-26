import React, { FC } from 'react';
import { Modal, View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { CloseIcon } from '../../helpers/icons';
import { IHistory } from '../../helpers/types';
import { PokerCards } from '../PokerCards/PokerCards';
import {avatar} from '../../api';

interface IProps {
  onCancel: () => void;
  open: boolean;
  history: IHistory[];
  // onDelete: () => void;
}

export const HistoryModal: FC<IProps> = ({ open, onCancel, history }) => {
  return (
    <Modal animationType='slide' transparent visible={open} supportedOrientations={['landscape']} onRequestClose={() => {}}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={{ backgroundColor: 'rgba(13, 35, 69, 0.6)', flex: 1, display: 'flex' }}>
          <TouchableOpacity style={styles.modalBody}>
            <TouchableOpacity style={{ position: 'absolute', top: 18, right: 18 }} onPress={() => onCancel()}>
              <CloseIcon />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
              <Text style={styles.textSM}>История раздач</Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 10,
              }}
            >
              <View style={{ flex: 2 }}>
                <Text>Время</Text>
              </View>
              <View style={{ flex: 4 }}>
                <Text>Победитель</Text>
              </View>
              <View style={{ flex: 5 }}>
                <Text>Карты</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text>Банк</Text>
              </View>
            </View>
            {!!history && history.length > 0 ? (
              <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                  {history.map((item, index) => {
                    return (
                      <View key={index} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                        <View style={{ flex: 2 }}>
                          <Text style={styles.textSmall}>{item.time}</Text>
                        </View>
                        <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
                          <Image
                            source={{ uri: avatar(item.uuid)}}
                            style={{ width: 40, height: 40, marginRight: 10, borderRadius: 8 }}
                          />
                          <Text style={[styles.textSmall, { maxWidth: 40 }]} numberOfLines={1}>
                            {item.name}
                          </Text>
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                          {item.cards.map((item, index) => (
                            <PokerCards key={index} width={20} height={30} suit={item.suit} rank={item.rank} />
                          ))}
                          <View style={{ width: 8 }} />
                          {item.deskCards.map((item, index) => (
                            <PokerCards key={index} width={20} height={30} suit={item.suit} rank={item.rank} />
                          ))}
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                          <Text style={styles.textSmall}>{item.pot}</Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            ) : (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>История пуста</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(13, 35, 69, 0.8)',
    display: 'flex',
    padding: 20,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  modalBody: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '80%',
    height: '90%',
    paddingHorizontal: 20,
    backgroundColor: '#3E66A1',
    borderRadius: 8,
    paddingTop: 18,
    position: 'relative',
    overflow: 'hidden',
  },
  textSmall: {
    color: '#FFFFFF',
    fontSize: 10,
    lineHeight: 12,
  },
  textMD: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
    marginBottom: 6,
  },
  textSM: {
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
});
