import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use appropriate icon set

const CustomButton = ({ title, onPress, color, iconName }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
            <View style={styles.contentContainer}>
                {iconName && <Icon name={iconName} size={20} color="white" style={styles.icon} />}
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    icon: {
        marginRight: 10,
    },
});

export default CustomButton;
