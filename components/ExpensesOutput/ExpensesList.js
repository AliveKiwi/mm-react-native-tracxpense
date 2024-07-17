// 129 created, called in ExpensesOutput
import { StyleSheet, FlatList, Text } from 'react-native';
import React from 'react';

// 132 added function to pass to renderItem
function renderExpenseItem(itemData) {
  return <Text>{itemData.item.description}</Text>;
}

export default function ExpensesList({ expenses }) {
  return (
    // 132 passed values to data, renderItem, keyExtractor
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});
