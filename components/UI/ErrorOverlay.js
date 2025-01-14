import { GlobalStyles } from "@/constants/styles";
import { StyleSheet, Text, View } from "react-native";

function ErrorOverlay({ message }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>An error occurred!</Text>
            <Text style={styles.title}>{message}</Text>
        </View>
    )
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.darkBlue,
    },

    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})