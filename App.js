import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/pages/TelaInicial';
import Resultado from './src/pages/Resultado';
import { useFonts, LexendDeca_400Regular, LexendDeca_700Bold } from '@expo-google-fonts/lexend-deca';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    LexendDeca_400Regular,
    LexendDeca_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen 
          name="TelaInicial" 
          component={TelaInicial} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Resultado" 
          component={Resultado} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// gremio >>> inter