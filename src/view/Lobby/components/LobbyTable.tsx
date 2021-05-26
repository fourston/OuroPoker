import React, { FC } from 'react';
import { ListRenderItemInfo, Dimensions, View, Image, StyleSheet } from 'react-native';
import { LobbyGamer, EmptyGamer } from './LobyGamer';
import {getImage} from '../../../helpers/resource';
import { Buttons } from '../../../component';
import { ILobbyTables } from '../../../helpers/types';

interface IListRenderItemInfo extends ListRenderItemInfo<ILobbyTables> {
  active: boolean;
  submit: (tableID: string) => void;
}
export const LobbyTable: FC<IListRenderItemInfo> = ({ item, index, active, submit }) => {
  // let { places } = item;

  let getPlaces = () => {
    let newPlaces = item.places;

    if (item.tableSize === 'FIVE') {
      let emptis = { placeNumber: 420, isPlayer: false };
      newPlaces.splice(1, 0, emptis);
      newPlaces.splice(3, 0, emptis);
      newPlaces.splice(5, 0, emptis);
      newPlaces.splice(8, 0, emptis);
      // console.log(newPlaces);
      return newPlaces;
    }
    return newPlaces;
  };
  let places = getPlaces();
  // let b = getPlaces();
  return (
    <View
      style={{
        flex: index,
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={{ width: 305, maxHeight: 200, height: 200, justifyContent: 'space-between', zIndex: 4 }}>
        <View style={[styles.group_start]}>
          {!!places[8] && places[8].uuid && places[8].name && places[8].balance ? (
            <LobbyGamer uuid={places[8].uuid} balance={places[8].balance} name={places[8].name} style={{ marginTop: 20 }} />
          ) : places[8].placeNumber === 420 ? (
            <View style={{ zIndex: 24 }} />
          ) : (
            <EmptyGamer placeNumber={8} style={{ marginTop: 26 }} />
          )}
          {!!places[7] && !!places[7].uuid && !!places[7].name && !!places[7].balance ? (
            <LobbyGamer uuid={places[7].uuid} balance={places[7].balance} name={places[7].name} />
          ) : (
            <EmptyGamer placeNumber={9} />
          )}
          {!!places[0] && !!places[0].uuid && !!places[0].name && !!places[0].balance ? (
            <LobbyGamer uuid={places[0].uuid} balance={places[0].balance} name={places[0].name} />
          ) : (
            <EmptyGamer placeNumber={1} />
          )}
          {!!places[1] && places[1].placeNumber === 420 ? (
            <View style={{ zIndex: 24 }} />
          ) : !!places[1] && places[1].uuid && places[1].name && places[1].balance ? (
            <LobbyGamer uuid={places[1].uuid} style={{ marginTop: 24 }} balance={places[1].balance} name={places[1].name} />
          ) : (
            <EmptyGamer placeNumber={2} style={{ marginTop: 24 }} />
          )}
        </View>
        <View style={[styles.flex_between, { height: '60%' }]}>
          {!!places[6] && places[6].uuid && places[6].name && places[6].balance ? (
            <LobbyGamer uuid={places[6].uuid} style={{ alignSelf: 'flex-start', marginTop: 10 }} balance={places[6].balance} name={places[6].name} />
          ) : (
            <EmptyGamer placeNumber={7} style={{ alignSelf: 'center' }} />
          )}
          {!!places[5] && places[5].uuid && places[5].name && places[5].balance ? (
            <LobbyGamer uuid={places[5].uuid} balance={places[5].balance} name={places[5].name} style={{ marginBottom: 8 }} />
          ) : places[5].placeNumber === 420 ? (
            <View style={{ height: 64, width: 42, zIndex: 24 }} />
          ) : (
            <EmptyGamer placeNumber={6} style={{ alignItems: 'flex-start', marginBottom: 10 }} />
          )}
          {!!places[4] && places[4].uuid && places[4].name && places[4].balance ? (
            <LobbyGamer uuid={places[4].uuid} balance={places[4].balance} name={places[4].name} style={{ marginTop: 20 }} />
          ) : (
            <EmptyGamer placeNumber={5} style={{ marginBottom: 10 }} />
          )}
          {!!places[3] && places[3].uuid && places[3].name && places[3].balance ? (
            <LobbyGamer uuid={places[3].uuid} balance={places[3].balance} name={places[3].name} style={{ marginBottom: 8 }} />
          ) : places[3].placeNumber === 420 ? (
            <View style={{ height: 64, width: 42, zIndex: 24 }} />
          ) : (
            <EmptyGamer placeNumber={4} style={{ marginBottom: 10 }} />
          )}
          {!!places[2] && places[2].uuid && places[2].name && places[2].balance ? (
            <LobbyGamer uuid={places[2].uuid} style={{ alignSelf: 'flex-start', marginTop: 10 }} balance={places[2].balance} name={places[2].name} />
          ) : (
            <EmptyGamer placeNumber={3} style={{ alignSelf: 'center', alignItems: 'flex-end' }} />
          )}
        </View>
        <Image source={getImage('table_lobby')} style={styles.table} />
        <Buttons text='Играть' variant='green' style={styles.button_g} onPress={() => submit(item.tableId)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  table: {
    width: 240,
    height: 114,
    position: 'absolute',
    top: 42,
    left: 33,
    zIndex: 1,
  },
  button_g: {
    width: 100,
    height: 30,
    position: 'absolute',
    top: 85,
    left: 100,
    borderRadius: 15,
    zIndex: 1200,
  },
  flex_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    zIndex: 2,
    paddingHorizontal: 8,
  },
  group_start: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 2,
  },
  text_small: {
    fontSize: 10,
    lineHeight: 12,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 4,
  },
});
