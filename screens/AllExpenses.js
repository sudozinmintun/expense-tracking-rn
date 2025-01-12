import { Text } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '@/store/expenses-context';

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    return (
        <ExpensesOutput
            expenses={expensesCtx.expenses}
            expensePeriod="Total"
            fallbackText="No  registered found!"
        />
    )
}

export default AllExpenses;