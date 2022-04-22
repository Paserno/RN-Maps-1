import React from 'react'
import { Text, View, Platform } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';

export const LoadinScreen = () => {
  return (
    <>
        <Background />

        <View style={ loginStyles.formContainer}>
            <WhiteLogo />

            <Text style={ loginStyles.title }>Login</Text>

            {/* Input Email */}
            <Text style={ loginStyles.label }>Email:</Text>
            <TextInput
                placeholder='Ingrese su email:'
                placeholderTextColor="rgba(255,255,255,0.4)"
                keyboardType='email-address'
                underlineColorAndroid="white"
                style={[ 
                    loginStyles.inputField,
                    ( Platform.OS === 'ios') && loginStyles.inputFieldIOS
                ]}
                selectionColor="white"

                //TODO: onchange, value

                autoCapitalize='none'
                autoCorrect={ false }
            />

            {/* Input Password */}
            <Text style={ loginStyles.label }>Contraseña:</Text>
            <TextInput
                placeholder='******'
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid="white"
                style={[ 
                    loginStyles.inputField,
                    ( Platform.OS === 'ios') && loginStyles.inputFieldIOS
                ]}
                selectionColor="white"

                //TODO: onchange, value

                autoCapitalize='none'
                autoCorrect={ false }
            />

            {/* Boton Login */}
            <View style={ loginStyles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={ 0.8 }
                    style={ loginStyles.button }
                >
                    <Text style={ loginStyles.buttonText}> Login </Text>
                </TouchableOpacity>
            </View>

            {/* Crear una nueva cuenta */}
            <View style={ loginStyles.newUserContainer}>
                <TouchableOpacity
                    activeOpacity={ 0.8 }
                    onPress={ () => console.log('press')}
                >
                    <Text style={ loginStyles.buttonText}> Nueva Cuenta </Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
  )
}
