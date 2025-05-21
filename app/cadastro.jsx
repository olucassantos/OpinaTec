import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import Logotipo from '../components/Logotipo';
import CampoFormulario from '../components/CampoFormulario';
import Botao from '../components/Botao';

// Importa a autenticação do Firebase
import cadastrarUsuario from '../servicos/autenticacao.js';

export default function Cadastro () {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaCarregando, setEstaCarregando] = useState(false);

    return (
        <View style={estilos.container}>
            <Logotipo />

            <View style={estilos.campos}>
                <CampoFormulario 
                    titulo="Nome"
                    textoTemporario="Digite seu nome"
                    aoAlterarTexto={setNome}
                    valor={nome}
                />

                <CampoFormulario 
                    titulo="Telefone"
                    textoTemporario="Ex: (99) 99999-9999"
                    aoAlterarTexto={setTelefone}
                    valor={telefone}
                />

                <CampoFormulario 
                    titulo="Email"
                    textoTemporario="exemplo@email.com"
                    aoAlterarTexto={setEmail}
                    valor={email}
                />

                <CampoFormulario 
                    titulo="Senha"
                    textoTemporario="Digite sua senha"
                    aoAlterarTexto={setSenha}
                    valor={senha}
                />
            </View>

            <View>
                <Botao 
                    titulo="Criar Conta"
                    acaoClique={() => router.push('/cadastro')}
                    estaCarregando={estaCarregando}
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