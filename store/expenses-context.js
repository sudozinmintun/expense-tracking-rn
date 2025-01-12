import { createContext, useReducer } from 'react';


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Buy Laptop',
        amount: 100,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e2',
        description: 'Taxi',
        amount: 200,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e3',
        description: 'Buy Printer',
        amount: 595,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e4',
        description: 'Coffee',
        amount: 20,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e5',
        description: 'Food',
        amount: 595,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e6',
        description: 'A book',
        amount: 595,
        date: new Date('2023-12-19'),
    },


    {
        id: 'e7',
        description: 'A book',
        amount: 595,
        date: new Date('2025-01-10'),
    },
];



export const ExpensesContext = createContext({
    expenses: [],

    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id, data: expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}

export default ExpensesContextProvider;