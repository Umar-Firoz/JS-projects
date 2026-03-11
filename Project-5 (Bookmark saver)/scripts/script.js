import { urls } from './data.js';
import {add} from './addUrl.js';
import { renderItem } from './render.js';
const storedUrl = JSON.parse(localStorage.getItem('urlItem'));

if (storedUrl){
  urls.length=0;
  urls.push(...storedUrl);
}
urls.forEach((url)=>{
  renderItem(url.nameValue,url.urlValue);
})

add();
console.log(urls);
export function savetoStorage(){
  localStorage.setItem('urlItem',JSON.stringify(urls));
}
