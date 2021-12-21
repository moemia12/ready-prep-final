import React from 'react'
import { createStackNavigator, StackView } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import MainLayout from './MainLayout'

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={'Home'}
      >
        <Stack.Screen
        name='Home'
        component={MainLayout}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App