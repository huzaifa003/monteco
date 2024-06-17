import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
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
            <View style={styles.backgroundContainer}>
                <ImageBackground
                    source={require('../assets/Icons/CircleBackground.png')}
                    style={styles.imageBackground}
                    resizeMode='stretch'  // This prop ensures that the background image covers the entire space
                >
                    {/* Empty component to maintain layout */}
                </ImageBackground>
            </View>
            <View style={{ marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
                <LogoComponent />
            </View>
            <Text style={styles.title}>Login to your account</Text>
            <CountryCode />
            <SecureInputField
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
            />
            <View style={{ marginLeft: 15 }}>
                <CheckBox
                    label="Remember Me"
                    value={rememberMe}
                    onValueChange={() => { setRememberMe(!rememberMe) }}
                />
            </View>
            <Text />
            <Text />
            <CustomButton
                title="Login"
                onPress={() => console.log('Pressed')}
                color="#FFA500"
                iconName="login"
            />
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
            <View style={{ width: '100%', marginTop: '20%', alignItems: 'center', justifyContent: 'center' }}>
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
    backgroundContainer: {
        position: 'absolute',

        
        width: '50%',
        height: '50%',
        
        marginLeft: 267,
        marginBottom: 400,
        
    },
    imageBackground: {
        width: '100%',
        height: '100%',

    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins-Black',
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 20,
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

        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
    },
    footerText: {
        textAlign: 'center',
        marginTop: '20%',
        fontSize: 16,
        marginTop: 'auto',
    },
    signUpText: {
        color: '#FFA500',
        fontWeight: 'bold',
    }
});

export default LoginScreen;
