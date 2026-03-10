import { transactions } from './data.js';
import { addTransactions, transactionHTML } from './addTrans.js';
import { saveTransactions } from './script.js';
import { total } from './calculate.js';
import { del } from './deleteTrans.js';

const incomeBtn = document.getElementById('income-btn');
const expenseBtn = document.getElementById('expense-btn');

let transactionType = 'income'; // default

incomeBtn.addEventListener('click', () => {
  transactionType = 'income';

  incomeBtn.classList.remove('bg-gray-200', 'text-gray-700');
  incomeBtn.classList.add('bg-green-600', 'text-white');

  expenseBtn.classList.remove('bg-green-600', 'text-white');
  expenseBtn.classList.add('bg-gray-200', 'text-gray-700');
});

expenseBtn.addEventListener('click', () => {
  transactionType = 'expense';

  expenseBtn.classList.remove('bg-gray-200', 'text-gray-700');
  expenseBtn.classList.add('bg-green-600', 'text-white');

  incomeBtn.classList.remove('bg-green-600', 'text-white');
  incomeBtn.classList.add('bg-gray-200', 'text-gray-700');
});

const addbtn = document.querySelector('.cta-btn');
export function addingTrans() {
  addbtn.addEventListener('click', () => {
    const description = document.querySelector('.description-text').value;
    const amount = Number(document.querySelector('.amount-input-field').value);
    if (!description || !amount) return;
    if (amount < 0) return;
    const id = Date.now();

    transactions.push({
      name: description,
      amount: amount,
      transactionType,
      id: id,
    });
    saveTransactions();
    addTransactions(description, amount, transactionType, id);
    document.querySelector('.transitions-container').innerHTML =
      transactionHTML;
    
    total();
    
    document.querySelector('.description-text').value = '';
    document.querySelector('.amount-input-field').value = '';
  });
}
