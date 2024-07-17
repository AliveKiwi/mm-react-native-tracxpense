// 127 created
import { StyleSheet } from 'react-native';
import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

export default function RecentExpenses() {
  // 131 added ExpensesOutput
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

const styles = StyleSheet.create({});
