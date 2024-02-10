import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TablaMultiplicarScreen = () => {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const num = parseInt(numero);
    const tablaMultiplicar = [];

    if (!isNaN(num)) {
      for (let i = 1; i <= 13; i++) {
        tablaMultiplicar.push(`${num} x ${i} = ${num * i}`);
      }
      setTabla(tablaMultiplicar);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese un número:</Text>
      <TextInput
        style={styles.input}
        value={numero}
        onChangeText={text => setNumero(text)}
        keyboardType="numeric"
      />
      <Button title="Generar tabla de multiplicar" onPress={generarTabla} />
      <Text style={styles.tituloTabla}>Tabla de multiplicar de {numero}:</Text>
      <View>
        {tabla.map((item, index) => (
          <Text key={index} style={styles.itemTabla}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '30%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  tituloTabla: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  itemTabla: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TablaMultiplicarScreen;

//Amín Jesús Báez Espinosa 2021-0929