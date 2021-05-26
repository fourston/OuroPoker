import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { getImage } from '../../helpers/resource';
import { connect } from 'react-redux';
import { PokerCards, ChipRate, HistoryModal } from '../../component';
import { Player } from './Player';
import { UserPlayer } from './UserPlayer';
import { IGameType, IGamePlaces, IUser, IGamePlayerActions, IHistory } from '../../helpers/types';
import { PokerTableMenu } from './component/PokerTableMenu';
import { IAplicationState } from '../../redux/reduser';
import { commands } from '../../helpers/actions';
import { PokerTableBottomBar } from './component/PokerTableBottomBar';
import { SetModal } from '../Lobby/components';
import playSound from '../../sound';
import Wrapper from '../../component/Wrapper';

export let tableData: IGameType = {
    tableId: 'jfhgkhk',
    deskPot: 300,
    round: 'FLOP',
    deskCards: [
        {
            rank: 'KING',
            suit: 'SPADES',
        },
        {
            rank: '3',
            suit: 'HEARTS',
        },
        {
            rank: '8',
            suit: 'DIAMONDS',
        },
        {
            rank: 'ACE',
            suit: 'HEARTS',
        },
        {
            rank: 'ACE',
            suit: 'CLUBS',
        },
    ],
    places: [
        {
            placeNumber: 1,
            isPlayer: false,
            player: {
                pot: 10,
                state: 'PLAYING',
                balance: 0,
                uuid: 'b2868892-a332-4c43-9ab6-61331c955874',
                name: 'Player1weqeqweqeqweqweqweqweqweqweqweqweqweqweqwwwwwwweeeeeeeeeeeewqqqeeeqweqwe',
                status: 'NOT_MOVED',
                isDealer: true,
                isReward: false,
                win: 200,
                cards: [
                    {
                        rank: '2',
                        suit: 'DIAMONDS',
                    },
                    {
                        rank: '10',
                        suit: 'SPADES',
                    },
                ],
                isMovePlayer: true,
                actions: [
                    { range: { max: 1000, min: 300 }, type: 'BET' },
                    { range: { max: 1000, min: 300 }, type: 'CALL' },
                    { range: { max: 1000, min: 300 }, type: 'CHECK' },
                    { range: { max: 1000, min: 300 }, type: 'FOLD' },
                ],
            },
        },
        {
            placeNumber: 2,
            isPlayer: false,
            player: {
                state: 'PLAYING',
                pot: 10,
                balance: 0,
                uuid: 'b2868892-a332-4c43ad-9ab6-61331c955874',
                name: 'Player2',
                status: 'BET',
                isDealer: true,
                isMovePlayer: false,
            },
        },
        {
            placeNumber: 3,
            isPlayer: false,
            player: {
                pot: 10,
                state: 'PLAYING',

                balance: 0,
                uuid: 'b2868892-a332-4c43-9ab6-',
                name: 'Player3',
                status: 'ALL_IN',
                isDealer: true,
                isMovePlayer: false,
            },
        },
        {
            placeNumber: 4,
            isPlayer: false,
            player: {
                pot: 10,
                balance: 0,
                uuid: '01c4be8e-9bb4-4fda-bc73-c0c4e5c77934',
                name: 'Player3',
                state: 'PLAYING',

                status: 'BET',
                isDealer: true,
                isMovePlayer: false,
            },
        },
        {
            placeNumber: 5,
            isPlayer: false,
            player: {
                pot: 10,
                balance: 0,
                state: 'PLAYING',
                uuid: '01c4be8e-9bb4-4fda-bc73-c0c4e5c77934',
                name: 'Player3',
                status: 'ALL_IN',
                isDealer: true,
                isMovePlayer: false,
            },
        },
        {
            placeNumber: 6,
            isPlayer: false,
            player: {
                pot: 10,
                balance: 0,
                uuid: '01c4be8e-9bb4-4fda-bc73-c0c4e5c77934',
                name: 'Player3',
                state: 'PLAYING',

                status: 'ALL_IN',
                isDealer: true,
                isMovePlayer: false,
            },
        },
        {
            placeNumber: 7,
            isPlayer: false,
            player: {
                pot: 10,
                balance: 0,
                uuid: '01c4be8e-9bb4-4fda-bc73-c0c4e5c77934',
                name: 'Player3',
                status: 'ALL_IN',
                state: 'PLAYING',

                isDealer: true,
                isMovePlayer: false,
            },
        },
        {
            placeNumber: 8,
            isPlayer: false,
            player: {
                pot: 10,
                balance: 0,
                uuid: '01c4be8e-9bb4-4fda-bc73-c0c4e5c77934',
                name: 'Player3',
                state: 'PLAYING',
                status: 'ALL_IN',
                isDealer: true,
                isMovePlayer: false,
            },
        },
        {
            placeNumber: 9,
            isPlayer: false,
            player: {
                pot: 10,
                balance: 0,
                state: 'PLAYING',
                uuid: '01c4be8e-9bb4-4fda-bc73-c0c4e5c77934',
                name: 'Player3',
                status: 'ALL_IN',
                isDealer: true,
                isMovePlayer: false,
            },
        },
    ],
    status: 'START',
    event: {
        event: 'CHANGE_ROUND',
        message: 'RIVER game round started.',
    },
};
if (typeof TextEncoder !== 'function') {
    const TextEncodingPolyfill = require('text-encoding');
    TextEncoder = TextEncodingPolyfill.TextEncoder;
    TextDecoder = TextEncodingPolyfill.TextDecoder;
}
interface IStateProps {
    user: IUser;
}
interface IState {
    isModal: boolean;
    isSetDown: boolean;
    selectPlace: number;
    isHistory: boolean;
}

