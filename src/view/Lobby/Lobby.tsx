import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ListRenderItemInfo } from 'react-native';
import {
    LobbyTop,
    LobbyBottom,
    PrivateTable,
    LobbyTable,
    SetModal,
    CreateTableModal,
} from './components';
import { ILobbyTables } from '../../helpers/types';
import { commands, sizeType, speedType } from '../../helpers/actions';
import { ICreateGameBlinds } from '../../helpers/types/IBalancy';
import Wrapper from '../../component/Wrapper';

interface IState {
    activeIndex: number;
    isModal: boolean;
    selectedId: string;
    createmodal: boolean;
    width: number;
}
interface IProps {
    onCancel: () => void;
    data: ILobbyTables[];
    blinds: ICreateGameBlinds[];
    createTable: () => void;
    sendCommand: (command: string) => void;
}
export default class Lobby extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            activeIndex: 1,
            isModal: false,
            selectedId: '',
            createmodal: false,
            width: 0,
        };
    }
    flatListRef;
    componentDidMount() {
        if (this.props.blinds.length === 0) {
            this.props.sendCommand(commands.getBLINDS());
        }
        this.props.sendCommand(commands.getState);
        this.setState({ width: Dimensions.get('window').width });
    }
    getTableData = () => {
        return [{ tableId: 'new' }, ...this.props.data, { tableId: 'last' }];
    };

    getItemLayout = (data, index) => {
        return {
            length: 5000,
            offset: (this.state.width / 4) * index - this.state.width / 4,
            index,
        };
    };

    componentDidUpdate() {
        if (!!this.flatListRef) {
            this.flatListRef.scrollToIndex({ animated: true, index: this.state.activeIndex });
        }
    }
    createTables = (size: sizeType, nameBlind: string, amount: number, name: string) => {
        this.setState({ createmodal: false });
        this.props.sendCommand(commands.createTableWithOptions(size, nameBlind, amount, name));
    };
    getSelectTable = () => this.props.data.find((item) => item.tableId === this.state.selectedId);
    openCreateModal = () => {
        if (this.props.blinds.length === 0) {
            // console.log('sendCommandsendCommandsendCommandsendCommandsendCommandsendCommandsendCommandsendCommand')
            this.props.sendCommand(commands.getBLINDS());
        }
        setTimeout(() => {
            this.setState({ createmodal: true });
        }, 200);
    };
    renderFlatList = (props: ListRenderItemInfo<ILobbyTables>) => {
        switch (props.index) {
            case 0:
                return <PrivateTable onPress={this.openCreateModal} />;
            case this.getTableData().length - 1:
                return (
                    <View style={{ width: this.state.width / 4 }}>
                        <Text></Text>
                    </View>
                );
            default:
                return (
                    <LobbyTable
                        submit={(selectedId) => this.submitTable(selectedId)}
                        {...props}
                        active={this.state.activeIndex === props.index}
                    />
                );
        }
    };

    joinTable = (amount: number, name: string) => {
        this.toggleModal();
        this.props.sendCommand(commands.joinTable(this.state.selectedId, amount, name));
    };

    toggleModal(value: boolean = false) {
        this.setState({ isModal: value });
    }

    submitTable(selectedId: string) {
        this.setState({ selectedId });
        this.toggleModal(true);
    }

    render() {
        let { onCancel, blinds } = this.props;
        let { isModal, createmodal } = this.state;
        return (
            <Wrapper header={false}>
                <View style={{ flex: 1, paddingBottom: 20, paddingHorizontal: 20 }}>
                    <LobbyTop onPressCancel={onCancel} sendCommand={this.props.sendCommand} />
                    <View
                        style={{
                            flex: 1,
                            marginRight: -20,
                            marginLeft: -20,
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingVertical: 13,
                        }}
                    >
                        <FlatList
                            horizontal
                            ref={(ref) => {
                                this.flatListRef = ref;
                            }}
                            style={{ flexDirection: 'row', flex: 1, height: '100%' }}
                            data={this.getTableData()}
                            getItemLayout={this.getItemLayout}
                            renderItem={this.renderFlatList}
                            keyExtractor={(item) => item.tableId}
                        />
                    </View>
                    <LobbyBottom sendCommand={this.props.sendCommand} blinds={blinds} />
                </View>
                <CreateTableModal
                    isOpen={createmodal}
                    blinds={blinds}
                    onCancel={() => this.setState({ createmodal: false })}
                    createTable={this.createTables}
                />

                {isModal && (
                    <SetModal
                        submit={this.joinTable}
                        isOpen={isModal}
                        table={this.getSelectTable()}
                        onCancel={() => this.toggleModal()}
                    />
                )}
            </Wrapper>
        );
    }
}
