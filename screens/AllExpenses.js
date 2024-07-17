// 127 created
import { StyleSheet } from 'react-native';
import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

export default function AllExpenses() {
  // 131 added ExpensesOutput
  return <ExpensesOutput expensesPeriod="Total" />;
}

const styles = StyleSheet.create({});
