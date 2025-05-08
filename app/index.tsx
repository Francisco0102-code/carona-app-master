import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 32 }}>
      <Text style={{ fontSize: 32, fontWeight: '500', marginTop: 16, marginBottom: 32, textAlign: 'center' }}>
        Como você quer usar o app?
      </Text>
      <Link href="/auth/driver">
        <Image style={{ width: 150, height: 150 }} source={require('../assets/driver.png')} />
      </Link>
      <Text
        style={{ fontSize: 32, fontWeight: 'bold' }}>
        Motorista
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>
        Ofereça carona e ganhe dinheiro
      </Text>
      <Link href="/auth/passager">
        <Image style={{ width: 150, height: 150 }} source={require('../assets/passager.png')} />
      </Link>
      <Text
        style={{ fontSize: 32, fontWeight: 'bold' }}>
        Carona
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>
        Encrontre caronas e economize
      </Text>
    </View>
  )
}

export default index