

const http = new EasyHttp();

http.get("https://6afdbfd42a9c141d36b8fd18.mockapi.io/app/v1/users")
.then(data => console.log(data))
.catch(err => console.log(err));

const data = {
    name:"jagan javid"
}

const updateData = {
    name:"javid javid"
}


http.post("https://6afdbfd42a9c141d36b8fd18.mockapi.io/app/v1/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));


http.put("https://6afdbfd42a9c141d36b8fd18.mockapi.io/app/v1/users/3", updateData)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete("https://6afdbfd42a9c141d36b8fd18.mockapi.io/app/v1/users/6")
.then(data => console.log(data))
.catch(err => console.log(err));