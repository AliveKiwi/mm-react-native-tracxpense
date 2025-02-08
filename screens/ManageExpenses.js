// 127 created
import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

export default function ManageExpenses({ route, navigation }) {
  // 139 added route
  // 139 added editedExpenseId
  // 139 added isEditing

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
