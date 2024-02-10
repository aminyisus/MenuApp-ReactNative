import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Página Inicial"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Sumadora"
          onPress={() => navigation.navigate('Sumadora')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Traductor de Números a Letras"
          onPress={() => navigation.navigate('Traductor')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Tabla de Multiplicar"
          onPress={() => navigation.navigate('TablaMultiplicar')}
        />
      </View>
      <View style={styles.buttonContainer}>
      <Button
        title="Experiencia Personal"
        onPress={() => navigation.navigate('ExperienciaPersonal')}
      />
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
  buttonContainer: {
    marginBottom: 10, 
  },
});

export default MenuScreen;

//Amín Jesús Báez Espinosa 2021-0929