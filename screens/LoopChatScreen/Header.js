import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'
import {
    useFonts,
    Roboto_500Medium,
} from '@expo-google-fonts/roboto'


import ArrowBack from '../../assets/images/arrow-back.svg'

const Header = ({
    leftBtnAction,
    loopTitle
}) => {
    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
    })

    if (!fontsLoaded) {
        return <View />
        // return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.leftButton} onPress={leftBtnAction}>
                        <ArrowBack />
                    </TouchableOpacity>

                    <Text style={styles.heading}>
                        #{loopTitle}
                    </Text>

                    <View style={styles.rightButton}>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 15,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    leftButton: {
        flex: 1,
        alignItems: 'flex-start',
    },
    heading: {
        flex: 4,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#222',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginLeft: -10
    },
    extraUsersNum: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
    },
    extraUsersNumText: {
        fontFamily: 'Roboto_500Medium',
        color: '#fff',
        fontSize: 14
    },
    online: {
        borderColor: '#3bcd6b',
        borderWidth: 2
    },
    rightButton: {
        flex: 1,
        alignItems: 'flex-end',
    },
})

export default Header