import { View, Text, StyleSheet, Pressable, TextInput, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const CadastroCarona = () => {
    const [motorista, setMotorista] = useState('');
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [dataHora, setDataHora] = useState('');
    const [vagas, setVagas] = useState('');

    const cadastrarCarona = async () => {
        try {
            await axios.post('http://localhost:8000/api/caronas/', {
                motorista,
                origem,
                destino,
                data_hora: dataHora,
                vagas: Number(vagas),
            });
            Alert.alert('Sucesso', 'Carona cadastrada com sucesso!');
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível cadastrar a carona.');
        }
    };

    return (
        <View style={style.cadastroContainer}>
            <Text style={style.label}>Motorista:</Text>
            <TextInput
                style={style.input}
                placeholder="Digite o nome do motorista"
                value={motorista}
                onChangeText={setMotorista}
            />
            <Text style={style.label}>Origem:</Text>
            <TextInput
                style={style.input}
                placeholder="Digite a origem"
                value={origem}
                onChangeText={setOrigem}
            />
            <Text style={style.label}>Destino:</Text>
            <TextInput
                style={style.input}
                placeholder="Digite o destino"
                value={destino}
                onChangeText={setDestino}
            />
            <Text style={style.label}>Data e Hora:</Text>
            <TextInput
                style={style.input}
                placeholder="Digite a data e hora (ex: 2025-06-01 14:30)"
                value={dataHora}
                onChangeText={setDataHora}
            />
            <Text style={style.label}>Vagas:</Text>
            <TextInput
                style={style.input}
                placeholder="Digite o número de vagas"
                keyboardType="numeric"
                value={vagas}
                onChangeText={setVagas}
            />
            <Pressable style={style.button} onPress={cadastrarCarona}>
                <Text style={style.buttonText}>Cadastrar Carona</Text>
            </Pressable>
        </View>
    );
};

const Travels = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <CadastroCarona />
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: 'black',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cadastroContainer: {
        width: '100%',
        marginTop: 20,
    },
});

export default Travels;