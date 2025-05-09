import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import TasksScreen from '../screens/TasksScreen'
import ListScreen from '../screens/ListScreen'

export type RootStackParamList = {
  Home: undefined
  Tasks: undefined
  List: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tasks" component={TasksScreen} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  )
}
