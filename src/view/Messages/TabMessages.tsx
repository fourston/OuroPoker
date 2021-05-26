import React, { FC, useState, useEffect, Fragment, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { IAplicationState } from '../../redux/reduser';
import { connect } from 'react-redux';
import { IUser, IChatMain, IChats, IChatsArrayItem, IChatSendUser } from '../../helpers/types';
import api from '../../api';
import { getChatUuid } from '../../redux/action';
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';
import {avatar} from '../../api';
import { getChat } from '../../redux/action';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');
import {getImage} from '../../helpers/resource';

interface IChatsItems {
  isActive: boolean;
  item: IChatMain
}

interface IMessageItemProps {
  messages: string;
  userSend: IChatSendUser;
}
const MessageItem: FC<IMessageItemProps> = ({ userSend, messages = '' }) => (
  <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20, paddingVertical: 5 }}>
    <Image source={{ uri: avatar(userSend.uuid) }} style={{ width: 40, height: 40 }} />
    <View style={{ justifyContent: 'space-between', flex: 1, minHeight: 40, marginLeft: 10 }}>
      <Text style={styles.textSM}>{userSend.nikName}</Text>
      <Text style={styles.textES}>{messages}</Text>
      <Text style={[styles.textES, styles.date]}>{moment(userSend.time).format('dd d/mm/YYYY, HH:mm:ss')}</Text>
    </View>
  </View>
);

interface IStateProps {
  user: IUser;
  chatMain: IChatMain[];
  chats: IChatsArrayItem[];
}
interface IDispatchProps {
  getChatUuid: (uuid: string) => void;
  getChats: () => void;
}
interface IProps extends IStateProps, IDispatchProps {
  navigations: NavigationScreenProp<NavigationRoute<NavigationParams>>;
}

const TabMessages: FC<IProps> = ({ chatMain, chats, getChatUuid, getChats, navigations }) => {
  let [activeChatIndex, setActiveChatIndex] = useState<string>(' ');
  let [value, setValue] = useState<string>(' ');
  let [loading, setLoading] = useState<boolean>(false);
  let scrollView = useRef(null);

  useEffect(()=>{
    getChats();
  }, []);

  useEffect(() => {
    const chatInterval = setInterval(() => {
      if (activeChatIndex !== ' ') {
        getChatUuid(activeChatIndex);
      } else {
        let uuid = navigations.getParam('uuid', ' ');
        console.log(uuid);
        chatMain.map((item) => {
          if (item.friend.uuid === uuid) {
            setActiveChatIndex(item.chatUuid);
          }
        });
      }
    }, 1000);
    return () => {
      if (chatInterval) {
        clearInterval(chatInterval);
      }
    };
  }, [activeChatIndex, chatMain]);

  const sendMessages = async () => {
    setLoading(true);
    api('profile', 'chats', activeChatIndex)
      .data({content: value})
      .post()
      .then((e) => {
        setValue('');
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setValue('');
      });
  };
  const chatMessages = () => chats.find((item) => item.id === activeChatIndex);

  const RenderChats: FC<IChatsItems> = ({isActive, item}) => {
    return (
      <TouchableOpacity
        style={[styles.item, isActive ? styles.activeItem : {}]}
        onPress={() => setActiveChatIndex(item.chatUuid)}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{ uri: avatar(item.friend.uuid) }} style={{ width: 42, height: 42 }} />
          <Text style={[styles.textLg, { marginLeft: 20 }]}>{item.titleChat}</Text>
        </View>

        {isActive && (
          <View>
            <TouchableOpacity
              onPress={() => navigations.navigate('AnotherProfile', { uuid: item.friend.uuid, backRoute: 'Messages' })}
              style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: 'auto' }}
            >
              <Image source={getImage('edit')} />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    )
  }

  return (
    <View style={[styles.flex, { flex: 1 }]}>
      <View style={styles.leftBar}>
        <LinearGradient colors={['#164080', '#3E66A1']} start={[0, 0.4]} end={[1, 0]} style={styles.gradiend} />
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          {chatMain.map((item, index) => {
            return (
              <RenderChats
                isActive={activeChatIndex === item.chatUuid}
                key={index}
                item={item}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 30 }}>
        {!chatMessages() && 
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {loading && <ActivityIndicator />}
            {!loading && 
              <Text style={styles.textES}>
                {(!chatMain || !chatMain.length) && 'Нет активных бесед'}
                {(!!chatMain && !!chatMain.length) && 'Выберите беседу'}
              </Text>
            }
          </View>
        }

        {!!chatMessages() && (
          <Fragment>
            <ScrollView ref={scrollView} style={{ backgroundColor: 'rgba(13, 35, 69, 0.8)', flex: 1, flexDirection: 'column' }}>
              {chatMessages() && chatMessages().chat.map((item, index) => <MessageItem messages={item.content} key={index} userSend={item.sendUser} />)}
            </ScrollView>
            <View style={styles.bottomInputContainer}>
              {/* <FilesIcon /> */}
              <TextInput
                disableFullscreenUI={true}
                value={value}
                onChangeText={setValue}
                placeholder={'Напишите сообщение'}
                placeholderTextColor={'#729FE1'}
                style={{ flex: 1 }}
                {...(Platform.OS == 'ios' ? {} : {disableFullscreenUI: true})}
              />
              <TouchableOpacity style={{ paddingHorizontal: 24, paddingVertical: 10 }} onPress={sendMessages}>
                <LinearGradient colors={['#5597FA', '#355D9C']} start={[1, 0]} end={[1, 1]} style={styles.gradiend} />
                <Text style={{ lineHeight: 10, fontSize: 10, color: '#FFFFFF' }}>Отправить</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = ({ chatMain, user, chats }: IAplicationState): IStateProps => ({
  chatMain,
  user,
  chats,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  getChatUuid: (uuid: string) => getChatUuid(uuid)(dispatch),
  getChats: () => getChat(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabMessages);

const styles = StyleSheet.create({
  gradiend: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  bottomInputContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 30,
    backgroundColor: 'white',
    paddingLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  activeItem: {
    backgroundColor: 'rgba(13, 35, 69, 0.8)',
  },
  leftBar: {
    width: 201,
    // backgroundColor: 'red',
    height: '100%',
    borderRightWidth: 1,
    borderRightColor: '#3E66A1',
  },
  textLg: {
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
  },
  textSM: {
    fontSize: 10,
    lineHeight: 10,
    color: '#5597FA',
    marginBottom: 5,
  },
  textES: {
    fontSize: 10,
    lineHeight: 10,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  date: {
    color: 'rgba(255, 255, 255, 0.4)'
  }
});
