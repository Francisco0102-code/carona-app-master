import { View, Text, StyleSheet, Pressable, TextInput, ScrollView, Alert, Modal } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const CadastroCarona = ({ setModalVisible }) => {
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
            setModalVisible(false); // Fecha o modal após o cadastro
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível cadastrar a carona.');
        }
    };

    return (
        <View style={style.modalContent}>
            <Text style={style.modalTitle}>Cadastrar Carona</Text>
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
            <Pressable style={style.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={style.closeButtonText}>Fechar</Text>
            </Pressable>
        </View>
    );
};

const Travels = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView contentContainerStyle={style.container}>
            <Pressable style={style.button} onPress={() => setModalVisible(true)}>
                <Text style={style.buttonText}>Cadastrar Carona</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={style.modalContainer}>
                    <CadastroCarona setModalVisible={setModalVisible} />
                </View>
            </Modal>
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    closeButton: {
        backgroundColor: 'red',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Travels;
