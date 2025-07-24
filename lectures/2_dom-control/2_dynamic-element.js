let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removeTargetBtn = document.querySelector('#target-remove');
let removeBtn = document.querySelector('.remove-btn');

console.log(inputBox.value);
addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  //button.setAttribute('class', 'remove-btn');
  button.classList.add('remove-btn');
  button.addEventListener('click', removeParentNode);
  li.appendChild(button);
  ul.appendChild(li);
  inputBox.value = '';
  inputBox.focus();
});

addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetli = document.querySelector('li#target');
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetli);
});

removeTargetBtn.addEventListener('click', function () {
  let targetli = document.querySelector('li#target');
  targetli.remove();
});

removeBtn.addEventListener('click', removeParentNode);

function removeParentNode(event) {
  event.target.parentNode.remove();
  inputBox.value = '';
  inputBox.focus();
}
