import React from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const CountryCode = ({ value, onChangeText, placeholder }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Icons/austriaFlag.png')} style={styles.icon} />
            <Text style={{ fontWeight: 800 }}> +92 </Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={true}
                placeholderTextColor="#A1A1A1"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',

        paddingHorizontal: 20,
        paddingVertical: 5,
        shadowColor: 'grey',
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 20,

        shadowOffset: { width: 0, height: 25 },
        marginBottom: 20,

    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 7,
        color: '#333',
    },
    icon: {
        marginRight: 10,
        height: 30,
        width: 30,
    },
});

export default CountryCode;
