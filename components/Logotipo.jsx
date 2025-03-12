import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logotipo = () => {
    return(
        <View>
            <Text style={styles.tituloOpina}>
                Opina
                <Text style={styles.tituloTec}>Tec</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    tituloOpina: {
        color: '#2F4F4F',
        fontSize: 50,
    },
    tituloTec: {
        color: '#B22222',
        fontFamily: 'Impact'
    }
});

export default Logotipo;