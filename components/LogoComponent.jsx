import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const LogoComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>Monzec</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // Add container styling if necessary
    },
    logoText: {
        fontSize: 50,  // Adjust size as needed
        fontWeight: '700',
        fontFamily: 'Rubik-Light',  // Change to your actual font name
        color: '#FFA500',  // Adjust the color to match the image
        // textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1
    }
});

export default LogoComponent;
