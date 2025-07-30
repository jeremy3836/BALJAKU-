const input = document.querySelector('.insert');
const button = document.querySelector('.add');
const ul = document.querySelector('ul');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

todos.forEach((todo) => {
  const li = document.createElement('li');
  li.textContent = todo;
  ul.appendChild(li);
});

button.addEventListener('click', () => {
  const value = input.value;

  if (!value) return;

  const li = document.createElement('li');
  li.textContent = value;
  ul.appendChild(li);

  todos.push(value);

  localStorage.setItem('todos', JSON.stringify(todos));

  input.value = '';
});
