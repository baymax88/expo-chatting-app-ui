import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import NewMsgAlert from '../../assets/images/red-dot.svg'

const ContactItemLayout = ({ contact }) => {
    return (
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
    );
};

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
});

export default ContactItemLayout;