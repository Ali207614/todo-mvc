// console.log('hello it\'s me')

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
   let todos = await request('/api/todos', 'GET')
    console.log(todos)
   for(let todo of todos) {
    let todolistItem = document.createElement('li');
    let deleteButton = document.createElement('button');
    let text = document.createElement('span')
    deleteButton.setAttribute('class', 'btn btn-outline-danger');
    todolistItem.setAttribute('class', 'list-group-item d-flex align-items-center justify-content-between');
    text.contentEditable = true

    text.textContent = todo.title
    deleteButton.textContent = 'delete'


    todolistItem.appendChild(text)
    todolistItem.appendChild(deleteButton)
    list.appendChild(todolistItem)

    deleteButton.addEventListener('click', async e => {
       let ress = await request('/api/todos', 'DELETE', {id:todo.id})
       if(ress.message == 'The todo has been deleted!') {
        todolistItem.remove()
       } else {
           alert('Ruxsat yo\'q brat sizga')
       }
    }) 

    text.addEventListener('keypress',  async e => {
        if(e.keyCode == 13 && text.textContent.trim() !== "" ) {
            let res = await request('api/todos', 'PUT', {id: todo.id, title:text.textContent})
            window.location.reload()
        }
    })

   }
}

fetchTodos()