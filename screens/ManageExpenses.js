// 127 created
import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';

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

  // 140 added deleteExpenseHandler
  // 142 added goBack to close the modal
  function deleteExpenseHandler() {
    navigation.goBack();
  }

  // 141 added cancelHandler
  // 142 added goBack to close the modal
  function cancelHandler() {
    navigation.goBack();
  }

  // 141 added cancelHandler
  // 142 added goBack to close the modal
  function confirmHandler() {
    navigation.goBack();
  }

  // 140 added View, IconButton
  // 141 added Cancel Button amd Update : Add Button
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

// 140 added container and deleteContainer styles
// 140 deleteContainer is used to style the delete button
// 141 buttons to make the buttons align in a row
// 141 button is used to pass custom/specfic style to the button
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
