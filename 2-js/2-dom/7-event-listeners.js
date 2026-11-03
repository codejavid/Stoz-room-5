

// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     console.log("Hello");
// })


// function x(){
//     console.log("ABC");
// }

// x();


let count = 0;

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(){
    
    count++

    document.querySelector("#task-title").innerText = count;

    const body = document.querySelector("body");

    // body.classList.add("add-color");
    body.classList.toggle("add-color");

}