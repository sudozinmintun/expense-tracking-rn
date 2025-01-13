import { GlobalStyles } from "@/constants/styles";
import { View, Text, TextInput, StyleSheet } from "react-native";

function Input({ label, invalid, style, textInputConfig }) {

    let inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    if (invalid) {
        inputStyles.push(styles.invalidInput);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput {...textInputConfig} style={[inputStyles, invalid && styles.invalidInput]} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },

    label: {
        fontSize: 12,
        color: GlobalStyles.colors.white,
        marginBottom: 4,
    },

    input: {
        backgroundColor: GlobalStyles.colors.lightGray,
        color: GlobalStyles.colors.black,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },

    inputMultiline: {
        minHeight: 50,
        textAlignVertical: 'top',
    },

    invalidLabel: {
        color: GlobalStyles.colors.error,
    },

    invalidInput: {
        backgroundColor: GlobalStyles.colors.error,
    },
})