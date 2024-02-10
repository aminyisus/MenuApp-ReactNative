import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SumadoraScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const sumar = () => {
    const resultadoSuma = parseFloat(num1) + parseFloat(num2);
    setResultado(resultadoSuma.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese el primer número:</Text>
      <TextInput
        style={styles.input}
        value={num1}
        onChangeText={text => setNum1(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Ingrese el segundo número:</Text>
      <TextInput
        style={styles.input}
        value={num2}
        onChangeText={text => setNum2(text)}
        keyboardType="numeric"
      />
      <Button title="Sumar" onPress={sumar} />
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
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

export default SumadoraScreen;

//Amín Jesús Báez Espinosa 2021-0929