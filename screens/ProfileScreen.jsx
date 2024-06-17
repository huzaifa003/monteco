import { View, Image, StyleSheet, SafeAreaView, Text } from "react-native"
import { Button, Surface } from "react-native-paper";

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ paddingHorizontal: 10, flex: 0.4, marginTop: 40 }}>
                <Surface style={styles.surface}>
                    <Image source={require('../assets/Icons/logo.png')} style={{ width: '100%', height: '100%', borderRadius: 40 }} />
                </Surface>
                
                
            </View>

            <Text style={styles.textStyle}>Name: Shumail</Text>
            <Text style={styles.textStyle}>Phone: +436601683385</Text>
            <Text style={styles.textStyle}>Region: Leinz</Text>
            <Text style={styles.textStyle}>Language: en</Text>
            
            <Button
                
                mode="contained"
                style={{ marginTop: 20, width: '100%', backgroundColor: '#fc3503', borderRadius: 10, paddingVertical: 5}}
                onPress={() => console.log('Pressed')}>
                Edit Profile
            </Button>
            



            


        </SafeAreaView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'white',

    },

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        width: '100%',

    },
    textStyle:
    { fontSize: 16, fontFamily: 'Poppins-Black', fontWeight: 'bold', marginTop: 20, marginRight: 25 }
});