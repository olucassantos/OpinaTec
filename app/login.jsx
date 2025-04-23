import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import Logotipo from '../components/Logotipo';
import CampoFormulario from '../components/CampoFormulario';
import Botao from '../components/Botao';

export default function Login () {
    return (
        <View style={estilos.container}>
            <Logotipo />

            <View>
                <CampoFormulario 
                    titulo="Telefone"
                    textoTemporario="Digite seu telefone"
                />

                <CampoFormulario 
                    titulo="Senha"
                    textoTemporario="Digite sua senha"
                />
            </View>

            <View>
                <Botao 
                    titulo="Entrar"
                    acaoClique={() => router.push('/home')}
                    estaCarregando={false}
                />

                <Botao 
                    titulo="Criar Conta"
                    acaoClique={() => router.push('/cadastro')}
                    estaCarregando={false}
                />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    }
});