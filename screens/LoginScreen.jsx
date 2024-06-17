import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import SecureInputField from '../components/SecureInputField';
import CheckBox from '../components/CheckBox';
import CountryCode from '../components/CountryCode';
import CustomButton from '../components/CustomButton';
import SegmentedControl from '../components/SegmentedControl';
import LogoComponent from '../components/LogoComponent';



const LoginScreen = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 25,  alignItems: 'center', justifyContent: 'center' }}>
                <LogoComponent />
                
            </View>
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
                onValueChange={() => { setRememberMe(!rememberMe) }}
            />

            <CustomButton
                title="Login"
                onPress={() => console.log('Pressed')}
                color="#FFA500" // Example color
                iconName="login" // Example icon name
            />


            <Text style={styles.forgotPassword}>Forgot Password?</Text>

            <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                <SegmentedControl options={['English', 'German', 'Italian']} />
            </View>
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

        marginTop: 30,
        left: 0,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    forgotPassword: {
        textAlign: 'right',

        marginTop: 20,
        fontSize: 16,
        fontWeight: '500',
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
