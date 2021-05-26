import React, { FC, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Buttons, CheckboxButton } from '../../../component';
import { MessagesIcon } from '../../../helpers/icons';
import { IGamerActions, IGamePlayerActions, IUserGameState } from '../../../helpers/types';
import { Combinations } from './Combinations';
import { BetRange } from './BetRange';
type activeType = 'CHECK' | 'CALL' | 'FOLD' | 'CHECK/FOLD' | 'NONE';
interface IProps {
    userState: IUserGameState;
    actions?: IGamerActions[];
    playerSeat: boolean;

    isMovePlayer: boolean;
    sendCommand: (action: IGamePlayerActions, amount?: number) => void;
}
export const PokerTableBottomBar: FC<IProps> = ({
    userState,
    actions,
    sendCommand,
    playerSeat,
    isMovePlayer,
}) => {
    const [active, setActive] = useState<activeType>('NONE');
    let betAction = !!actions ? actions.find((item) => item.type === 'BET') : undefined;
    let raiseAction = !!actions ? actions.find((item) => item.type === 'RAISE') : undefined;
    let callAction = !!actions ? actions.find((item) => item.type === 'CALL') : undefined;
    let checkAction = !!actions ? actions.find((item) => item.type === 'CHECK') : undefined;
    let foldAction = !!actions ? actions.find((item) => item.type === 'FOLD') : undefined;

    const handlSendCommand = (action: IGamePlayerActions, amount?: number) => () => {
        setActive('NONE');
        sendCommand(action, amount);
    };
    useEffect(() => {
        if (isMovePlayer && active !== 'NONE') {
            let callActions = !!actions ? actions.find((item) => item.type === 'CALL') : undefined;
            let checkActions = !!actions
                ? actions.find((item) => item.type === 'CHECK')
                : undefined;
            switch (active) {
                case 'FOLD': {
                    handlSendCommand('FOLD')();
                    break;
                }
                case 'CALL': {
                    if (!!callActions) {
                        handlSendCommand('CALL', callAction.range.call)();
                    }
                    break;
                }
                case 'CHECK/FOLD': {
                    if (!!checkActions) {
                        handlSendCommand('CHECK')();
                    } else {
                        handlSendCommand('FOLD')();
                    }
                    break;
                }
                case 'CHECK': {
                    if (!!checkActions) {
                        handlSendCommand('CHECK')();
                    }
                }
            }
        }
    }, [isMovePlayer]);
    const setActiveType = (type: activeType) => {
        if (active === type) {
            setActive('NONE');
        } else {
            setActive(type);
        }
    };
    const PrevCheck = () => (
        <>
            <CheckboxButton
                active={active === 'FOLD'}
                text="Пас"
                style={styles.btn}
                onPress={() => setActiveType('FOLD')}
            />
            <CheckboxButton
                active={active === 'CHECK'}
                text="Чек"
                style={styles.btn}
                onPress={() => setActiveType('CHECK')}
            />
            <CheckboxButton
                active={active === 'CHECK/FOLD'}
                text="Чек/Пас"
                style={styles.btn}
                onPress={() => setActiveType('CHECK/FOLD')}
            />
            <CheckboxButton
                active={active === 'CALL'}
                text="Уравнять любую"
                style={styles.btn}
                onPress={() => setActiveType('CALL')}
            />
        </>
    );
    const RenderMainBottom = () => (
        <>
            {!!foldAction ? (
                <Buttons
                    text="Пас"
                    variant="default"
                    style={{ flex: 1, marginRight: 5 }}
                    onPress={handlSendCommand('FOLD')}
                />
            ) : (
                <View style={styles.btn} />
            )}
            {!!checkAction ? (
                <Buttons
                    text="Чек"
                    variant="default"
                    style={{ flex: 1, marginRight: 5 }}
                    onPress={handlSendCommand('CHECK')}
                />
            ) : (
                <View style={styles.btn} />
            )}
            {!!callAction ? (
                <Buttons
                    text="Уравнять"
                    variant="default"
                    style={{ flex: 1, marginRight: 5 }}
                    onPress={handlSendCommand('CALL', callAction.range.call)}
                />
            ) : (
                <View style={styles.btn} />
            )}
            {!!raiseAction ? (
                <BetRange
                    submit={(count) => handlSendCommand('RAISE', count)()}
                    betAction={raiseAction}
                />
            ) : !!betAction ? (
                <BetRange
                    submit={(count) => handlSendCommand('BET', count)()}
                    betAction={betAction}
                />
            ) : (
                <View style={styles.btn} />
            )}
        </>
    );
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <Combinations />
                {userState === 'PLAYING' ? (
                    <>{!isMovePlayer ? <PrevCheck /> : <RenderMainBottom />}</>
                ) : (
                    <Buttons
                        text="Дождитесь следующей раздачи"
                        variant="default"
                        style={{ flex: 1, marginRight: 5 }}
                    />
                )}
                <IconButton>{/* <MessagesIcon /> */}</IconButton>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        zIndex: 120,
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 12,
        paddingHorizontal: 20,
    },
    btn: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        borderRadius: 4,
        borderColor: 'rgba(114, 159, 225, 1)',
        borderWidth: 1,
        paddingVertical: 9,
        paddingHorizontal: 10,
        marginRight: 5,
    },
});
