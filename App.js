import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './app/navigation/AppNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>

  )
}

export default App