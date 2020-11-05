import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { AppLoading } from 'expo'
import {
    useFonts,
    Roboto_500Medium
} from '@expo-google-fonts/roboto'

const IndexScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({Roboto_500Medium})

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Roboto_500Medium'}} onPress={() => navigation.navigate('Home')}>Messages</Text>
            </View>
        )
    }
}

export default IndexScreen