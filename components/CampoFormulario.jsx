import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image,
    StyleSheet,
} from 'react-native';

const CampoFormulario = ({ titulo, textoTemporario, mostraTitulo = false, valor, aoAlterarTexto }) => {
    return (
        <View>
            {/* Decide com base no parametro se vai mostrar o titulo */}
            {mostraTitulo && (
                <Text>
                    {titulo}
                </Text>
            )}

            <View>
                <TextInput 
                    placeholder={textoTemporario}
                    style={estilos.campo}
                    onChangeText={aoAlterarTexto}
                    value={valor}
                />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    campo: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        fontSize: 16,
        padding: 10,
        marginBottom: 10,
    },
    titulo: {

    }
});

export default CampoFormulario;