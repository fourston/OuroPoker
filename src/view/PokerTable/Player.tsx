import React, { FC, useState, useEffect, Fragment } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TouchableOpacity,
} from 'react-native';
import { IGamePlaces, IGameRound, IGamesPlayerStatus } from '../../helpers/types';
import {
    AnimationFlop,
    ChipRate,
    Dilers,
    AnimatedCard,
    PokerCards,
    AnimateChip,
    AnimatedBank,
    AnimatedFold,
    RedCards,
} from '../../component';
import { actionsText } from '../../helpers/actions';
import {
    styleNumber,
    chipRateStyles,
    dilerStyles,
    chipAnimateStyles,
} from '../../helpers/playerStyles';
import playSound from '../../sound';
interface IProps {
    style?: StyleProp<ViewStyle>;
    place?: IGamePlaces;
    placeNumber: number;
    playerSeat: boolean;
    tableSize: number;
    seatDown: (placeNumber) => void;
    changeRound: boolean;
    round: IGameRound;
}
import { avatar } from '../../api';

export const Player: FC<IProps> = ({
    changeRound,
    tableSize,
    style,
    place,
    placeNumber,
    playerSeat,
    seatDown,
    round,
}) => {
    let player = place ? place.player : null;
    let [animatedChip, setAnimatedChip] = useState<boolean>(changeRound);
    let [statuses, setUserStatuses] = useState<IGamesPlayerStatus>(
        player ? player.status : 'NOT_MOVED',
    );

    useEffect(() => {
        if (player && player.status !== statuses) {
            switch (player.status) {
                case 'CALL': {
                    playSound('rise');
                    break;
                }
                case 'FOLD': {
                    playSound('pass');
                    break;
                }
                case 'CHECK': {
                    playSound('check');
                    break;
                }
                case 'RAISE': {
                    playSound('rise');
                    break;
                }
                case 'BET': {
                    playSound('rise');
                    break;
                }
                case 'ALL_IN': {
                    playSound('rise');
                    break;
                }
            }
            setUserStatuses(player.status);
        }
        if (!!player && changeRound && !!player.previousPot && player.previousPot > 0) {
            setAnimatedChip(true);
        }
    }, [changeRound, place.player]);
    return place.placeNumber === 420 ? (
        <View style={[styles.container, style]}></View>
    ) : player ? (
        <View
            style={[
                styles.container,
                styleNumber(placeNumber, tableSize),
                style,
                {
                    marginBottom:
                        placeNumber === 0 || placeNumber === 1 || placeNumber === 8 ? 42 : 0,
                },
            ]}
        >
            {player.isReward && (
                <AnimatedBank placeNumber={placeNumber} tableSize={tableSize}>
                    {!!player.win && <ChipRate count={player.win} />}
                </AnimatedBank>
            )}
            {animatedChip && (
                <AnimateChip
                    placeNumber={placeNumber}
                    tableSize={tableSize}
                    onFinish={() => {
                        setAnimatedChip(false);
                    }}
                />
            )}
            {!!player.pot && (
                <ChipRate count={player.pot} style={chipRateStyles(placeNumber, tableSize)} />
            )}
            <View
                style={[
                    styles.box,
                    !!player && player.isReward ? { borderWidth: 2, borderColor: 'gold' } : {},
                ]}
            >
                {player.isMovePlayer && <AnimationFlop />}
                <View
                    style={{
                        height: 17,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text numberOfLines={1} style={styles.gamerTitle}>
                        {actionsText(player.status) ? actionsText(player.status) : player.name}
                    </Text>
                    <View style={styles.countContainer}>
                        <Text style={styles.ganerCount}>{player.balance}</Text>
                    </View>
                </View>
                {!!player.cards ? (
                    <View
                        style={{
                            alignSelf: 'flex-start',
                            flexDirection: 'row',
                            width: 50,
                            height: 60,
                        }}
                    >
                        {player.cards.map((item, index) => (
                            <PokerCards
                                rank={item.rank}
                                suit={item.suit}
                                key={index}
                                width={30}
                                height={60}
                            />
                        ))}
                    </View>
                ) : (
                    <Image
                        source={{
                            uri: avatar(`${player.uuid}?time=${placeNumber}`),
                        }}
                        style={styles.userImage}
                        resizeMode="contain"
                    />
                )}
            </View>
            {player.state === 'PLAYING' && round === 'PRE_FLOP' && player.status !== 'FOLD' ? (
                <Fragment>
                    {/* <View style={styles.image}></View> */}
                    <AnimatedCard placeNumber={placeNumber} tableSize={tableSize} />
                </Fragment>
            ) : player.status === 'FOLD' ? (
                <Fragment>
                    {/* <View style={styles.image}></View> */}
                    <AnimatedFold placeNumber={placeNumber} tableSize={tableSize} />
                </Fragment>
            ) : player.state === 'PLAYING' && !player.cards ? (
                <View
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: -20,
                    }}
                >
                    <RedCards />
                </View>
            ) : (
                <View style={styles.image}></View>
            )}
            {player.isDealer && <Dilers style={dilerStyles(placeNumber)} />}
        </View>
    ) : (
        <View
            style={[
                styleNumber(placeNumber, tableSize),
                styles.container,
                {
                    width: 75,
                    height: 84,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            ]}
        >
            {!playerSeat && (
                <TouchableOpacity
                    onPress={() => seatDown(place.placeNumber)}
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: ' rgba(13, 35, 69, 0.8)',
                        borderRadius: 8,
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 30,
                            textAlign: 'center',
                        }}
                    >
                        +
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        zIndex: 13,
        position: 'absolute',
    },
    box: {
        width: 64,
        height: 94,
        borderRadius: 4,
        paddingRight: 2,
        paddingLeft: 2,
        paddingTop: 7,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    userImage: { width: 50, height: 60, borderRadius: 8, marginTop: 5 },
    image: {
        marginLeft: 4,
        marginTop: 17,
        width: 16,
        height: 16,
        alignSelf: 'flex-start',
    },
    gamerTitle: {
        fontSize: 10,
        lineHeight: 12,
        marginBottom: 2,
        color: '#FFEC43',
    },
    countContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ganerCount: {
        fontSize: 10,
        lineHeight: 12,
        color: '#FFFFFF',
    },
});
