import { urls } from './data.js';
import { add } from './addUrl.js';
import { savetoStorage } from './script.js';

export function renderItem(name, url) {
  const container = document.querySelector('.bookmarks-container');

  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.className =
    'bookmarked-item w-full block p-3 md:p-4 text-[20px] cursor-pointer hover:bg-gray-50 font-medium text-green-600 outline outline-gray-300 rounded-[5px] flex justify-between relative';

  a.innerHTML = `
    ${name}
    <div class="removeBtn bg-red-600 text-white py-2 px-4 absolute right-2 top-1/2 -translate-y-1/2 rounded-[7px]">
      Remove
    </div>
  `;

  const removeBtn = a.querySelector('.removeBtn');

  removeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const index = urls.findIndex((u) => u.urlValue === url);
    if (index !== -1) {
      urls.splice(index, 1);
      savetoStorage();
    }

    a.remove();
  });

  container.appendChild(a);
}
