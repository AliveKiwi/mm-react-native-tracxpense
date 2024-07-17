// 129 created
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

// 130 added props expenses, expensesPeriod through destructuring
export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      {/* 130 passing props to ExpensesSummary for destructuring */}
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

const styles = StyleSheet.create({});
