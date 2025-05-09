import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { addTask } from '../redux/tasksSlice'

export default function TasksScreen() {
  const tasks = useSelector((state: RootState) => state.tasks.list)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [taskInput, setTaskInput] = useState('')

  const handleAddTask = () => {
    if (taskInput.trim() === '') return
    dispatch(addTask(taskInput))
    setTaskInput('')
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>New Task</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.description}</Text>
          </View>
        )}
      />

      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TextInput
              placeholder="New Task Name"
              value={taskInput}
              onChangeText={setTaskInput}
              style={styles.input}
            />
            <Button title="Add" onPress={handleAddTask} disabled={taskInput.trim() === ''} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#add8e6',
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskItem: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 24,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
})