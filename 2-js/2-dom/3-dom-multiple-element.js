

// document.getElementsByClassName();


// HTMLCollection
// const items = document.getElementsByClassName("collection-item");


// console.log(items);
// console.log(items);
// console.log(items[0]);
// console.log(items[1]);

// console.log(Array.isArray(items));


// items[0].style.color = "blue";
// items[1].style.color = "blue";

// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "blue"
// }

// Convert the HTMLCollection to array

// let lists = Array.from(items);


// console.log(lists);

// lists.forEach(function(li, index, arr){
//     li.style.color = "blue";
// })


// NodeList
const listItems = document.querySelectorAll(".collection-item");

console.log(listItems);

listItems.forEach(function(li){
     li.style.color = "blue";
})

