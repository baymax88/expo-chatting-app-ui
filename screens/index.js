import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import IndexScreen from './IndexScreen'
import HomeScreen from './HomeScreen'
import NewMessageScreen from './NewMessageScreen'
import NewLoopScreen from './NewLoopScreen'
import DMChatScreen from './DMChatScreen'
import LoopChatScreen from './LoopChatScreen'

const RootStack = createStackNavigator()

const Screens = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Index" component={IndexScreen} />
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="NewMessage" component={NewMessageScreen} />
            <RootStack.Screen name="NewLoop" component={NewLoopScreen} />
            <RootStack.Screen name="DMChat" component={DMChatScreen} />
            <RootStack.Screen name="LoopChat" component={LoopChatScreen} />
        </RootStack.Navigator>
    )
}

export default Screens