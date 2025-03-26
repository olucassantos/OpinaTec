import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image 
} from 'react-native';

const CampoFormulario = ({ titulo, textoTemporario }) => {
    return (
        <View>
            <Text>
                {titulo}
            </Text>

            <View>
                <TextInput 
                    placeholder={textoTemporario}
                />
            </View>
        </View>
    );
}

export default CampoFormulario;