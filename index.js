document.addEventListener("DOMContentLoaded", displayItems);

const shoppingList = [];
const ul = document.querySelector("ul");
const addItem = document.querySelector("#Add");
const deleteButton = document.querySelector("#Delete");

function displayItems() {
  ul.innerHTML = "";
  shoppingList.forEach(makeList);
}
function makeList(item) {
  const li = document.createElement("li");
  li.innerText = item;
  ul.appendChild(li);

  // edit item
  li.addEventListener("dblclick", editItem);
  function editItem() {
    li.contentEditable = true;
    addEventListener("keydown", stopEdditing);
    function stopEdditing(event) {
      if (event.code === 'Enter') {
        li.contentEditable = false
        console.log("almost there");
      }
    }}

  // Checked
  li.addEventListener("click", linethrough);
  function linethrough() {
    li.style.textDecoration = "line-through";
  }
}
// submission of form
const form = document.querySelector("form");
form.addEventListener("submit", updateList);

function updateList(list) {
  shoppingList.push(list.target[0].value);
  list.preventDefault();
  list.target.reset();

  displayItems();
}
//Delete function
deleteButton.addEventListener("click", deleteList);

function deleteList() {
  shoppingList.length = 0;
  console.log(shoppingList);
  displayItems();
}
