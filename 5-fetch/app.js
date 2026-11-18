

document.querySelector("#btn-1").addEventListener("click", getText)
document.querySelector("#btn-2").addEventListener("click", getJson);
document.querySelector("#btn-3").addEventListener("click", getApi)


function getText(){
    fetch("text.txt")
    .then(response => response.text())
    .then(data => document.querySelector("#output").innerText = data)
    .catch(err => console.log("Something went wrong"))
}

function getJson(){
    fetch("posts.json")
    .then(response => response.json())
    .then(data => {

        let output = "";

        data.forEach(post => {
            output += `<li>${post.title}</li>`
        })

        document.querySelector("#output").innerHTML = output;

    })
    .catch(err => console.log("Something went worng"))
   
}

function getApi(){
    fetch("https://6afdbfd42a9c141d36b8fd18.mockapi.io/app/v1/users")
    .then(res => res.json())
    .then(data => {

        let output = "";

        data.forEach(user => {
            output += `<li>${user.name}</li>`
        })

        document.querySelector("#output").innerHTML = output;

    })
    .catch(err => console.log("Something went worng"))
}
