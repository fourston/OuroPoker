import React, { FC, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Buttons } from '../../component';
import api, {avatar} from '../../api';
import { IUserFrend } from '../../helpers/types';

export const Invitations: FC = () => {
  const [uuid, setUuid] = useState<string>('');
  const [freindsData, setFreindsData] = useState<IUserFrend[]>([]);
  const sendRequest = async (type: 'accept' | 'reset') => {

    api('profile', 'friend', type, uuid)
      .post()
      .then((e) => {
        getFrends();
      })
      .catch((e) => console.log(e, 'error'));
  };
  const getFrends = async () => {

    api('profile', 'invites')
      .get()
      .then((e) => {
        // console.log(e.data);
        setFreindsData(e.data);
      })
      .catch((e) => console.log(e, 'catch getFrends'));
  };
  useEffect(() => {
    getFrends();
    return () => {};
  }, []);

  const getSelectFreind = () => {
    return freindsData.find((item) => item.uuid === uuid);
  };
  return (
    <View style={[styles.flex, { flex: 1 }]}>
      <View style={{ width: 201, backgroundColor: 'red', height: '100%', borderRightWidth: 1, borderRightColor: '#3E66A1', paddingTop: 10 }}>
        <LinearGradient colors={['#164080', '#3E66A1']} start={[0, 0.4]} end={[1, 0]} style={styles.gradiend} />
        <ScrollView style={{ flex: 1 }}>
          {freindsData.map((item, index) => (
            <TouchableOpacity
              onPress={() => setUuid(item.uuid)}
              style={[styles.frendContainer, { backgroundColor: item.uuid === uuid ? 'rgba(13, 35, 69, 0.8)' : 'transparent' }]}
              key={index}
            >
              <Image source={{ uri: avatar(item.uuid) }} style={{ width: 42, height: 42, borderRadius: 4 }} />
              <View style={{ marginLeft: 20 }}>
                <Text style={[styles.textLg, { marginBottom: 6 }]}>{item.nikName}</Text>
                {/* <Text style={styles.textGrey}>{'2 дня назад'}</Text> */}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(13, 35, 69, 0.8)',
          display: 'flex',
          padding: 20,
          justifyContent: 'space-between',
        }}
      >
        {!!getSelectFreind() ? (
          <>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ marginRight: 20 }}>
                <Image source={{ uri: avatar(getSelectFreind().uuid) }} style={{ width: 60, height: 60 }} />
              </View>
              <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                <View style={styles.flex}>
                  <Text style={styles.textSM}>{getSelectFreind().nikName}</Text>
                  <Text style={[styles.textSM, { color: '#729FE1', marginLeft: 10 }]}>ID: 2873334465</Text>
                </View>
                <Text style={styles.textSM}>{getSelectFreind().bestWins[0].win} OURO</Text>
              </View>
            </View>
            <View style={[styles.flex]}>
              <Buttons text='Принять' variant='green' style={{ marginRight: 10 }} onPress={() => sendRequest('accept')} />
              <Buttons text='Отклонить' variant='orange' onPress={() => sendRequest('reset')} />
            </View>
            <View style={styles.between}>
              <View>
                <Text style={styles.yellowText}>Сыграно игр</Text>
                <Text style={styles.textMD}>3167</Text>
              </View>
              <View>
                <Text style={styles.yellowText}>Лучшие выигрыши</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text style={styles.textMD}> {getSelectFreind().bestWins[0].win} </Text>
                  <Text style={[styles.textMD, { color: '#729FE1' }]}> {getSelectFreind().bestWins[0].currency}</Text>
                </View>
              </View>
              <View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 'auto' }}></View>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradiend: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  between: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frendContainer: {
    paddingVertical: 5,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    margin: 20,
    flex: 1,
    zIndex: 2,
  },
  textGrey: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 10,
    lineHeight: 10,
  },
  textLg: {
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
  },
  textSM: {
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  textMD: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 22,
  },
  yellowText: {
    color: '#FFB443',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
    marginBottom: 20,
  },
});
