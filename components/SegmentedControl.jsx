import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LanguageContext from '../Context/LanguageContext';
const SegmentedControl = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const { language, setLanguage } = useContext(LanguageContext);

    useEffect(() => {
        
        if (selectedOption === 'English') {
            setLanguage('en');
        } else if (selectedOption === 'German') {
            setLanguage('de');
        }
        else if (selectedOption === 'Italian') {
            setLanguage('it');
        }
        console.log(language);
        
    }
    , [selectedOption]);
    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <React.Fragment key={option}>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            { backgroundColor: selectedOption === option ? '#6a5acd' : '#A9A9A9' }
                        ]}
                        onPress={() => setSelectedOption(option)}
                    >
                        <Text style={[styles.text, {color: selectedOption === option ? 'white' : 'black'}]}>{option}</Text>
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
        borderRadius: 10,
        backgroundColor: '#d3d3d3',  // Background color for the whole control
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',

    },
    option: {
        
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 14,
    },
    separator: {
        width: 1,
        backgroundColor: 'white',
        alignSelf: 'center',
        height: '60%',  // Sets the separator's height to 80% of the component's height
    },
});

export default SegmentedControl;
