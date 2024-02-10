import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TraductorScreen = () => {
  const [numero, setNumero] = useState('');
  const [numeroEnLetras, setNumeroEnLetras] = useState('');

  const traducirNumero = () => {
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];

    let num = parseInt(numero);
    if (num < 1 || num > 1000 || isNaN(num)) {
      setNumeroEnLetras('Número fuera del rango (1 al 1000)');
      return;
    }

    let result = '';

    if (num === 1000) {
      result = 'mil';
    } else {
      let centenas = Math.floor(num / 100);
      let resto = num % 100;
      let decena = Math.floor(resto / 10);
      let unidad = resto % 10;

      if (centenas > 0) {
        result += unidades[centenas] + ' cientos ';
      }

      if (resto >= 10 && resto <= 19) {
        result += especiales[resto - 10];
      } else {
        if (decena > 0) {
          result += decenas[decena];
          if (unidad > 0) result += ' y ';
        }
        if (unidad > 0 || resto === 0) result += unidades[unidad];
      }
    }

    setNumeroEnLetras(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese un número del 1 al 1000:</Text>
      <TextInput
        style={styles.input}
        value={numero}
        onChangeText={text => setNumero(text)}
        keyboardType="numeric"
      />
      <Button title="Traducir a letras" onPress={traducirNumero} />
      <Text style={styles.resultado}>Número en letras: {numeroEnLetras}</Text>
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
  resultado: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default TraductorScreen;

//Amín Jesús Báez Espinosa 2021-0929