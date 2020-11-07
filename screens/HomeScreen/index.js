import React, {
    useState,
    useEffect,
} from 'react'
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    StatusBar,
    TextInput,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AppLoading } from 'expo'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import {
    useFonts,
    Roboto_500Medium,
    Roboto_400Regular
} from '@expo-google-fonts/roboto'

import ArrowBack from '../../assets/images/arrow-back.svg'
import Plus from '../../assets/images/plus.svg'
import LoopBack from '../../assets/images/loop-back.svg'
import Chat from '../../assets/images/chat.svg'
import NewMsgAlert from '../../assets/images/red-dot.svg'

const testingDataLoops = [
    {id: '1', title: 'sds_announcements', hasNewMsg: false},
    {id: '2', title: 'sds_events', hasNewMsg: true},
    {id: '3', title: 'sds_thepowerofwe', hasNewMsg: false},
    {id: '4', title: 'sds_thepowerofwe2', hasNewMsg: false},
]
const testingDataDM = [
    {id: '1', firstName: 'Susan', lastName: 'Mitchell', lastMsg: 'Yes, I think so.', msgTime: 'Fri', onLine: true, readMsg: true, photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg')},
    {id: '2', firstName: 'Susan', lastName: 'Mitchell', lastMsg: 'This is great. What I would love to do that.', msgTime: '11:19', onLine: false, readMsg: false, photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg')},
    {id: '3', firstName: 'Susan', lastName: 'Mitchell', lastMsg: 'Yes, I think so.', msgTime: 'Wed', onLine: false, readMsg: false, photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg')},
    {id: '4', firstName: 'Susan', lastName: 'Mitchell', lastMsg: 'Yes, I think so.', msgTime: '11:19', onLine: false, readMsg: true, photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg')},
]

const HomeScreen = ({
    navigation
}) => {
    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_400Regular
    })

    const [channels, setChannels] = useState([])
    const [contacts, setContacts] = useState([])

    const removeContact = id => {
        setContacts(contacts.filter(item => item.id !== id))
    }

    const removeChannel = id => {
        setChannels(channels.filter(item => item.id !== id))
    }

    useEffect(() => {
        setChannels(testingDataLoops),
        setContacts(testingDataDM)
    }, [])

    if (!fontsLoaded) {
        return <View />
        // return <AppLoading />
    } else {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView style={styles.root}>
                    <StatusBar barStyle="dark-content" backgroundColor="#fff" />

                    <View style={headerStyles.container}>
                        <View style={headerStyles.header}>
                            <TouchableOpacity style={headerStyles.leftButton} onPress={() => navigation.navigate("Index")}>
                                <ArrowBack />
                            </TouchableOpacity>
                            <Text style={headerStyles.heading}>Messages</Text>
                            <View style={{flex: 1}}></View>
                        </View>
                        <View style={headerStyles.searchBoxContainer}>
                            <TextInput
                                placeholder="Search"
                                placeholderTextColor="#979797"
                                style={headerStyles.searchBox}
                            />
                        </View>
                    </View>

                    <View style={loopsStyles.container}>
                        <View style={loopsStyles.loops}>
                            <View style={loopsStyles.header}>
                                <Text style={loopsStyles.title}>Loops</Text>
                                <TouchableOpacity style={styles.plusButton} onPress={() => navigation.navigate('NewLoop')}>
                                    <Plus />
                                </TouchableOpacity>
                            </View>

                            <View style={loopsStyles.content}>
                                {(channels && channels.length !== 0) ? <Channels channels={channels} removeChannel={removeChannel} /> : (
                                    <>
                                        <LoopBack style={loopsStyles.loopSvg} />
                                        <Text style={loopsStyles.intro}>
                                            Life is an infinite loop of teaching and learning. Create a loop and invite others to discuss any topic using #hashtags.
                                        </Text>
                                    </>
                                )}
                            </View>
                        </View>
                    </View>

                    <View style={directMessagesStyles.container}>
                        <View style={directMessagesStyles.header}>
                            <Text style={directMessagesStyles.title}>Direct messages</Text>
                            <TouchableOpacity style={styles.plusButton} onPress={() => navigation.navigate('NewMessage')}>
                                <Plus />
                            </TouchableOpacity>
                        </View>

                        <View style={directMessagesStyles.content}>
                            {(contacts && contacts.length !== 0) ? <Contacts contacts={contacts} removeContact={removeContact} /> : (
                                <>
                                    <Chat style={directMessagesStyles.chatSvg} />
                                    <Text style={directMessagesStyles.intro}>
                                        Connect and engage directly with members anywhere in the world about the things you care about the most.
                                    </Text>
                                </>
                            )}
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const Channels = ({
    channels,
    removeChannel
}) => {
    return (
        <View style={loopsStyles.channelList}>
            {channels.map(channel => (
                <ChannelItem key={channel.id} channel={channel} deleteItem={removeChannel} />
            ))}
        </View>
    )
}

const ChannelItem = ({
    channel,
    deleteItem
}) => {
    const rightSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 0.1],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
        return (
            <TouchableOpacity style={loopsStyles.deleteBox} onPress={() => deleteItem(channel.id)}>
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
            <View style={loopsStyles.channelItem}>
                <Text style={loopsStyles.channelTitle}># {channel.title}</Text>
                {channel.hasNewMsg ? <NewMsgAlert /> : null}
            </View>
        </Swipeable>
    )
}

const Contacts = ({
    contacts,
    removeContact
}) => {
    return (
        <View style={directMessagesStyles.contactList}>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} deleteItem={removeContact}  />
            ))}
        </View>
    )
}

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
            <TouchableOpacity style={directMessagesStyles.deleteBox} onPress={() => deleteItem(contact.id)}>
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
            <View style={directMessagesStyles.contactItem}>
                <View style={directMessagesStyles.photoNameContainer}>
                    <Image
                        source={contact.photoUrl}
                        style={contact.onLine ? directMessagesStyles.avatarOnline : directMessagesStyles.avatar}
                    />
                    <View style={directMessagesStyles.textContainer}>
                        <Text style={directMessagesStyles.name}>{contact.firstName} {contact.lastName}</Text>
                        <Text style={directMessagesStyles.lastMsg}>{(contact.lastMsg.length < 28) ? contact.lastMsg : contact.lastMsg.substring(0, 27) + '...'}</Text>
                    </View>
                </View>

                <View style={directMessagesStyles.timeAlertContainer}>
                    {contact.readMsg ? null : <NewMsgAlert />}
                    <Text style={directMessagesStyles.lastMsg}>{contact.msgTime}</Text>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    root: {
        // flex: 1,
        backgroundColor: '#6ac2bd',
    },
    plusButton: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 20
    },
});

