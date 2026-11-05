

// Set, get, remove

localStorage.setItem("tasks", "Hello");

console.log(localStorage.getItem("tasks"));

localStorage.removeItem("tasks");

console.log(localStorage.getItem("tasks"));


// JSON

const arr = [1,2,3];

console.log(arr);

const arrToSTring = JSON.stringify(arr);

console.log(arrToSTring);

const stringToArr = JSON.parse(arrToSTring);

console.log(stringToArr);

// console.log(String(arr));
