let countId = 1;
export let transactionHTML = '';

export function addTransactions(description, amount, transactionType, id) {
  let color = 'bg-green-700';
  if (transactionType === 'expense') {
    color = 'bg-red-700';
  }

  transactionHTML += `<div id="transition${countId++}" class="py-4 pl-4 pr-20 md:py-6 md:pl-6 flex justify-between flex-none relative bg-white rounded-xl shadow hover:shadow-lg cursor-pointer overflow-hidden transition group">
      <div class="transition-name text-lg font-medium">${description}</div>
      <div class="transition-amt text-lg font-medium">$${amount}</div>
      <div data-id="${id}" class="delete-button absolute right-5 hidden group-hover:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path fill="none" stroke="#f22828" stroke-linecap="round" stroke-width="1.5" d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"/>
        </svg>
      </div>
      <div class="income-signifier w-1.25  ${color} absolute right-0 top-0 h-full"></div>
  </div>`;
}
