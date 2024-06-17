import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import InputField from '../components/InputField';
import SecureInputField from '../components/SecureInputField';
import CheckBox from '../components/CheckBox';
import CountryCode from '../components/CountryCode';
import CustomButton from '../components/CustomButton';
import SegmentedControl from '../components/SegmentedControl';
import LogoComponent from '../components/LogoComponent';
import DropdownMenu from '../components/DropdownMenu';
import { Button } from 'react-native-paper';

import { TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import translations from '../assets/Lang/Translation';
import LanguageContext from '../Context/LanguageContext';

import { useNavigation } from '@react-navigation/native';
// Define a custom theme with primary color changed to black
const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,

        text: 'black', // Text color
        placeholder: 'gray', // Placeholder color
        background: 'white', // Background color
    },
};

import { MaterialCommunityIcons } from '@expo/vector-icons';



const RegisterationScreen = () => {
    const navigation = useNavigation();
    const { language, setLanguage } = useContext(LanguageContext);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>

            {/* --------------- Image Background ------------------ */}
            <View style={styles.backgroundContainer}>
                <ImageBackground
                    source={require('../assets/Icons/CircleBackground.png')}
                    style={styles.imageBackground}
                    resizeMode='stretch'  // This prop ensures that the background image covers the entire space
                >
                    {/* Empty component to maintain layout */}
                </ImageBackground>
            </View>

            {/* --------------- Logo Text Mozec ------------------ */}
            <View style={{ marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
                <LogoComponent />
            </View>

            {/* --------------- Input Fields ------------------ */}
            <Text style={styles.title}>{translations[language].register}</Text>

            {/* <Provider>
                <DropdownMenu />
            </Provider> */}




            <PaperProvider theme={customTheme}>
                <TextInput
                    label={translations[language].select_region}
                    // value={searchQuery}
                    // onChangeText={setSearchQuery}
                    style={{ width: '100%', marginBottom: 20 }}
                    mode="outlined"
                    right={<TextInput.Icon icon="arrow-down-thin" />}
                />

                <TextInput
                    label={translations[language].enter_name}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    right={<TextInput.Icon name="eye" />}
                    mode="outlined"
                    style={{ backgroundColor: 'white', width: '100%' }}
                />

                <Text></Text>

                <CountryCode placeholder={translations[language].enter_phone_number} />

                <TextInput
                    label={translations[language].enter_password}
                    secureTextEntry={true}
                    right={<TextInput.Icon icon="eye" />}
                    mode='outlined'
                    style={{ backgroundColor: 'white', borderColor: "white" }}
                    focusable={false}
                />



                {/* Seperators */}
                <Text />
                <Text />

                {/* --------------- Register Button ------------------ */}

                <Button onPress={() => { navigation.navigate("Login") }} mode='contained' style={{ borderRadius: 5, paddingVertical: 5 }}> {translations[language].register}  </Button>



                {/* --------------- Footer Text ------------------ */}
                <Text style={styles.footerText}>
                    {translations[language].already_have_an_account} <Text onPress={() => navigation.navigate("Login")} style={styles.signUpText}>{translations[language].login}</Text>
                </Text>
            </PaperProvider>



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

export default RegisterationScreen;
