

// Define a UI vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


// Load all event listerners

function loadEventListerners(){

    // Add task event
    form.addEventListener("submit", addTasks);

    // Remove task list
    taskList.addEventListener("click", removeTask);

    // Clear Task list
    clearBtn.addEventListener("click", clearTask);


}

    // <li class="collection-item">
    //     List Item 1
    //     <a href="#" class="delete-item secondary-content test" title="im Link">
    //         <i class="fa fa-remove"></i>
    //     </a>
    // </li>

function addTasks(e){

    e.preventDefault();


    // Validate
    if(taskInput.value === ""){
        alert("Please fill the fields");
    }else{
       
        // Create element
        const li = document.createElement("li");

        // Class Name
        li.className = "collection-item";

        // Add a innerText
        li.innerText = taskInput.value;

        // Create a new link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add a icon
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Add a link to li
        li.appendChild(link);

        // Add a li to ul
        taskList.appendChild(li);

        // Clear the input value
        taskInput.value = "";

    }

}

function removeTask(e){
    
//    if(e.target.parentElement.className === "delete-item secondary-content"){
//      if(confirm("Are you sure?")){
//         e.target.parentElement.parentElement.remove();
//      }
//    }

 if(e.target.parentElement.classList.contains("delete-item")){
    if(confirm("Are you sure?")){
        e.target.parentElement.parentElement.remove();
    }
 }

}

function clearTask(){
    taskList.innerHTML = "";
}

loadEventListerners();