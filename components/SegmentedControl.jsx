import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SegmentedControl = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <View style={styles.container}>
            {options.map(option => (
                <TouchableOpacity
                    key={option}
                    style={[
                        styles.option,
                        { backgroundColor: selectedOption === option ? '#6a5acd' : '#d3d3d3' }
                    ]}
                    onPress={() => setSelectedOption(option)}
                >
                    <Text style={styles.text}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 20,
        overflow: 'hidden',
    },
    option: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});

export default SegmentedControl;
