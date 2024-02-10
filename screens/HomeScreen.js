import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  const profileImage = require('../assets/profile_photo.jpg');
  const nombre = "Amín Jesús";
  const apellido = "Báez Espinosa";
  const correoElectronico = "20210929@itla.edu.do";

  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Apellido: {apellido}</Text>
      <Text style={styles.text}>Correo Electrónico: {correoElectronico}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  text: {
    fontSize: 25,
    marginBottom: 10,
  },
});

export default HomeScreen;

//Amín Jesús Báez Espinosa 2021-0929