const headerStyles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 25,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        borderBottomRightRadius: 40,
    },
    header: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    leftButton: {
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'flex-start'
    },
    heading: {
        flex: 4,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#222',
        alignSelf: 'center',
        textAlign: 'center'
    },
    searchBoxContainer: {
        marginTop: 30,
    },
    searchBox: {
        height: 60,
        backgroundColor: '#f5f5f5',
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        paddingHorizontal: 25,
        alignItems: 'center',
        borderRadius: 15
    }
})

const loopsStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    loops: {
        backgroundColor: '#6ac2bd',
        borderTopLeftRadius: 40,
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 25
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#fff',
    },
    content: {
        justifyContent: 'center',
        alignItems: "center"
    },
    loopSvg: {
        marginTop: 30,
        marginBottom: 20
    },
    intro: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 25
    },
    channelList: {
        width: wp('100%'),
    },
    channelItem: {
        flexDirection: 'row',
        marginHorizontal: 30,
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    channelTitle: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#fff',
    },
    deleteBox: {
        backgroundColor: '#ed4956',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75
    },
})

const directMessagesStyles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fdfdfd',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#222',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    chatSvg: {
        marginTop: 30,
        marginBottom: 20
    },
    intro: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#222',
        textAlign: 'center'
    },
    contactList: {
        width: wp('100%'),
    },
    contactItem: {
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

export default HomeScreen