// 135 added, called in ExpenseItem
export function getFormattedDate(date) {
  // 135 getMonth() return index of month
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
