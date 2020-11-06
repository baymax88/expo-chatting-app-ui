import React, {
    useState,
    useEffect,
} from 'react'
import {
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    Image,
    KeyboardAvoidingView
} from 'react-native'

import {
    useFonts,
    Roboto_500Medium,
    Roboto_400Regular
} from '@expo-google-fonts/roboto'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

import CheckOff from '../../assets/images/check_off.svg'
import CheckOn from '../../assets/images/check_on.svg'

const testingData = [
    {id: '1', firstName: 'Susan', lastName: 'Mitchell', position: 'Founder and CEO', photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg'), onLine: true},
    {id: '2', firstName: 'Ryan', lastName: 'Edmonson', position: 'Interaction Designer', photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg'), onLine: true},
    {id: '3', firstName: 'Amber', lastName: 'Alexander', position: 'Project Manager', photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg'), onLine: true},
    {id: '4', firstName: 'Susan', lastName: 'Mitchell', position: 'Founder and CEO', photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg'), onLine: true},
    {id: '5', firstName: 'Susan', lastName: 'Mitchell', position: 'Founder and CEO', photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg'), onLine: true},
    {id: '6', firstName: 'Susan', lastName: 'Mitchell', position: 'Founder and CEO', photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg'), onLine: true},
    {id: '7', firstName: 'Susan', lastName: 'Mitchell', position: 'Founder and CEO', photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg'), onLine: true},
]

const NewMessageScreen = ({
    navigation
}) => {
    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_400Regular
    })

    const [contactList, setContactList] = useState([])
    const [selectedIds, setSelectedIds] = useState([])

    const selectContact = id => {
        if (!selectedIds.includes(id)) {
            setSelectedIds([...selectedIds, id])
        } else {
            setSelectedIds(selectedIds.filter(item => item !== id))
        }
    }

    const filterContacts = value => {
        if (value !== '') {
            setContactList(testingData.filter(item => (item.firstName + item.lastName).search(value) !== -1))
        } else {
            setContactList(testingData)
        }
    }

    useEffect(() => {
        setContactList(testingData)
    }, [])

    if (!fontsLoaded) {
        return <View />
        // return <AppLoading />
    } else {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.root}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />

                <View style={headerStyles.container}>
                    <View style={headerStyles.header}>
                        <TouchableOpacity style={headerStyles.leftButton} onPress={() => navigation.navigate('Home')}>
                            <Text style={headerStyles.letfButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={headerStyles.heading}>New messages</Text>
                        <TouchableOpacity style={headerStyles.rightButton}onPress={() => navigation.navigate('DMChat')}>
                            <Text style={headerStyles.rightButtonText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={headerStyles.searchBoxContainer}>
                        <Text style={headerStyles.searchHeading}>Send to members</Text>
                        <TextInput
                            placeholder="Search by name"
                            placeholderTextColor="#979797"
                            style={headerStyles.searchBox}
                            onChangeText={filterContacts}
                        />
                    </View>
                </View>

                <View style={contactListStyles.container}>
                    <Text style={contactListStyles.heading}>Recent conversations</Text>
                    <View style={contactListStyles.listContainer}>
                        <ContactList contacts={contactList} selectContact={selectContact} selectedIds={selectedIds} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const ContactList = ({
    contacts,
    selectContact,
    selectedIds
}) => {
    return (
        <ScrollView style={contactListStyles.list}>
            {contacts && contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} selectItem={selectContact} selected={selectedIds.includes(contact.id)} />
            ))}
        </ScrollView>
    )
}

const ContactItem = ({
    contact,
    selectItem,
    selected
}) => {
    return (
        <View style={contactListStyles.contactItem}>
            <View style={contactListStyles.photoNameContainer}>
                <Image
                    source={contact.photoUrl}
                    style={contact.onLine ? contactListStyles.avatarOnline : contactListStyles.avatar}
                />
                <View style={contactListStyles.textContainer}>
                    <Text style={contactListStyles.name}>{contact.firstName} {contact.lastName}</Text>
                    <Text style={contactListStyles.position}>{contact.position}</Text>
                </View>
            </View>

            <View style={contactListStyles.checkBoxContainer}>
                {selected ? <CheckOn onPress={() => selectItem(contact.id)} /> : <CheckOff onPress={() => selectItem(contact.id)} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fdfdfd'
    }
})

const headerStyles = StyleSheet.create({
    container: {
        paddingTop: 40,
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
        alignItems: 'center',
    },
    letfButtonText: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#999',
    },
    heading: {
        flex: 4,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#222',
        alignSelf: 'center',
        textAlign: 'center'
    },
    rightButton: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 4,
        shadowColor: '#000',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 20
    },
    rightButtonText: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: '#222',
    },
    searchBoxContainer: {
        marginTop: 40,
    },
    searchHeading: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        color: '#222',
    },
    searchBox: {
        marginVertical: 10,
        height: 50,
        backgroundColor: '#f5f5f5',
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        paddingHorizontal: 25,
        alignItems: 'center',
        borderRadius: 15
    }
})

const contactListStyles = StyleSheet.create({
    container: {
        width: wp('100%'),
        flex: 1,
        paddingBottom: 20
    },
    heading: {
        marginVertical: 20,
        paddingHorizontal: 30,
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        color: '#222'
    },
    listContainer: {
        flex: 1,
    },
    list: {
        paddingHorizontal: 30
    },
    contactItem: {
        flexDirection: 'row',
        height: 95,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5'
    },
    photoNameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBoxContainer: {
        alignItems: 'center'
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
    position: {
        marginTop: 10,
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#999'
    },
})

export default NewMessageScreen