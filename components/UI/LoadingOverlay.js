import { GlobalStyles } from "@/constants/styles";
import { ActivityIndicator, StyleSheet, View } from "react-native";

function LadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
        </View>
    )
}

export default LadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.darkBlue,
    },
})