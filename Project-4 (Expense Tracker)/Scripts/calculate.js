import { transactions } from './data.js';

const totalBalance = document.querySelector('#total-balance');
const totalIncome = document.querySelector('#income-amt');
const totalExpense = document.querySelector('#expense-amt');

export function total() {
  let totalAmt = 0;
  let incomeAmt = 0;
  let expenseAmt = 0;
  transactions.forEach((t) => {
    if (t.transactionType==="income")
    {
      incomeAmt+=t.amount;
    }
    else {
      expenseAmt+=t.amount;
    }
  });
  totalBalance.innerText = `$${incomeAmt-expenseAmt}`;
  totalIncome.innerText=`$${incomeAmt}`;
  totalExpense.innerText=`$${expenseAmt}`;
}




