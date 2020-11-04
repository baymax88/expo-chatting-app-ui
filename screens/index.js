import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen/HomeScreen'

const RootStack = createStackNavigator()

const Screens = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
    )
}

export default Screens