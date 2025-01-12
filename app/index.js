import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import ManageExpense from '../screens/ManageExpense';
import RecentExpense from '../screens/RecentExpense';
import Category from '../screens/Category';

import AllExpenses from '../screens/AllExpenses';
import { GlobalStyles } from '../constants/styles';
import IconButton from '../components/UI/IconButton';
import ExpensesContextProvider from '../store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary
                },
                headerTintColor: 'white',
                tabBarStyle: { backgroundColor: GlobalStyles.colors.primary },
                tabBarActiveTintColor: GlobalStyles.colors.light,
                headerRight: ({ tintColor }) => (
                    <IconButton
                        icon="add"
                        size={24}
                        color={tintColor}
                        onPress={() => {
                            navigation.navigate("ManageExpense");
                        }}
                    />
                )
            })}
        >
            <BottomTabs.Screen
                name="RecentExpense"
                component={RecentExpense}
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hourglass-sharp" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="AllExpense"
                component={AllExpenses}
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={size} color={color} />
                    ),
                }}
            />

            <BottomTabs.Screen
                name="Category"
                component={Category}
                options={{
                    title: 'Manage Category',
                    tabBarLabel: 'Category',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={size} color={color} />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <ExpensesContextProvider>
                <Stack.Navigator>
                    <Stack.Screen
                        name="ExpensesOverview"
                        component={ExpensesOverview}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="ManageExpense"
                        component={ManageExpense}
                        options={{
                            presentation: 'modal'
                        }}
                    />
                </Stack.Navigator>
            </ExpensesContextProvider>
        </>
    );
}
