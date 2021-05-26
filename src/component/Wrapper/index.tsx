import React, { Component } from 'react';
import {
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Keyboard,
    Animated,
    StyleSheet,
} from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IAplicationState } from '../../redux/reduser';
import { IAuth } from '../../redux/types';
import { BackgroundImage } from '../BackgroundImage/BackgroundImage';
import Header from '../Header/Header';

interface IComponentProps {
    header?: boolean;
    scroll?: boolean;
}

interface IStateProps {
    auth: IAuth.Reduser;
}

interface IProps extends IComponentProps, NavigationInjectedProps, IStateProps {}

class Wrapper extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public static defaultProps = {
        header: true,
    };

    private paddingInput = new Animated.Value(0);
    private keyboardWillShowSub;
    private keyboardWillHideSub;

    componentDidMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (event) => {
        Animated.timing(this.paddingInput, {
            duration: event.duration,
            toValue: 60,
        }).start();
    };

    keyboardWillHide = (event) => {
        Animated.timing(this.paddingInput, {
            duration: event.duration,
            toValue: 0,
        }).start();
    };

    render() {
        const { navigation, header, auth, scroll } = this.props;

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <Animated.View
                    style={{
                        marginBottom: this.paddingInput,
                        flex: 1,
                    }}
                >
                    <View style={styles.container}>
                        {scroll === false ? (
                            <View style={{ flex: 1, padding: 0, margin: 0, minHeight: '100%' }}>
                                <BackgroundImage />
                                {!!header && <Header navigation={navigation} auth={auth} />}
                                <SafeAreaView
                                    style={{
                                        flex: 1,
                                    }}
                                >
                                    {this.props.children}
                                </SafeAreaView>
                            </View>
                        ) : (
                            <ScrollView
                                style={{ flex: 1, padding: 0, margin: 0 }}
                                contentContainerStyle={{
                                    minHeight: '100%',
                                }}
                            >
                                <BackgroundImage />
                                {!!header && <Header navigation={navigation} auth={auth} />}
                                <SafeAreaView
                                    style={{
                                        flex: 1,
                                    }}
                                >
                                    {this.props.children}
                                </SafeAreaView>
                            </ScrollView>
                        )}
                    </View>
                </Animated.View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = ({ auth }: IAplicationState): IStateProps => ({
    auth,
});

export default withNavigation<IComponentProps, NavigationInjectedProps>(
    connect(mapStateToProps)(Wrapper),
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00477A',
        position: 'relative',
    },
});
