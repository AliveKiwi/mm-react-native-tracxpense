// 129 created, called in ExpensesOutput
import { StyleSheet, FlatList, Text } from 'react-native';
import React from 'react';

import ExpenseItem from './ExpenseItem';

// 132 added function to pass to renderItem
function renderExpenseItem(itemData) {
  // 134 commented
  // return <Text>{itemData.item.description}</Text>
  // 134 passing id, description, amount, date
  return <ExpenseItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    // 132 passed values to data, renderItem, keyExtractor
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
