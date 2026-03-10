import { transactions } from './data.js';
import { addTransactions, transactionHTML } from './addTrans.js';
import { saveTransactions } from './script.js';
import { total } from './calculate.js';

export function del() {
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);

      const index = transactions.findIndex((t) => t.id === id);

      transactions.splice(index, 1);

      btn.closest('[id^="transition"]').remove();

      total();
      
    });
  });
  saveTransactions();
  
}