interface IProps extends IStateProps {
    game: IGameType;
    leaveTable: () => void;
    stendUp: () => void;
    sendCommand: (command: string) => void;
    history: IHistory[];
}

class PokerTable extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isModal: false,
            isSetDown: false,
            selectPlace: 0,
            isHistory: false,
        };
    }
    // getSeat = () => !!this.props.game.places.find((item) => item.isPlayer);

    filterPlacer = (): IGamePlaces[] => {
        let isIndex: number;
        let { user, game } = this.props;
        // let game = tableData;
        let userSeat = !!this.getUser();
        if (userSeat) {
            game.places.map((item, index) => {
                if (item.player && item.player.uuid === user.uuid) {
                    isIndex = index;
                }
            });

            let sortData = [
                ...game.places.slice(isIndex, game.places.length),
                ...game.places.slice(0, isIndex),
            ];
            if (sortData.length === 9) {
                return sortData;
            } else {
                let emptis = { placeNumber: 420, isPlayer: false };
                sortData.splice(2, 0, emptis);
                sortData.splice(4, 0, emptis);
                sortData.splice(5, 0, emptis);
                sortData.splice(7, 0, emptis);
                return sortData;
            }
        } else {
            if (game.places.length === 9) {
                return game.places;
            } else {
                let emptis = { placeNumber: 420, isPlayer: false };
                game.places.splice(2, 0, emptis);
                game.places.splice(4, 0, emptis);
                game.places.splice(5, 0, emptis);
                game.places.splice(7, 0, emptis);
                return game.places;
            }
        }
    };
    sendComand = (command: string) => () => {
        let { user, game } = this.props;
        // let game = tableData;

        let curentUser = game.places.find((item) => item.player && item.player.uuid === user.uuid);
        if (curentUser.player.isMovePlayer) {
            this.props.sendCommand(command);
        }
    };
    bottomBarComands = (action: IGamePlayerActions, amount?: number) => {
        let { game } = this.props;
        // let game = tableData;

        this.props.sendCommand(commands.actions(game.tableId, action, amount));
    };
    seatDown = (placeNumber: number) => {
        this.setState({ selectPlace: placeNumber, isSetDown: true });
    };
    joinTable = (amount: number) => {
        let { sendCommand, game } = this.props;
        // let game = tableData;

        let { selectPlace } = this.state;
        this.setState({ isSetDown: false });
        sendCommand(commands.setDown(game.tableId, selectPlace, amount));
    };
    getUser = () =>
        this.props.game.places.find(
            (item) => item.player && item.player.uuid === this.props.user.uuid,
        );

    render() {
        const { isModal, isSetDown, isHistory } = this.state;
        const { leaveTable, stendUp, history, game, user } = this.props;
        let filterPlacer = this.filterPlacer();
        let userData = this.getUser();
        let isSeat = !!userData;
        // let game = tableData;
        let ln = game.places.length;
        return (
            <Wrapper header={false} scroll={false}>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ isModal: true });
                    }}
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        padding: 10,
                        zIndex: 300,
                    }}
                >
                    <Image source={getImage('menu_btn')} />
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        overflow: 'hidden',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            width: 517,
                            height: 327,
                            position: 'relative',
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            source={ln === 9 ? getImage('tables') : getImage('tablesFive')}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                            }}
                        />
                        {filterPlacer.map((item, index) => {
                            if (index === 0 && item.player && item.player.uuid === user.uuid) {
                                return (
                                    <UserPlayer
                                        changeRound={game.event.event == 'CHANGE_ROUND'}
                                        placeNumber={index}
                                        tableSize={ln}
                                        key={index}
                                        player={filterPlacer[0].player}
                                        round={game.round}
                                    />
                                );
                            }
                            return (
                                <Player
                                    round={game.round}
                                    changeRound={game.event.event == 'CHANGE_ROUND'}
                                    tableSize={ln}
                                    key={index}
                                    seatDown={this.seatDown}
                                    playerSeat={isSeat}
                                    placeNumber={index}
                                    place={item}
                                />
                            );
                        })}

                        <TouchableOpacity style={styles.tablePotsContainer}>
                            {!!game.deskPot ? (
                                <ChipRate count={game.deskPot} style={{ marginBottom: 12 }} />
                            ) : (
                                <View
                                    style={{
                                        width: 40,
                                        height: 14,
                                        marginBottom: 12,
                                    }}
                                />
                            )}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    height: 46,
                                }}
                            >
                                {game.deskCards &&
                                    game.deskCards.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <PokerCards
                                                key={index}
                                                rank={item.rank}
                                                suit={item.suit}
                                                width={41}
                                                height={59}
                                            />
                                            <View style={{ width: 2 }} />
                                        </React.Fragment>
                                    ))}
                            </View>
                            <View
                                style={{
                                    height: 20,
                                    justifyContent: 'center',
                                    borderRadius: 2,
                                    width: 172,
                                    marginTop: 4,
                                }}
                            >
                                {/* <Text style={{ textAlign: 'center', fontSize: 10, lineHeight: 12, color: '#ffffff' }}>{'Две пары'}</Text> */}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <PokerTableBottomBar
                    actions={userData && userData.player ? userData.player.actions : undefined}
                    sendCommand={this.bottomBarComands}
                    playerSeat={isSeat}
                    isMovePlayer={
                        userData && userData.player ? userData.player.isMovePlayer : false
                    }
                    userState={userData && userData.player ? userData.player.state : 'NEW'}
                />
                <PokerTableMenu
                    toHistory={() => {
                        playSound('menu_click');
                        this.setState({
                            isModal: false,
                            isHistory: true,
                        });
                    }}
                    isOpen={isModal}
                    stendUp={() => {
                        playSound('menu_click');
                        this.setState({ isModal: false });
                        stendUp();
                    }}
                    leaveTable={() => {
                        playSound('menu_click');
                        this.setState({ isModal: false });
                        leaveTable();
                    }}
                    onCancel={() => this.setState({ isModal: false })}
                    status={game.round ? game.round : ''}
                />
                <HistoryModal
                    onCancel={() => this.setState({ isHistory: false })}
                    open={isHistory}
                    history={history}
                />
                <SetModal
                    submit={this.joinTable}
                    isOpen={isSetDown}
                    table={game}
                    onCancel={() => this.setState({ isSetDown: false })}
                />
            </Wrapper>
        );
    }
}

const styles = StyleSheet.create({
    tablePotsContainer: {
        position: 'absolute',
        top: 90,
        left: 97,
        right: 97,
        bottom: 97,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToProps = ({ user }: IAplicationState): IStateProps => ({
    user,
});
export default connect(mapStateToProps, {})(PokerTable);
