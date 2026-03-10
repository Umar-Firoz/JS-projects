import { transactions } from './data.js';
import { addTransactions, transactionHTML } from './addTrans.js';
import { addingTrans } from './pushTrans.js';
import { total } from './calculate.js';
import { del } from './deleteTrans.js';
const storedTransaction = JSON.parse(localStorage.getItem('allTransaction'));
if (transactions.length === 0) {
  localStorage.clear();
}
if (storedTransaction) {
  transactions.length = 0;
  transactions.push(...storedTransaction);
}

transactions.forEach((trans) => {
  addTransactions(trans.name, trans.amount, trans.transactionType ,trans.id);
});
document.querySelector('.transitions-container').innerHTML = transactionHTML;

addingTrans();
total();
del();
console.log(transactions);
export function saveTransactions() {
  localStorage.setItem('allTransaction', JSON.stringify(transactions));
}
