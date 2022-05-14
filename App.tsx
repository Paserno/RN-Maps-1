import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PermissionsProvider } from './src/context/PermissionsContext';
import { StackNav } from './src/navigatior/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { UsuarioProvider } from './src/context/UsuarioContext';


const AppState = ({ children }: any) => {

  return ( 
    <AuthProvider>
      <UsuarioProvider>
        <PermissionsProvider>
          { children }
        </PermissionsProvider>
      </UsuarioProvider>
    </AuthProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNav />
      </AppState>
    </NavigationContainer>
  )
}

export default App;