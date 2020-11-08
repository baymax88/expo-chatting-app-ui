import React, {
    useState,
    useEffect
} from 'react'
import {
    KeyboardAvoidingView,
    View,
    StyleSheet
} from 'react-native'

import {
    useFonts,
    Roboto_500Medium,
    Roboto_400Regular
} from '@expo-google-fonts/roboto'

import Header from './Header'
import MessagesList from './MessagesList'
import MessageInputBox from './MessageInputBox'

const testingData = [
    {photoUrl: require('../../assets/images/avatar/azamat-zhanisov-a5sRFieA3BY-unsplash.jpg'), online: true},
    {photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg'), online: false},
    {photoUrl: require('../../assets/images/avatar/azamat-zhanisov-a5sRFieA3BY-unsplash.jpg'), online: false},
    {photoUrl: require('../../assets/images/avatar/alexandru-zdrobau--djRG1vB1pw-unsplash.jpg'), online: false}
]

const testingMessages = [
    {content: 'How has your work been coming along?', time: 'Yesterday 10:53', from: '1'},
    {content: 'Just keep at it?', time: 'Yesterday 10:54', from: '1'},
    {content: `Thanks, I really appreciate your support. It's helped!`, time: 'Yesterday 10:56', from: '2'},
    {content: `Anytime. I'll check in tomorrow.`, time: 'Yesterday 10:56', from: '1'},
    {content: `Send me your work when you have a chance. I'm free today.`, time: 'Today 10:56', from: '1'},
    {content: `Ok!, I'll send it soon.`, time: 'Today 10:56', from: '2'},
    {content: 'How has your work been coming along?', time: 'Yesterday 10:53', from: '1'},
    {content: 'Just keep at it?', time: 'Yesterday 10:54', from: '1'},
    {content: `Thanks, I really appreciate your support. It's helped!`, time: 'Yesterday 10:56', from: '2'},
    {content: `Anytime. I'll check in tomorrow.`, time: 'Yesterday 10:56', from: '1'},
    {content: `Send me your work when you have a chance. I'm free today.`, time: 'Today 10:56', from: '1'},
    {content: `Ok!, I'll send it soon.`, time: 'Today 10:56', from: '2'},
]

const DMChatScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_400Regular
    })

    const [messages, setMessages] = useState([])

    const goToNewMessage = () => navigation.navigate('NewMessage')

    const addNewMessage = message => {
        setMessages([...messages, {
            content: message,
            time: 'Today 10:56',
            from: '2'
        }])
    }

    useEffect(() => {
        setMessages(testingMessages)
    }, [])

    if (!fontsLoaded) {
        return <View />
        // return <AppLoading />
    } else {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                <Header
                    leftBtnAction={() => navigation.goBack()}
                    rightBtnAction={() => {}}
                    userData={testingData}
                />

                <MessagesList
                    messagesHistory={messages}
                />

                <View style={styles.bottom}>
                    <MessageInputBox
                        userData={testingData}
                        btnAction={goToNewMessage}
                        addNewMessage={addNewMessage}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    bottom: {
        justifyContent: 'flex-end'
    }
})

export default DMChatScreen