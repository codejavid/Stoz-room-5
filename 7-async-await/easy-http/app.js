


const http = new EasyHttp();


http.get("https://6afdbfd42a9c141d36b8fd18.mockapi.io/app/v1/users")
.then(data => console.log(data))

const data = {
    name:"Jagan"
}

const data2 = {
    name:"javid"
}

http.post("https://6afdbfd42a9c141d36b8fd18.mockapi.io/app/v1/users", data)
.then(data => console.log(data))

http.put("https://6afdbfd42a9c141d36b8fd18.mockapi.io/app/v1/users/1", data2)
.then(data => console.log(data))

http.delete("https://6afdbfd42a9c141d36b8fd18.mockapi.io/app/v1/users/4")
.then(data => console.log(data))