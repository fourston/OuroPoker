import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import Preload from './src/view/Preload';
import AppNavigation from './src/navigation/AppNavigation';
import * as ScreenOrientation from 'expo-screen-orientation';

export default class App extends React.Component {
    componentDidMount() {
        this.changeScreenOrientation();
    }
    changeScreenOrientation = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    };
    render() {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <View style={styles.container}>
                        <Preload>
                            <AppNavigation />
                        </Preload>
                    </View>
                </SafeAreaProvider>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 71, 122, 0.7)',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
});
