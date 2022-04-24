import React from 'react'
import { Text, View, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { loginStyles } from '../theme/loginTheme';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> {}


export const RegisterScreen = ({ navigation }: Props) => {

  const { email, password, name, onChange } = useForm({
    name: '',
    email: '',
    password: ''
});

const onRegister = () => {
    console.log({email, password, name});
    Keyboard.dismiss();
}

  return (
    <>

    <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#5856D6'}}
        behavior={ (Platform.OS === 'ios') ? 'padding' : 'height' }
    >

            <View style={ loginStyles.formContainer}>
                <WhiteLogo />

                <Text style={ loginStyles.title }>Registro</Text>

                {/* Input name */}
                <Text style={ loginStyles.label }>Nombre:</Text>
                <TextInput
                    placeholder='Ingrese su nombre:'
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    underlineColorAndroid="white"
                    style={[ 
                        loginStyles.inputField,
                        ( Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"

                    onChangeText={ (value) => onChange(value, 'name')}
                    value={ name }
                    onSubmitEditing={ onRegister }

                    autoCapitalize='words'
                    autoCorrect={ false }
                />

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

                    onChangeText={ (value) => onChange(value, 'email')}
                    value={ email }
                    onSubmitEditing={ onRegister }

                    autoCapitalize='none'
                    autoCorrect={ false }
                />

                {/* Input Password */}
                <Text style={ loginStyles.label }>Contraseña:</Text>
                <TextInput
                    placeholder='******'
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    secureTextEntry={ true }
                    underlineColorAndroid="white"
                    style={[ 
                        loginStyles.inputField,
                        ( Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"

                    onChangeText={ (value) => onChange(value, 'password')}
                    value={ password }
                    onSubmitEditing={ onRegister }

                    autoCapitalize='none'
                    autoCorrect={ false }
                />

                {/* Boton Login */}
                <View style={ loginStyles.buttonContainer}>
                    <TouchableOpacity
                        activeOpacity={ 0.8 }
                        style={ loginStyles.button }
                        onPress={ onRegister }
                    >
                        <Text style={ loginStyles.buttonText}> Crear Cuenta </Text>
                    </TouchableOpacity>
                </View>

                {/* Crear una nueva cuenta */}
                    <TouchableOpacity
                        onPress={ () => navigation.replace('LoginScreen')}
                        activeOpacity={ 0.8 }
                        style={ loginStyles.buttonReturn}
                    >
                        <Text style={ loginStyles.buttonText}> Login </Text>
                    </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </>
  )
}