import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const Settings = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    telephone: '',
    type: '',
    carbrand: '',
    carmodel: '',
    caryear: '',
    carplate: '',
  })

  // Função para buscar as informações do usuário
  const fetchUserInfo = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/users/1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data) // Atualiza o estado com as informações do usuário
      } else {
        console.error('Erro ao buscar informações do usuário:', response.statusText)
      }
    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error)
    }
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>
      <Text style={styles.info}>Nome: {user.name}</Text>
      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>Telefone: {user.telephone}</Text>
      <Text style={styles.info}>Tipo: {user.type}</Text>
      {user.type === 'driver' && (
        <>
          <Text style={styles.info}>Marca do carro: {user.carbrand}</Text>
          <Text style={styles.info}>Modelo do carro: {user.carmodel}</Text>
          <Text style={styles.info}>Ano do carro: {user.caryear}</Text>
          <Text style={styles.info}>Placa do carro: {user.carplate}</Text>
        </>
      )}
      <Button title="Atualizar Informações" onPress={fetchUserInfo} />
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
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
})

export default Settings