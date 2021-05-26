import React, { FC, useState, useEffect } from 'react';
import {getImage} from '../../../helpers/resource';
import { View, Text, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../../api';
import { IAuth } from '../../../redux/types';

interface IProps {
  logOut: () => void;
  navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>;
  auth: IAuth.Reduser;
}

export const MenuCard: FC<IProps> = ({ logOut, navigation, auth }) => {
  let [online, setOnline] = useState<number>(0);

  const getOnline = async () => {
    api('engine', 'players')
      .get()
      .then((e) => {
        setOnline(e.data);
      })
      .catch((e) => {});
  };

  useEffect(() => {
    getOnline();
  }, []);
  const toScreen = (path: string, params?: any) => {
    if (auth && auth.token) {
      navigation.navigate(path, params);
    }
  };
  return (
    <View style={{ flex: 7, paddingBottom: 20 }}>
      <Text style={styles.textMenuCard}> Игроков онлайн: {online}</Text>
      <View style={styles.container}>
        <View style={styles.flex}>
          <TouchableOpacity style={[styles.firstCard]} onPress={() => toScreen('Game', { toPlay: true })}>
            <LinearGradient colors={['rgba(117, 166, 39, 1)', '#BEF566']} start={[0, 0.8]} end={[1, 1]} style={styles.gradiend} />
            <Image source={getImage('game')} />
            <Text style={styles.textLg}>Играть</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.firstCard, {}]} onPress={() => toScreen('Game')}>
            <LinearGradient colors={['rgba(208, 134, 23, 1)', '#FFD28D']} start={[0, 0.4]} end={[1, 1]} style={styles.gradiend} />
            <Image source={getImage('card')} />
            <Text style={styles.textLg}>Лобби</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contanterTwo}>
          <TouchableOpacity style={styles.item} onPress={() => toScreen('Bills')}>
            <Image source={getImage('bg_card')} resizeMode='cover' style={styles.bgImage} />
            <View style={styles.itemContainer}>
              <Image source={getImage('bitcoin')} style={styles.marginBottom} />
              <Text style={styles.itemText}>Мой счет</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={logOut}>
            {auth && auth.token ? (
              <>
                <Image source={getImage('bg_card')} resizeMode='cover' style={styles.bgImage} />
                <View style={styles.itemContainer}>
                  <Image source={getImage('logout')} style={styles.marginBottom} />
                  <Text style={styles.itemText}>Выйти</Text>
                </View>
              </>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(62, 102, 161, 0.8)',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  textMenuCard: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 6,
    textAlign: 'right',
  },
  marginBottom: {
    marginBottom: 6,
  },
  firstCard: {
    flex: 1,
    marginRight: 8,
    marginLeft: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    paddingBottom: 12,
    borderRadius: 4,
    overflow: 'hidden',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  textLg: {
    color: '#FFF',
    fontSize: 18,
    lineHeight: 22,
    marginTop: 4,
  },
  contanterTwo: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  item: {
    flex: 1,
    marginVertical: 7,
    marginBottom: 10,
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  },
  itemContainer: {
    paddingBottom: 12,
    paddingTop: 17,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  itemText: {
    fontSize: 10,
    lineHeight: 12,
    color: '#729FE1',
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    overflow: 'hidden',
    height: '100%',
    borderRadius: 4,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  gradiend: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: 'hidden',
  },
});
