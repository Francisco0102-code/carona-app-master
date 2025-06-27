import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { useRouter } from "expo-router";

const Driver = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [carbrand, setCarbrand] = useState(""); // Atualizado para "carbrand"
  const [carmodel, setCarmodel] = useState(""); // Atualizado para "carmodel"
  const [caryear, setCaryear] = useState(""); // Atualizado para "caryear"
  const [carplate, setCarplate] = useState(""); // Atualizado para "carplate"

  const handleSaveUserDriver = async () => {
    console.log(carbrand);
    console.log(carmodel);
    console.log(caryear);
    console.log(carplate);

    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        type: "driver",
        tel,
        password,
        carbrand, // Atualizado para "carbrand"
        carmodel, // Atualizado para "carmodel"
        caryear, // Atualizado para "caryear"
        carplate, // Atualizado para "carplate"
      }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      Alert.alert("Cadastro realizado com sucesso!");
      router.push("/(tabs)/home");
    } else {
      Alert.alert("Erro ao cadastrar motorista:", data.message || "Erro desconhecido.");
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#000",
          height: 86,
          paddingLeft: 16,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" color="#fff" size={24} />
        </Pressable>
        <Text
          style={{
            marginLeft: 16,
            color: "#FFF",
            fontSize: 22,
          }}
        >
          Cadastro de novo motorista
        </Text>
      </View>
      <ScrollView>
        <Text
          style={{
            fontSize: 24,
            paddingHorizontal: 25,
            paddingVertical: 18,
          }}
        >
          Vamos realizar o seu cadastro, só precisamos de algumas informações
        </Text>
        <View style={{ paddingHorizontal: 25 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 16,
            }}
          >
            Informações Pessoais
          </Text>
          <Text style={{ fontSize: 18 }}>Nome Completo</Text>
          <TextInput
            onChangeText={(txt) => setName(txt)}
            value={name}
            style={{
              backgroundColor: "#FDFDFD",
              borderWidth: 1,
              borderColor: "#C0C0C0",
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8,
            }}
          />
          <Text style={{ fontSize: 18 }}>Email</Text>
          <TextInput
            onChangeText={(txt) => setEmail(txt)}
            value={email}
            style={{
              backgroundColor: "#FDFDFD",
              borderWidth: 1,
              borderColor: "#C0C0C0",
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8,
            }}
          />
          <Text style={{ fontSize: 18 }}>Telefone/Whatsapp</Text>
          <TextInput
            onChangeText={(txt) => setTel(txt)}
            value={tel}
            style={{
              backgroundColor: "#FDFDFD",
              borderWidth: 1,
              borderColor: "#C0C0C0",
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8,
            }}
          />
          <Text style={{ fontSize: 18 }}>Senha</Text>
          <TextInput
            onChangeText={(txt) => setPassword(txt)}
            value={password}
            style={{
              backgroundColor: "#FDFDFD",
              borderWidth: 1,
              borderColor: "#C0C0C0",
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8,
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            paddingVertical: 18,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 16,
            }}
          >
            Informações do Veículo
          </Text>
          <Text style={{ fontSize: 18 }}>Marca</Text>
          <TextInput
            onChangeText={(txt) => setCarbrand(txt)}
            value={carbrand}
            style={{
              backgroundColor: "#FDFDFD",
              borderWidth: 1,
              borderColor: "#C0C0C0",
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8,
            }}
          />
          <Text style={{ fontSize: 18 }}>Modelo</Text>
          <TextInput
            onChangeText={(txt) => setCarmodel(txt)}
            value={carmodel}
            style={{
              backgroundColor: "#FDFDFD",
              borderWidth: 1,
              borderColor: "#C0C0C0",
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8,
            }}
          />
          <Text style={{ fontSize: 18 }}>Ano</Text>
          <TextInput
            onChangeText={(txt) => setCaryear(txt)}
            value={caryear}
            style={{
              backgroundColor: "#FDFDFD",
              borderWidth: 1,
              borderColor: "#C0C0C0",
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8,
            }}
          />
          <Text style={{ fontSize: 18 }}>Placa</Text>
          <TextInput
            onChangeText={(txt) => setCarplate(txt)}
            value={carplate}
            style={{
              backgroundColor: "#FDFDFD",
              borderWidth: 1,
              borderColor: "#C0C0C0",
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8,
            }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "#000",
          height: 86,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable onPress={handleSaveUserDriver}>
          <Text
            style={{
              color: "#FFF",
              fontSize: 22,
            }}
          >
            Cadastrar
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default Driver;