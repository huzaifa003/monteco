import React, { useState } from 'react';
import { View } from 'react-native';
import { Menu, TextInput, Provider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DropdownMenu = () => {
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const items = [
    { name: 'Apple', icon: 'apple' },
    { name: 'Banana', icon: 'fruit-pineapple' },
    { name: 'Orange', icon: 'fruit-citrus' },
    { name: 'Mango', icon: 'fruit-mango' },
    { name: 'Grapes', icon: 'grape' }
  ];

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          label="Choose a fruit"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{ width: 300, marginBottom: 20 }}
          mode="outlined"
          right={<TextInput.Icon name="menu-down" onPress={openMenu} />} // Ensures the icon is clickable to open the menu
        />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<View style={{ width: 300, height: 0 }} />} // Invisible anchor aligned with TextInput
        >
          {items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => (
            <Menu.Item
              key={index}
              onPress={() => {
                setSearchQuery(item.name);
                closeMenu();
              }}
              title={item.name}
              icon={() => <MaterialCommunityIcons name={item.icon} size={24} color="black" />}
            />
          ))}
        </Menu>
      </View>
    </Provider>
  );
};

export default DropdownMenu;
