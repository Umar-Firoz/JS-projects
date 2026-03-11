import { urls } from './data.js';
import { renderItem } from './render.js';
import { savetoStorage } from './script.js';

const name = document.querySelector('#name');
const url = document.querySelector('#url');

const addButton = document.querySelector('.addBtn');

export function add() {
  addButton.addEventListener('click', () => {
    const nameValue = name.value;
    const urlValue = url.value;

    if (!nameValue || !urlValue) return;

    if (duplicateCheck(normalize(urlValue))) {
      alert(
        'URl already exist with name : ' + duplicateCheck(normalize(urlValue))
      );
    } else {
      urls.push({
        nameValue,
        urlValue: normalize(urlValue),
        id: normalize(urlValue),
      });
      renderItem(nameValue, normalize(urlValue));
    }
    savetoStorage();
    name.value = '';
    url.value = '';
  });
}

function duplicateCheck(urlValue) {
  for (const u of urls) {
    if (u.id === urlValue) {
      return u.nameValue;
    }
  }
  return false;
}

function normalize(url) {
  let u = url.trim().toLowerCase();
  if (!u.startsWith('http://') && !u.startsWith('https://')) {
    u = 'https://' + u;
  }
  if (u.endsWith('/')) {
    u = u.slice(0, -1);
  }
  return u;
}
