// const cards = document.querySelectorAll('.card');
// const lists = document.querySelectorAll('.list');
//
// cards.forEach((card) => {
//   card.addEventListener('dragstart', dragStart);
//   card.addEventListener('dragend', dragEnd);
// });
//
// lists.forEach((list) => {
//   list.addEventListener('dragover', dragOver);
//   list.addEventListener('dragenter', dragEnter);
//   list.addEventListener('dragleave', dragLeave);
//   list.addEventListener('drop', dragDrop);
// });
//
// function dragStart(e) {
//   e.dataTransfer.setData('text/plain', this.id);
// }
// function dragEnd(e) {
//   console.log('Drag ended');
// }
// function dragOver(e) {
//   e.preventDefault();
// }
// function dragEnter(e) {
//   e.preventDefault();
// }
// function dragDrop(e) {
//   const id = e.dataTransfer.getData('text/plain');
//   const card = document.getElementById(id);
//   this.appendChild(card);
// }
// function dragLeave() {}
new Sortable(list1, {
  group: 'shared',
  animation: 150,
  ghostClass: 'opacity-35',
});

new Sortable(list2, {
  group: 'shared',
  animation: 150,
  ghostClass: 'opacity-35',
});

new Sortable(list3, {
  group: 'shared',
  animation: 150,
  ghostClass: 'opacity-35',
});
