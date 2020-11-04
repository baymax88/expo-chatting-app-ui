import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Screens from './screens'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6ac2bd'
  }
}

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;