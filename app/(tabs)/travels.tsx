import { View, Text, FlatList, Button, TextInput, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const Travels = () => {
  interface Carona {
    id: number
    origin: string
    destination: string
    date: string
    time: string
    available_seats: number
  }

  const [caronas, setCaronas] = useState<Carona[]>([])
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [availableSeats, setAvailableSeats] = useState('')
  const [driverId, setDriverId] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  // Função para buscar todas as caronas
  const fetchCaronas = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/caronas')
      const data = await response.json()
      setCaronas(data)
    } catch (error) {
      console.error('Erro ao buscar caronas:', error)
    }
  }

  // Função para criar uma nova carona
  const createCarona = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/caronas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin,
          destination,
          date,
          time,
          available_seats: parseInt(availableSeats),
          driver_id: parseInt(driverId),
        }),
      })
      if (response.ok) {
        fetchCaronas() // Atualiza a lista de caronas
        setModalVisible(false) // Fecha o modal
      }
    } catch (error) {
      console.error('Erro ao criar carona:', error)
    }
  }

  // Função para deletar uma carona
  const deleteCarona = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/api/caronas/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        fetchCaronas() // Atualiza a lista de caronas após deletar
      } else {
        console.error('Erro ao deletar carona:', response.statusText)
      }
    } catch (error) {
      console.error('Erro ao deletar carona:', error)
    }
  }

  useEffect(() => {
    fetchCaronas()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas Caronas</Text>
      <FlatList
        data={caronas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.caronaItem}>
            <Text style={styles.caronaText}>Origem: {item.origin}</Text>
            <Text style={styles.caronaText}>Destino: {item.destination}</Text>
            <Text style={styles.caronaText}>Data: {item.date}</Text>
            <Text style={styles.caronaText}>Hora: {item.time}</Text>
            <Text style={styles.caronaText}>Vagas disponíveis: {item.available_seats}</Text>
            <Button title="Deletar" onPress={() => deleteCarona(item.id)} color="#ff4d4d" />
          </View>
        )}
      />
      <TouchableOpacity style={styles.floatingButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cadastrar Carona</Text>
            <TextInput
              style={styles.input}
              placeholder="Origem"
              value={origin}
              onChangeText={setOrigin}
            />
            <TextInput
              style={styles.input}
              placeholder="Destino"
              value={destination}
              onChangeText={setDestination}
            />
            <TextInput
              style={styles.input}
              placeholder="Data (YYYY-MM-DD)"
              value={date}
              onChangeText={setDate}
            />
            <TextInput
              style={styles.input}
              placeholder="Hora (HH:MM:SS)"
              value={time}
              onChangeText={setTime}
            />
            <TextInput
              style={styles.input}
              placeholder="Vagas disponíveis"
              value={availableSeats}
              onChangeText={setAvailableSeats}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="ID do motorista"
              value={driverId}
              onChangeText={setDriverId}
              keyboardType="numeric"
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#ff4d4d" />
              <Button title="Salvar" onPress={createCarona} color="#4CAF50" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  caronaItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  caronaText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: '#4CAF50',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  floatingButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
})

export default Travels