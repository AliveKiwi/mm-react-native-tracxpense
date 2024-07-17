// 129 created, called in ExpensesOutput
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { GlobalStyles } from '../../constants/styles';

// 130 added props expenses, periodName through destructuring
export default function ExpensesSummary({ expenses, periodName }) {
  // 130 total the expenses into single value expensesSum
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    // 133 added style container to parent View, and period, sum to child Text
    <View style={styles.container}>
      <Text style={styles.period}>Last 7 Days</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // 133 made parent View into header with split text
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // 133 changing font size and text color of Text where style is period
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  // 133 changing font size and text color of Text where style is sum
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});
