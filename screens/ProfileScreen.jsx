import React, { useContext, useEffect, useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity, Modal } from 'react-native';
import { Button, Surface, Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SegmentedControl from '../components/SegmentedControl';

import translations from '../assets/Lang/Translation';
import LanguageContext from '../Context/LanguageContext';
import TopRightIcon from '../components/TopRightIcon';

const ProfileScreen = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        console.log(translations[language]);
    }
        , []);
    return (

        <SafeAreaView style={styles.container}>

            <TopRightIcon icon='pencil' onClick={() => setModalVisible(true)} size={26} color='black' />

            <View style={{ paddingHorizontal: 10, flex: 0.4, marginTop: 40 }}>
                <Surface style={styles.surface}>
                    <Image source={require('../assets/Icons/logo.png')} style={{ width: '100%', height: '100%', borderRadius: 40 }} />
                </Surface>
            </View>

            <Text style={styles.textStyle}>Name: {translations[language].name}</Text>
            <Text style={styles.textStyle}>Phone: {translations[language].phone}</Text>
            <Text style={styles.textStyle}>Region: {translations[language].region}</Text>
            <Text style={styles.textStyle}>Language: {language}</Text>

            <Button
                mode="contained"
                style={{ marginTop: 20, width: '100%', backgroundColor: '#fc3503', borderRadius: 10, paddingVertical: 5 }}
                onPress={() => console.log('Pressed')}>
                {translations[language].logout}
            </Button>

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

export default ProfileScreen;

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
        fontSize: 16,
        fontFamily: 'Poppins-Black',
        fontWeight: 'bold',
        marginTop: 20,
        marginRight: 25,
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
});
