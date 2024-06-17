import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterationScreen from "../screens/RegisterationScreen";

const Layout = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                
                screenOptions={{
                    headerShown: false
                }}
                
            >  
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                
                <Stack.Screen name="Register" component={RegisterationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Layout;

