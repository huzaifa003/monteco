import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import SecureInputField from '../components/SecureInputField';
import CheckBox from '../components/CheckBox';
import CountryCode from '../components/CountryCode';



const LoginScreen = () => {
    
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login to your account</Text>

            <CountryCode />

            
            <SecureInputField
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
            />

            <CheckBox
                label="Remember Me"
                value={rememberMe}
                onValueChange={()=>{setRememberMe(!rememberMe)}}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.forgotPassword}>Forgot Password ?</Text>

            <Text style={styles.footerText}>
                Don't have an account? <Text style={styles.signUpText}>Register</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        width: '100%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FFA500',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    forgotPassword: {
        textAlign: 'center',
        color: '#FFA500',
        marginTop: 20,
        fontSize: 16,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
    signUpText: {
        color: '#FFA500',
        fontWeight: 'bold',
    }
});

export default LoginScreen;
