import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SegmentedControl = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <React.Fragment key={option}>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            { backgroundColor: selectedOption === option ? '#6a5acd' : '#d3d3d3' }
                        ]}
                        onPress={() => setSelectedOption(option)}
                    >
                        <Text style={styles.text}>{option}</Text>
                    </TouchableOpacity>
                    {index < options.length - 1 && (
                        <View style={styles.separator} />
                    )}
                </React.Fragment>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#d3d3d3',  // Background color for the whole control
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
    separator: {
        width: 1,
        backgroundColor: 'white',
        alignSelf: 'center',
        height: '60%',  // Sets the separator's height to 80% of the component's height
    },
});

export default SegmentedControl;
