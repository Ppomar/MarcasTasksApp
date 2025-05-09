import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native'

interface Element {
  id: string
  name: string
  avatar: string
}

export default function ListScreen() {
  const [data, setData] = useState<Element[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error al cargar datos:', err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007aff" />
        <Text>Cargando datos...</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
})
