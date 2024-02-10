import React from 'react';
import { View, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube-iframe';

const ExperienciaPersonalScreen = () => {
    return (
        <View style={styles.container}>
            <YouTube
                videoId="a06bj0fpOB8" //link de youtube
                style={styles.video}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        alignSelf: 'stretch',
        height: 300,
    },
});


export default ExperienciaPersonalScreen;

//Amín Jesús Báez Espinosa 2021-0929