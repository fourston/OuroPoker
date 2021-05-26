import React, { FC, useState } from 'react';
import { IUserFrend, complainType } from '../../../helpers/types';
import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native';
import { Buttons, SuccesFriendReques, FriendDelete, SuccesSendBills, Complain, SuccesСomplain } from '../../../component';
import api, {avatar} from '../../../api';
import { FriendDeleteSuccess } from '../../../component/ModalContainer/FriendDeleteSuccess';
import SendModal from './SendModal';
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';
interface IProps {
  friendInfo: IUserFrend;
  navigations: NavigationScreenProp<NavigationRoute<NavigationParams>>;
  getUser?: () => void;
}

export const FriendsView: FC<IProps> = ({ friendInfo, navigations, getUser }) => {
  const [isrequest, setRequest] = useState<boolean>(false);
  const [isDelete, setDelete] = useState<boolean>(false);
  const [isDeleteModal, setDeleteModal] = useState<boolean>(false);
  const [isModal, setModal] = useState<boolean>(false);
  const [isComplain, setComplain] = useState<boolean>(false);
  const [isSend, setSend] = useState<boolean>(false);
  const [isComplainSucces, setComplainSucces] = useState<boolean>(false);
  const createChat = async () => {
    
    api('profile', 'create_chats', friendInfo.uuid)
      .post()
      .then((e) => {
        navigations.navigate('Messages', { uuid: friendInfo.uuid });
      })
      .catch((e) => {
        navigations.navigate('Messages', { uuid: friendInfo.uuid });
        console.log(e, 'error');
      });
  };
  const sendFriendRequest = async () => {
    
    api('profile', 'request_friends', friendInfo.uuid)
      .post()
      .then((e) => {
        if (e.status === 200) {
          setRequest(true);
        }
      })
      .catch((e) => console.log(e, 'error'));
  };
  const sendComplain = async (complain: complainType) => {
    setComplain(false);
    
    const data = {
      complain: complain,
      text: '',
      uuidСomplainUser: friendInfo.uuid,
    };

    api('profile', 'complain_user')
      .data(data)
      .post()
      .then((e) => {
        if (e.status === 200) {
          setComplainSucces(true);
        }
      })
      .catch((e) => console.log(e, 'error'));
  };
  const sendFriendDelete = async () => {
    setDeleteModal(false);
    
    api('profile', 'delete_friend', friendInfo.uuid)
      .post()
      .then((e) => {
        if (e.status === 200) {
          setDelete(true);
        }
      })
      .catch((e) => console.log(e, 'error'));
  };

  const handleSubmit = () => {
    if (friendInfo.isFriend) {
      setDeleteModal(true);
    } else {
      sendFriendRequest();
    }
  };
  let sendCurensy = async (amount: number) => {
    
    api('crypto', 'transferred', friendInfo.uuid, amount)
      .post()
      .then((e) => {
        setModal(false);
        setSend(true);
        getUser();
      })
      .catch((e) => console.log(e, 'error'));
  };
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={{ marginRight: 20 }}>
          <Image
            source={{ uri: avatar(friendInfo.uuid) }}
            style={{ width: 60, height: 60, borderRadius: 8 }}
          />
        </View>
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
          <View style={styles.flex}>
            <Text style={styles.textSM}>{friendInfo.nikName}</Text>
            <Text style={[styles.textSM, { color: '#729FE1', marginLeft: 10 }]}>ID: {friendInfo.uuid}</Text>
          </View>
          {/* <Text style={styles.textSM}>30 000 OURO</Text>
          <Text style={styles.textSM}>500 000 PZM</Text> */}
        </View>
        <View style={{ marginLeft: 'auto' }}>{/* <Buttons text='Заблокировать' variant='orange' /> */}</View>
      </View>
      <View style={[styles.between]}>
        <Buttons disabled={friendInfo.blockingSendMessage} text='Сообщение' variant='default' style={{ marginRight: 'auto' }} onPress={() => createChat()} />
        <Buttons onPress={() => setModal(true)} text='Передать фишки' variant='default' disabled={!friendInfo.isFriend} style={{ marginRight: 'auto' }} />
        <Buttons
          disabled={!friendInfo.isFriend && friendInfo.blockingToFriend}
          text={friendInfo.isFriend ? 'Удалить из друзей' : 'Добавить в друзья'}
          onPress={handleSubmit}
          variant='green'
          style={{ marginRight: 'auto' }}
        />
        <Buttons text='Пожаловаться' variant='orange' style={{ marginRight: 'auto' }} onPress={() => setComplain(true)} />
        {/* <Buttons text='Пожаловаться' variant='yellow' /> */}
      </View>
      <View style={styles.between}>
        <View>
          <Text style={styles.yellowText}>Сыграно игр</Text>
          <Text style={styles.textMD}>{friendInfo.countGames}</Text>
        </View>
        <View>
          <Text style={styles.yellowText}>Лучшие выигрыши</Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={styles.textMD}>{friendInfo.bestWins[0].win}</Text>
            <Text style={[styles.textMD, { color: '#729FE1' }]}> {friendInfo.bestWins[0].currency}</Text>
          </View>
        </View>
        <View></View>
      </View>
      <SuccesFriendReques open={isrequest} onCancel={() => setRequest(false)} friend={friendInfo} />
      <FriendDelete onDelete={sendFriendDelete} open={isDeleteModal} onCancel={() => setDeleteModal(false)} friend={friendInfo} />
      <FriendDeleteSuccess open={isDelete} onCancel={() => setDelete(false)} friend={friendInfo} />
      <SendModal submit={sendCurensy} isOpen={isModal} onCancel={() => setModal(false)} />
      <SuccesSendBills friend={friendInfo} open={isSend} onCancel={() => setSend(false)} />
      <Complain onSubmit={sendComplain} friend={friendInfo} open={isComplain} onCancel={() => setComplain(false)} />
      <SuccesСomplain open={isComplainSucces} friend={friendInfo} onCancel={() => setComplainSucces(false)} />
    </View>
  );
};
const styles = StyleSheet.create({
  between: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(13, 35, 69, 0.8)',
    display: 'flex',
    padding: 20,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  textMD: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 22,
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
