import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import {
    useFonts,
    Roboto_500Medium,
} from '@expo-google-fonts/roboto'


import ArrowBack from '../../assets/images/arrow-back.svg'
import Camera from '../../assets/images/camera.svg'

const Header = ({
    leftBtnAction,
    rightBtnAction,
    userData
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

                    <View style={styles.heading}>
                        {userData && (userData.length <= 3 && userData.map((item, index) => (
                            <Image
                                key={index}
                                source={item.photoUrl}
                                style={[styles.avatar, item.online ? styles.online : null, {zIndex: -index}]}
                            />
                        )) || (
                            <>
                                <Image
                                    key={0}
                                    source={userData[0].photoUrl}
                                    style={[styles.avatar, userData[0].online ? styles.online : null, {zIndex: 0}]}
                                />
                                <Image
                                    key={1}
                                    source={userData[1].photoUrl}
                                    style={[styles.avatar, userData[1].online ? styles.online : null, {zIndex: -1}]}
                                />
                                <View style={[styles.avatar, styles.extraUsersNum, {zIndex: -2}]}>
                                    <Text style={styles.extraUsersNumText}>
                                        +{userData.length - 2}
                                    </Text>
                                </View>
                            </>
                        ))}
                    </View>

                    <TouchableOpacity style={styles.rightButton} onPress={rightBtnAction}>
                        <Camera />
                    </TouchableOpacity>
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
        textAlign: 'center'
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