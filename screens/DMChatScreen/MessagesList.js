import React, {
    useRef,
    useEffect
} from 'react'
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    Keyboard
} from 'react-native'
import {
    useFonts,
    Roboto_400Regular
} from '@expo-google-fonts/roboto'

const MessagesList = ({
    messagesHistory
}) => {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
    })

    const scrollViewRef = useRef()

    const goToBottomList = () => {
        scrollViewRef.current.scrollToEnd({ animated: false })
    }

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', goToBottomList)
        return () => {
            Keyboard.removeListener('keyboardDidShow', goToBottomList)
        }
    }, [])

    if (!fontsLoaded) {
        return <View />
        // return <AppLoading />
    } else {
        return (
            <ScrollView
                ref={scrollViewRef}
                style={{flex: 1, paddingHorizontal: 30}}
                contentContainerStyle={{paddingBottom: 30}}
                onContentSizeChange={goToBottomList}
            >
                {messagesHistory && messagesHistory.map((message, index) => <Message key={index} {...{ message }} />)}
            </ScrollView>
        )
    }
}

const Message = ({ message }) => {
    return (
        <View style={[styles.messageBox, message.from === '2' ? {backgroundColor: '#f4f4f4', alignSelf: 'flex-end'} : {backgroundColor: '#6ac2bd', alignSelf: 'flex-start'}]}>
            <Text style={message.from === '2' ? styles.myMessageText : styles.messageText}>{message.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messageBox: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        maxWidth: '80%',
        borderRadius: 22,
        marginTop: 5
    },
    messageText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#fff'
    },
    myMessageText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#222'
    }
})

export default MessagesList