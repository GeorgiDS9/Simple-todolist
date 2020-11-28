// 1. select all elements
const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');

// 2. when I submit a form, add a new element
form.addEventListener('submit', e => {
  //1. create new item
  const item = document.createElement('div');
  item.innerHTML = input.value;
  item.classList.add('list-item');
  // console.log(item);

  //2. add new item to the list
  list.appendChild(item);

  //3. clear input
  input.value = '';

  //4. set up event listener to delete item when clicked
  item.addEventListener('click', () => {
    list.removeChild(item);
    // or: item.remove();
  })

  e.preventDefault(); // prevents the page refresh
  // console.log(input.value);
})