import React, {
    useState,
} from 'react'
import {
    StyleSheet,
    View,
    StatusBar,
    TextInput,
    ScrollView,
    Text
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AppLoading } from 'expo'
import {
    useFonts,
    Roboto_500Medium,
    Roboto_400Regular
} from '@expo-google-fonts/roboto'

import ArrowBack from '../../assets/images/arrow-back.svg'
import Plus from '../../assets/images/plus.svg'
import LoopBack from '../../assets/images/loop-back.svg'
import Chat from '../../assets/images/chat.svg'

const HomeScreen = ({
    navigation
}) => {
    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_400Regular
    })

    const [chatRooms, setChatRooms] = useState([])
    const [contacts, setContacts] = useState([])

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar barStyle="dark-content" backgroundColor="#fff" />

                    <View style={headerStyles.container}>
                        <View style={headerStyles.header}>
                            <View style={headerStyles.leftButton}>
                                <ArrowBack onPress={() => navigation.navigate("Index")} />
                            </View>
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
                                <View style={styles.plusButton}>
                                    <Plus />
                                </View>
                            </View>

                            <View style={loopsStyles.content}>
                                {(chatRooms && chatRooms.length !== 0) ? <ChatRoomsRender chatRooms={chatRooms} /> : (
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
                            <View style={styles.plusButton}>
                                <Plus />
                            </View>
                        </View>

                        <View style={directMessagesStyles.content}>
                            {(contacts && contacts.length !== 0) ? <Contacts contacts={contacts} /> : (
                                <>
                                    <Chat style={directMessagesStyles.chatSvg} />
                                    <Text style={directMessagesStyles.intro}>
                                        Connect and engage directly with members anywhere in the world about the things you care about the most.
                                    </Text>
                                </>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const ChatRoomsRender = ({ chatRooms }) => {
    return (
        <ScrollView>
            {chatRooms.map(room => {
                <>
                </>
            })}
        </ScrollView>
    )
}

const Contacts = ({ contacts }) => {
    return (
        <ScrollView>
            {contacts.map(contact => {
                <>
                </>
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    }
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
        height: 50,
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
        height: 265,
        backgroundColor: '#fff'
    },
    loops: {
        width: '100%',
        height: '100%',
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
        textAlign: 'center'
    }
})

const directMessagesStyles = StyleSheet.create({
    container: {
        height: 380,
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
    }
})

export default HomeScreen