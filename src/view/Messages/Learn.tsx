import React, { FC, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Buttons } from '../../component';

let newsmMenu = [
  {
    name: 'Комбинации',
    title: 'Комбинации',
    desc: [
      {
        text: 'Покер - практически самая популярная карточная игра в мире!'
      },
      {
        title: 'Цель игры',
        text: 'Заполучить банк, который формируется из четырёх (или меньше) раундов торгов. \n Для сбора выигрышной комбинации всегда используется 5 карт. Ниже представлены покерные комбинации: они расположены в порядке убывания, от высшей к низшей.'
      },
      {
        title: 'Роял флеш',
        text: 'Стрит флеш, старшей картой которого является туз. Это сильнейшая комбинация в покере.'
      },
      {
        title: 'Стрит флеш',
        text: 'Пять карт одной масти, идущие по порядку. Среди двух стрит флешей выигравшими считается тот, у которого выше старшая карта.'
      },
      {
        title: 'Каре',
        text: 'Четыре карты одного достоинства. Из двух каре старшим считается то, в которое входят карты большего достоинства. Если каре соперников равны, победитель определяется по старшей пятой карте (кикеру).'
      },
      {
        title: 'Фул хаус',
        text: 'Комбинация, состоящая из сета и пары. При сравнении двух фулл хаусов старшинство определяется достоинством трех карт.'
      },
      {
        title: 'Флеш',
        text: 'Пять карт одной масти. При флеше карты не идут подряд — то есть не образуют последовательность по номиналу. Если несколько игроков собирают Флеш, то побеждает игрок с самой старшей картой соответствующей масти. Если старшая карта Флеша общая, то сравнивают следующую по старшинству карту. Если все общие карты, образующие флеш, превышают по номиналу карты игроков той же масти, а также если комбинация образована только общими картами, то происходит раздел банка.'
      },
      {
        title: 'Стрит',
        text: 'Пять карт разных мастей подряд по старшинству. Если игроки собрали Стрит, выигрывает тот, в чей комбинации последняя карта старше. При этом Туз может считаться как самой старшей картой в комбинации, так и самой младшей.'
      },
      {
        title: 'Сет',
        text: 'Три карты одного достоинства. Комбинация образуется из трех карт общего номинала и двух кикеров.'
      },
      {
        title: 'Две пары',
        text: 'Две карты одного достоинства и две карты другого достоинства. В нашем случае это два Туза и два Короля. Если оба игрока собрали комбинацию Две пары, то выигрывает тот, у кого есть пара старше.'
      },
      {
        title: 'Пара',
        text: 'Две карты одного достоинства. сли оба игрока собрали Пару, то их сравнивают по старшинству. Если же Пара одинаковая, то победитель определяется по старшинству каждого кикера. Если же одинаковые пары карманные (находятся в руке игрока) или все остальные общие карты на столе старше кикеров обоих игроков, происходит раздел банка.'
      }
    ]
  },
  {
    name: 'Ставки',
    title: 'Ставки',
    desc: [
      {
        title: 'Блайнды',
        text: 'Это ставка, которую игрок обязан сделать, до того, как он получит карты. Это так называемая "слепая" ставка, которая обязательна.'
      },
      {
        title: 'Анте',
        text: 'Принудительная ставка до начала раздачи, которую делает каждый из игроков, участвующий в игре.'
      },
      {
        title: 'Минимальное повышение ставки',
        text: 'Игрок не может повысить ставку на сумму, которая меньше размера большого блайнда.'
      },
      {
        title: 'Ва-банк',
        text: 'Если у Вас недостаточно фишек, чтобы уравнять ставку, вы можете поставить все, что у Вас осталось, т.е. пойти Ва-банк.'
      },
      {
        title: 'Разделение Банка',
        text: 'Если два или более игроков собрали равные комбинации, то банк делится между ними.'
      },
    ]
  },
  {
    name: 'Действия',
    title: 'Действия',
    desc: [
      {
        title: 'Уравнять',
        text: 'Если в текущем раунде была сделана ставка, игрок может уравнять её, добавив в банк такое же количество фишек, что и последний игрок.'
      },
      {
        title: 'Чек',
        text: 'Если в текущем раунде ставок нет, то игрок может пропустить свой ход.'
      },
      {
        title: 'Повысить',
        text: 'Игрок может увеличить действующий размер ставки.'
      },
      {
        title: 'Пас',
        text: 'Отказ от продолжения борьбы за банк.'
      },
    ]
  },
  {
    name: 'Раунды',
    title: 'Раунды',
    desc: [
      {
        title: 'Префлоп',
        text: 'Каждый игрок получает по две "карманные" карты. Торговля начинается с игрока, сидящего слева от большого блайнда. Игроки оценивают силу своих карт и делают ход.'
      },
      {
        title: 'Флоп',
        text: 'На стол выкладываются три общие карты. Теперь игроки могут составлять комбинации. Ставки во втором раунде начинаются с первого активного игрока, находящегося слева от дилера.'
      },
      {
        title: 'Терн',
        text: 'На стол выкладывается четвертая карта. Происходит ещё один раунд торгов.'
      },
      {
        title: 'nРивер',
        text: 'Это - последняя пятая карта на столе. Происходит ещё один раунд торгов. После чего происходит вскрытие.'
      },
    ]
  },
  {
    name: 'Вскрытие карт',
    title: 'Вскрытие карт',
    desc: [
      {
        title: 'Победитель',
        text: 'Один или несколько игроков, которые выиграли раздачу, обязательно показывают свои карманные пары.'
      },
      {
        title: 'Игрок пошел Ва-банк',
        text: 'Если игрок поставил все свои фишки, то есть пошёл ва-банк, и раздача завершилась шоудауном, то он показывает свои карманные карты, вне зависимости от исхода раздачи.\n Остальные игроки за столом обязательно показывают свои карманные карты, только если они уравняли ставку одного или нескольких игроков, которые пошли ва-банк и не делали других ставок.'
      },
    ]
  },
];

