import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const TopRightIcon = ({ icon, onClick, size, color }) => {
    console.log(size);
    return (
        <View style={styles.header}>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingTop: 30 }}>
                <TouchableOpacity onPress={() => onClick()}>
                    <MaterialCommunityIcons name={icon} size={size ? size : 26} color={color? color: 'black'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
    },
});

export default TopRightIcon;