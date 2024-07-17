// 129 created, called in ExpensesOutput
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// 130 added props expenses, periodName through destructuring
export default function ExpensesSummary({ expenses, periodName }) {
  // 130 total the expenses into single value expensesSum
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>Last 7 Days</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
