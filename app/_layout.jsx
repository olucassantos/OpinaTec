import { StyleSheet, Text, View } from 'react-native';
import { Stack, SplashScreen } from 'expo-router';
import { useEffect } from 'react';

// Previne que a tela de splash desapareça automaticamente
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    useEffect(() => {
        SplashScreen.hideAsync(); // Esconde a tela de splash após 2 segundos
    });

    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="cadastro" options={{ headerShown: false }} />
        </Stack>
    );
}

export default RootLayout;