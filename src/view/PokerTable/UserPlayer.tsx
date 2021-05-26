import React, { FC, useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import {
    ChipRate,
    PokerCards,
    AnimationFlop,
    AnimatedBank,
    AnimateChip,
    AnimatedFold,
    AnimatedCard,
    Dilers,
} from '../../component';
import { IGamesPlayer, IGameRound, IGamesPlayerStatus } from '../../helpers/types';
import { actionsText } from '../../helpers/actions';
import { chipRateStyles, dilerStyles } from '../../helpers/playerStyles';
import playSound from '../../sound';
import { avatar } from '../../api';

interface IProps {
    style?: StyleProp<ViewStyle>;
    player: IGamesPlayer;
    tableSize: number;
    placeNumber: number;
    changeRound: boolean;
    round: IGameRound;
}
export const UserPlayer: FC<IProps> = ({
    style,
    player,
    placeNumber,
    tableSize,
    changeRound,
    round,
}) => {
    let [animatedChip, setAnimatedChip] = useState<boolean>(changeRound);
    let [statuses, setUserStatuses] = useState<IGamesPlayerStatus>(
        player ? player.status : 'NOT_MOVED',
    );

    useEffect(() => {
        if (round === 'PRE_FLOP') {
            playSound('cards');
        }
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
        if (player && player.isMovePlayer) {
            playSound('my_turn');
        }
        if (changeRound && player && !!player.previousPot && player.previousPot > 0) {
            setAnimatedChip(true);
            playSound('fishki_to_bank');
        }
    }, [changeRound, player, round]);

    return (
        <View
            style={[
                styles.container,
                style,
                {
                    marginBottom:
                        placeNumber === 0 || placeNumber === 1 || placeNumber === 8 ? 42 : 0,
                },
            ]}
        >
            <View
                style={[
                    styles.box,
                    player && player.isReward ? { borderWidth: 2, borderColor: 'gold' } : {},
                ]}
            >
                {!!player && !!player.isMovePlayer && <AnimationFlop />}
                <View
                    style={{
                        height: 17,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text numberOfLines={1} style={styles.gamerTitle}>
                        {player && actionsText(player.status)
                            ? actionsText(player.status)
                            : player.name}
                    </Text>
                    <View style={styles.countContainer}>
                        <Text style={styles.ganerCount}>{player.balance}</Text>
                    </View>
                </View>
                <Image source={{ uri: avatar(player.uuid) }} style={styles.userImage} />
            </View>
            <View style={{ display: 'flex', marginLeft: 6 }}>
                {player.isReward && (
                    <AnimatedBank placeNumber={placeNumber} tableSize={tableSize}>
                        {!!player.win && <ChipRate count={player.win} />}
                    </AnimatedBank>
                )}
                {player.state === 'PLAYING' && animatedChip && (
                    <AnimateChip
                        placeNumber={placeNumber}
                        tableSize={tableSize}
                        onFinish={() => setAnimatedChip(false)}
                    />
                )}
                {!!player.pot && (
                    <ChipRate
                        count={player.pot}
                        style={[{ marginBottom: 6 }, chipRateStyles(placeNumber, tableSize)]}
                    />
                )}
                {round === 'PRE_FLOP' && (
                    <AnimatedCard placeNumber={placeNumber} tableSize={tableSize} />
                )}
                {player.status === 'FOLD' && (
                    <AnimatedFold placeNumber={placeNumber} tableSize={tableSize} />
                )}
                {player.cards && player.status !== 'FOLD' && (
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <PokerCards
                            rank={player.cards[0].rank}
                            suit={player.cards[0].suit}
                            width={41}
                            height={59}
                        />
                        <View style={styles.cardRotate}>
                            <PokerCards
                                rank={player.cards[1].rank}
                                suit={player.cards[1].suit}
                                width={41}
                                height={59}
                            />
                        </View>
                    </View>
                )}
                {player.isDealer && <Dilers style={dilerStyles(placeNumber)} />}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 85,
        height: 94,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 224,
        marginRight: 10,
        zIndex: 44,
    },
    box: {
        width: 64,
        height: 94,
        borderRadius: 6,
        paddingTop: 7,
        position: 'relative',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        overflow: 'hidden',
    },
    userImage: {
        width: 50,
        height: 60,
        borderRadius: 8,
        marginTop: 5,
    },
    gamerTitle: {
        fontSize: 10,
        lineHeight: 12,
        color: '#FFEC43',
    },
    countContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3,
    },
    ganerCount: {
        fontSize: 10,
        lineHeight: 12,
        color: '#FFFFFF',
    },
    cardRotate: {
        transform: [{ rotate: '10deg' }],
        marginLeft: -10,
        marginTop: 2,
        backgroundColor: 'white',
        height: 45,
    },
});
