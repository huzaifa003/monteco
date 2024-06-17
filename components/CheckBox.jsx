// RememberMeCheckbox.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? '#6200ee' : undefined}
        style={styles.checkbox}
      />
      <Text style={styles.label}>Remember Me</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    fontSize: 18,
  },
});

export default CheckBox;
