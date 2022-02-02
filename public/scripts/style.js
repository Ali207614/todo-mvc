
async function request(path,method, body) {
    let response = await fetch(path, {
        method,
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(body)
    })
    response = await response.json();
    return response;
}

async function fetchTodos() {
   let users = await request('/user/admin', 'GET')
   console.log(users)
   for(let item of users) {
       let userName = document.createElement("p")
       let email = document.createElement("p")
       let password = document.createElement("p")
        let userBox = document.createElement("div")

        let persmission1 = document.createElement("input")
        let persmission2 = document.createElement("input")
        let persmission3 = document.createElement("input")
        let persmission4 = document.createElement("input")

        persmission1.setAttribute("type","checkbox")
        persmission2.setAttribute("type","checkbox")
        persmission3.setAttribute("type","checkbox")
        persmission4.setAttribute("type","checkbox")
        persmission1.setAttribute("id",1)
        persmission2.setAttribute("id",2)
        persmission3.setAttribute("id",3)
        persmission4.setAttribute("id",4)
        userName.textContent = item.username
        email.textContent = item.email
        password.textContent = item.password
        userBox.classList.add("userbox")
        password.classList.add("text")
        email.classList.add("text")
        userName.classList.add("text")
        userWrap.append(userBox)
        userBox.append(userName)
        userBox.append(email)
        userBox.append(password)
        userBox.append(persmission1)
        userBox.append(persmission2)
        userBox.append(persmission3)
        userBox.append(persmission4)

        // let inp = document.querySelectorAll(".inp")
        // console.log(inp)

        for(let pers of item.persmission){
            if(pers == 1){
                persmission1.checked = true
            }
            if(pers == 2){
                persmission2.checked = true
            }
            if(pers == 3){
                persmission3.checked = true
            }
            if(pers == 4){
                persmission4.checked = true
            }
        }
        persmission1.addEventListener("click" , async e => {
            let res = await request('/user/admin', 'PUT', {id: item.id, title:persmission1.checked , perId:persmission1.id})            
        })
        persmission2.addEventListener("click" , async e => {
            let res = await request('/user/admin', 'PUT', {id: item.id, title:persmission2.checked , perId:persmission2.id})            
        })
        persmission3.addEventListener("click" , async e => {
            let res = await request('/user/admin', 'PUT', {id: item.id, title:persmission3.checked , perId:persmission3.id})            
        })
        persmission4.addEventListener("click" , async e => {
            let res = await request('/user/admin', 'PUT', {id: item.id, title:persmission4.checked , perId:persmission4.id})            
        })
   }
}

fetchTodos()

