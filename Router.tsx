import { LoginScreen } from './src/screen/LoginScreen';
import { HomeScreen } from './src/screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Index } from './src/screen/Index';
import * as React from 'react';

export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="index"
          component={Index}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
