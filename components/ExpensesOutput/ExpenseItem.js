// 134 created, called in ExpensesList
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ExpenseItem({ description, amount, date }) {
  return (
    // 134 created markup and added styles
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date.toString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  // 134 container for expenses
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.grey500,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
  },
  // 134 gives white color to text items inside container
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  // 134 increase the size of font, make them bolder, add little margin to bottom
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  // 134 makes the white box that contains amount
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  // 134 change the color to purple inside white box and make amount bold
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
