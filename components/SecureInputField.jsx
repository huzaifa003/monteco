import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const SecureInputField = ({ value, onChangeText, placeholder }) => {
    return (
        <View style={styles.container}>
            <Entypo name="lock" size={20} color="#A1A1A1" style={styles.icon} />
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

        paddingHorizontal: 23,
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
        paddingHorizontal: 5,
        paddingVertical: 5,
        color: '#333',
    },
    icon: {
        marginRight: 10,
    },
});

export default SecureInputField;
