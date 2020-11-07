import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Animated,
    Text,
    View,
    Image
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import NewMsgAlert from '../../assets/images/red-dot.svg'

const ContactItem = ({
    contact,
    deleteItem
}) => {
    const rightSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 0.1],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
        return (
            <TouchableOpacity style={styles.deleteBox} onPress={() => deleteItem(contact.id)}>
                <Animated.Text style={{
                    transform: [{scale: scale}],
                    fontFamily: 'Roboto_400Regular',
                    color: '#fff',
                    fontSize: 14
                }}>Delete</Animated.Text>
            </TouchableOpacity>
        )
    }

    return (
        <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.item}>
                <View style={styles.photoNameContainer}>
                    <Image
                        source={contact.photoUrl}
                        style={contact.onLine ? styles.avatarOnline : styles.avatar}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{contact.firstName} {contact.lastName}</Text>
                        <Text style={styles.lastMsg}>{(contact.lastMsg.length < 28) ? contact.lastMsg : contact.lastMsg.substring(0, 27) + '...'}</Text>
                    </View>
                </View>

                <View style={styles.timeAlertContainer}>
                    {contact.readMsg ? null : <NewMsgAlert />}
                    <Text style={styles.lastMsg}>{contact.msgTime}</Text>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: 95,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5'
    },
    photoNameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeAlertContainer: {
        alignItems: 'flex-end'
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 55,
    },
    avatarOnline: {
        width: 55,
        height: 55,
        borderRadius: 55,
        borderColor: '#43cb6f',
        borderWidth: 2
    },
    textContainer: {
        marginLeft: 10
    },
    name: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#222',
    },
    lastMsg: {
        marginTop: 4,
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#999'
    },
    deleteBox: {
        backgroundColor: '#ed4956',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75
    },
})

export default ContactItem