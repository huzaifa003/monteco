import React, { useContext, useEffect, useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import { Button, Surface, Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SegmentedControl from '../components/SegmentedControl';

import translations from '../assets/Lang/Translation';
import LanguageContext from '../Context/LanguageContext';

const HomeScreen = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        console.log(translations[language]);
    }
        , []);
    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.backgroundContainer}>
                <ImageBackground
                    source={require('../assets/Icons/CircleBackground.png')}
                    style={styles.imageBackground}
                    resizeMode='stretch'  // This prop ensures that the background image covers the entire space
                >
                    {/* Empty component to maintain layout */}
                </ImageBackground>
            </View>

            <View style={styles.header}>
                <View style={{ flex: 1, alignItems: 'flex-end', paddingTop: 30 }}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <MaterialCommunityIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/Icons/logo.png')} style={{ width: '25%', height: '25%', marginTop: 5 }} />
                <View style={{ padding: 0, marginTop: 0, alignContent: 'center', alignItems: 'center', marginTop: 20 }}>


                    <Text style={[styles.textStyle, { fontFamily: 'Poppins-Bold', fontSize: 18 }]}> {translations[language].welcome_to} Monzec</Text>
                    <Text style={[styles.textStyle, { fontFamily: 'Poppins-Bold', fontSize: 18, marginTop: -2 }]}> {translations[language].name}</Text>
                    <Text style={[styles.textStyle, { fontFamily: 'Poppins-Bold', fontSize: 14, marginTop: 10 }]}> {translations[language].your_personal_tick_tracker} Monzec</Text>
                </View>
            </View>

            <View style={{
                top: 0, backgroundColor: 'white', width: '100%', borderRadius: 20, flex: 1, justifyContent: 'flex-end'
            }}>


                <View style={{ flexDirection: 'row', gap: 10 }}>

                    <View style={{ flex: 1 }}>
                        <Button
                            icon={() => <MaterialCommunityIcons name="history" size={24} color="white" />}
                            mode="contained"
                            style={{ marginTop: 20, width: '100%', backgroundColor: '#fc3503', padding: 2 }}
                            onPress={() => console.log('Pressed')}>
                            {translations[language].offline_history}
                        </Button>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Button
                            icon={() => <MaterialCommunityIcons name="history" size={24} color="white" />}
                            mode="contained"
                            style={{ marginTop: 20, width: '100%', backgroundColor: '#0099ff', padding: 2 }}
                            onPress={() => console.log('Pressed')}>
                            {translations[language].online_history}

                        </Button>
                    </View>
                </View>

                <Button
                    mode="contained"
                    icon={() => <MaterialCommunityIcons name="checkbox-marked-circle-plus-outline" size={24} color="white" />}
                    style={{ marginTop: 10, width: '100%', backgroundColor: '#FFA500', paddingVertical: 2 }}
                    onPress={() => console.log('Pressed')}>
                    
                    {translations[language].add_tick}
                </Button>
            </View>



            <Modal style={{ height: '20%' }}
                animationType='fade'
                transparent={true}

                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <SegmentedControl options={['English', 'German', 'Italian']} />
                    <Text></Text>
                    <Button onPress={() => setModalVisible(!modalVisible)}>Close</Button>
                </View>
            </Modal>
        </SafeAreaView>

    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        width: '100%',
    },
    textStyle: {





    },
    header: {
        flexDirection: 'row',
        width: '100%',
    },
    modalView: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
});
