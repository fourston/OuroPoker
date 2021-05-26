import React, { FC, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { IUserFrend } from '../../helpers/types';
import { FriendsView } from './components/FriendsView';
import { friendsActions } from '../../redux/action/freinds';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { IAplicationState } from '../../redux/reduser';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/action/userActions';
import {avatar} from '../../api';

interface IStateProps {
  friends: IUserFrend[];
}
interface IDispatchProps {
  getFriends: () => void;
  getUser: () => void;
}
interface IProps extends NavigationInjectedProps, IStateProps, IDispatchProps {}

const TabFriends: FC<IProps> = ({ friends, getFriends, navigation, getUser }) => {
  const [uuid, setUuid] = useState<string>('');
  const getSelectFreind = () => {
    if (uuid) {
      return friends.find((item) => item.uuid === uuid);
    } else {
      return friends ? friends[0] : undefined;
    }
  };

  useEffect(() => {
    getFriends();
  }, []);
  const getMyUser = () => {
    getUser();
  };
  return (
    <View style={[styles.flex, { flex: 1 }]}>
      <View style={{ width: 201, backgroundColor: 'red', height: '100%', borderRightWidth: 1, borderRightColor: '#3E66A1', paddingTop: 10 }}>
        <LinearGradient colors={['#164080', '#3E66A1']} start={[0, 0.4]} end={[1, 0]} style={styles.gradiend} />
        <ScrollView style={{ flex: 1 }}>
          {friends.map((item, index) => (
            <TouchableOpacity
              style={[styles.frendContainer, { backgroundColor: item.uuid === uuid ? 'rgba(13, 35, 69, 0.8)' : 'transparent' }]}
              key={index}
              onPress={() => setUuid(item.uuid)}
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
      {!!getSelectFreind() ? (
        <FriendsView getUser={getMyUser} navigations={navigation} friendInfo={getSelectFreind()} />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(13, 35, 69, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
          }}
        ></View>
      )}
    </View>
  );
};

const mapStateToProps = ({ friends }: IAplicationState): IStateProps => ({
  friends,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  getFriends: () => friendsActions.get(dispatch),
  getUser: () => dispatch(getUserInfo()),
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(TabFriends));

const styles = StyleSheet.create({
  between: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gradiend: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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

  textGrey: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 10,
    lineHeight: 10,
  },
  textMD: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 22,
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
  yellowText: {
    color: '#FFB443',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
    marginBottom: 20,
  },
});
