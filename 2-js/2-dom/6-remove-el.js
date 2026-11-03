

// Remove element

// const list = document.querySelector("li");

// list.remove();


// const lists = document.querySelectorAll("li");

// console.log(lists);

// lists.forEach(function(list){
//     list.remove();
// })

// Class and attr

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];



let val;


val = link.className; // String


val = link.classList; // DOMTOKENLIST


val.add("Javid");

val.remove("test");

val.replace("Javid", "Jagan");

console.log(val);


console.log(link);