import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import Logotipo from '../components/Logotipo';
import CampoFormulario from '../components/CampoFormulario';
import Botao from '../components/Botao';

export default function Cadastro () {
    return (
        <View style={estilos.container}>
            <Logotipo />

            <View style={estilos.campos}>
                <CampoFormulario 
                    titulo="Nome"
                    textoTemporario="Digite seu nome"
                />

                <CampoFormulario 
                    titulo="Telefone"
                    textoTemporario="Ex: (99) 99999-9999"
                />

                <CampoFormulario 
                    titulo="Email"
                    textoTemporario="exemplo@email.com"
                />

                <CampoFormulario 
                    titulo="Senha"
                    textoTemporario="Digite sua senha"
                />
            </View>

            <View>
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
    },
    campos: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: 20
    }
});