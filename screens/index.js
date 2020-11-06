import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import IndexScreen from './IndexScreen'
import HomeScreen from './HomeScreen'
import NewMessageScreen from './NewMessageScreen'
import DMChatScreen from './DMChatScreen'

const RootStack = createStackNavigator()

const Screens = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Index" component={IndexScreen} />
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="NewMessage" component={NewMessageScreen} />
            <RootStack.Screen name="DMChat" component={DMChatScreen} />
        </RootStack.Navigator>
    )
}

export default Screens