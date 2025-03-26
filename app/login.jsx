import React from 'react';
import { View, Text } from 'react-native';

import Logotipo from '../components/Logotipo';
import CampoFormulario from '../components/CampoFormulario';

export default function Login () {
    return (
        <View>
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
        </View>
    );
}