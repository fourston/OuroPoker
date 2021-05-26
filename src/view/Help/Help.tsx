import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Tab, TabsContent } from '../../component';
import { HelpMessages } from './HelpMessages';
import Wrapper from '../../component/Wrapper';

const Help = () => {
    return (
        <Wrapper>
            <View style={styles.content}>
                <View style={styles.flex}>
                    <Tab active={true} title='Поддержка' />
                </View>
                <TabsContent transparent>
                    <HelpMessages />
                </TabsContent>
            </View>
        </Wrapper>
    );
}


export default Help;
const styles = StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row',
        maxHeight: 400
    },
    content: {
        margin: 20,
        // flex: 1,
        height: Dimensions.get('window').height - 138,
        maxHeight: Dimensions.get('window').height - 138,
        zIndex: 2,
    },
});
