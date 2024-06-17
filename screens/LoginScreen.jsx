import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import InputField from '../components/InputField';
import SecureInputField from '../components/SecureInputField';
import CheckBox from '../components/CheckBox';
import CountryCode from '../components/CountryCode';
import CustomButton from '../components/CustomButton';
import SegmentedControl from '../components/SegmentedControl';
import LogoComponent from '../components/LogoComponent';


import translations from '../assets/Lang/Translation';
import LanguageContext from '../Context/LanguageContext';

const LoginScreen = () => {

    const { language, setLanguage } = useContext(LanguageContext);
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
            <Text style={styles.title}>{translations[language].login_to_your_account}</Text>
            <CountryCode placeholder={translations[language].enter_phone_number} />
            <SecureInputField
                value={password}
                onChangeText={setPassword}
                placeholder={translations[language].password}
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
                title={translations[language].login}
                onPress={() => console.log('Pressed')}
                color="#FFA500"
                iconName="login"
            />
            <Text style={styles.forgotPassword}>{translations[language].forgot_password}</Text>
            <View style={{ width: '100%', marginTop: '20%', alignItems: 'center', justifyContent: 'center' }}>
                <SegmentedControl options={['English', 'German', 'Italian']} />
            </View>

            <Text style={styles.footerText}>
                {translations[language].dont_have_an_account} <Text style={styles.signUpText}>{translations[language].register}</Text>
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
