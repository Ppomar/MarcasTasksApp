import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  Home: undefined
  Tasks: undefined
  List: undefined
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcas Tasks App</Text>
      <View style={styles.buttonContainer}>
        <Button title="Tasks" onPress={() => navigation.navigate('Tasks')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="List" onPress={() => navigation.navigate('List')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    marginVertical: 10,
    width: 200,
  },
})
