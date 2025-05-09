import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import TasksScreen from '../src/screens/TasksScreen'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'
import { act } from 'react-test-renderer'

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>)
}

describe('TasksScreen', () => {
  it('abre el modal y agrega una nueva tarea', async () => {
  const { getByText, getByPlaceholderText, findByText } = renderWithProvider(<TasksScreen />)

  fireEvent.press(getByText('New Task'))

  const input = getByPlaceholderText('New Task Name')

  fireEvent.changeText(input, 'Comprar pan')
  fireEvent.press(getByText('Add'))

  const task = await findByText('Comprar pan')
  expect(task).toBeTruthy()
})

  it('no permite agregar tarea vacía', () => {
    const { getByText, getByPlaceholderText } = renderWithProvider(<TasksScreen />)

    fireEvent.press(getByText('New Task'))

    const input = getByPlaceholderText('New Task Name')
    fireEvent.changeText(input, '') // campo vacío

    const addButton = getByText('Add')
    expect(addButton.props.disabled).toBe(true)
  })
})
