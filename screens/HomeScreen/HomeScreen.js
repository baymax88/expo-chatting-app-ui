import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView
} from 'react-native'
import {
    Title,
    Button
} from 'react-native-paper'
import * as Animatable from 'react-native-animatable'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <View style={styles.headerSection}>
                    <View>
                        <Button icon="camera"></Button>
                    </View>
                </View>
                <View style={styles.loopsSection}>
                    <View style={styles.loops}></View>
                </View>
                <Animatable.View style={styles.directMessagesSection} animation="fadeInUpBig">
                </Animatable.View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6ac2bd',
      height: hp('100%')
    },
    headerSection: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomRightRadius: 35
    },
    loopsSection: {
        flex: 1.5,
        backgroundColor: '#fff'
    },
    loops: {
        width: '100%',
        height: '100%',
        backgroundColor: '#6ac2bd',
        borderTopLeftRadius: 35
    },
    directMessagesSection: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
});

export default HomeScreen