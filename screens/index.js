import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import IndexScreen from './IndexScreen'
import HomeScreen from './HomeScreen'

const RootStack = createStackNavigator()

const Screens = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Index" component={IndexScreen} />
            <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
    )
}

export default Screens