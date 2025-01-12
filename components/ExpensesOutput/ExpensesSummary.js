import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ExpensesSummary({ expenses, periodName }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);


    return (
        <View style={styles.container}>
            <Text style={styles.perdiod}>
                {periodName}
            </Text>
            <Text style={styles.sum}>
                ${expensesSum.toFixed(2)}
            </Text>
        </View>
    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.gray,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    perdiod: {
        fontSize: 12,
        color: GlobalStyles.colors.black,
    },

    sum: {
        fontSize: 12,
        color: GlobalStyles.colors.black,
        fontWeight: 'bold',
    }
});