import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import ListScreen from '../src/screens/ListScreen'
import { jest } from '@jest/globals'

// Mock global.fetch para simular la API
(global as any).fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: '1', name: 'Elemento 1', avatar: 'https://img.com/1' },
        { id: '2', name: 'Elemento 2', avatar: 'https://img.com/2' },
      ]),
  })
) as jest.Mock

describe('ListScreen', () => {
  it('muestra el loading y luego renderiza los elementos', async () => {
    const { getByText, queryByText } = render(<ListScreen />)

    // Al inicio debe estar cargando
    expect(getByText('Cargando datos...')).toBeTruthy()

    // Esperamos a que se rendericen los datos
    await waitFor(() => {
      expect(queryByText('Elemento 1')).toBeTruthy()
      expect(queryByText('Elemento 2')).toBeTruthy()
    })
  })
})
