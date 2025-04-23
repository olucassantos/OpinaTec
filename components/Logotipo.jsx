import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logotipo = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.tituloOpina}>
                Opina
                <Text style={styles.tituloTec}>Tec</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        marginBottom: 20
    },
    tituloOpina: {
        color: '#2F4F4F',
        fontSize: '4em',
    },
    tituloTec: {
        color: '#B22222',
        fontFamily: 'Impact'
    }
});

export default Logotipo;