export const Learn: FC = () => {
  let [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={[styles.flex, { flex: 1 }]}>
      <View style={styles.leftBar}>
        <LinearGradient colors={['#164080', '#3E66A1']} start={[0, 0.4]} end={[1, 0]} style={styles.gradiend} />
        <ScrollView style={{ flex: 1, marginTop: 15 }}>
          {newsmMenu.map((item, index) => (
            <TouchableOpacity onPress={() => setActiveIndex(index)} style={[styles.item, activeIndex === index ? styles.activeItem : {}]} key={index}>
              <Text style={styles.textLg}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', backgroundColor: 'rgba(13, 35, 69, 0.8)' }}>
        <ScrollView style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 25, paddingVertical: 30 }}>
          <Text style={styles.textTitle}>{newsmMenu[activeIndex].title}</Text>
          {/* <Text style={styles.textDesc}>{newsmMenu[activeIndex].desc}</Text> */}
          <View>
            {newsmMenu[activeIndex].desc.map((item, i)  => (
              <React.Fragment key={`p${i}`}>
                {!!item.title && <Text style={styles.titleDesc}>{item.title}</Text>}
                <Text style={styles.textDesc}>{item.text}</Text>
              </React.Fragment>
            ))}
          </View>
          <View style={{ paddingBottom: 50 }}>{/* <Buttons text='Написать в поддержку' variant='default' style={{ marginRight: 'auto' }} /> */}</View>
        </ScrollView>
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
  },
  activeItem: {
    backgroundColor: 'rgba(13, 35, 69, 0.8)',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    paddingLeft: 20,
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
    // marginBottom: 4,
  },
  textTitle: {
    color: '#FFB443',
    // color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
    marginBottom: 10,
  },
  titleDesc: {
    color: '#FFB443',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 10,
  },
  textDesc: {
    color: '#FFFFFF',
    fontSize: 10,
    lineHeight: 14,
    marginBottom: 20,
  },
});
