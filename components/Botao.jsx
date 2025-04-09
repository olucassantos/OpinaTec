import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({ titulo, acaoClique, estaCarregando }) => {
    return (
        <TouchableOpacity 
            onPress={acaoClique}
            disabled={estaCarregando}
            activeOpacity={0.7}
            style={estilos.botao}
        >
            <Text>
                {titulo}
            </Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: '#6200EE',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Botao;