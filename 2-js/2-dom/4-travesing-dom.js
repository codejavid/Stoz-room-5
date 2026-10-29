
let val;

const list = document.querySelector(".collection");
const firstListItem = document.querySelector("li:nth-child(1)");
const lastListItem = document.querySelector("li:nth-child(5)");

val = list;

// Get the children element node
val = list.children;
val = list.children[2].children[0];


// First child
val = list.firstElementChild;

// last child
val = list.lastElementChild;

// Child count
val = list.childElementCount;

// Get the parent node
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Get a next sibling
val = firstListItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;


// Get a previous sibling
val = lastListItem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

console.log(val);