const fs = require('fs')
const path = require('path')

const fetchAll = () => {
    let todos = fs.readFileSync(path.join(process.cwd(), 'database', 'todos.json'), 'UTF-8')
    todos = todos ? JSON.parse(todos) : []
    return todos
}

const insert = ({title}) => {
    try{
        let todos = fs.readFileSync(path.join(process.cwd(), 'database', 'todos.json'), 'UTF-8')
        todos = todos ? JSON.parse(todos) : [];
        let id = todos.length ? todos[todos.length - 1].id + 1 : 1
        let newTodo = {
            id,
            title,
            persmission: [1]
        }
        todos.push(newTodo)
        fs.writeFileSync(path.join(process.cwd(), 'database', 'todos.json'), JSON.stringify(todos,null,4))
        return newTodo
    } catch(err) {
        console.log(err)
    }
}

const remove = ({id}) => {
    try{
        let todos = fs.readFileSync(path.join(process.cwd(), 'database', 'todos.json'), 'UTF-8')
        todos = todos ? JSON.parse(todos) : [];
        let filtered = todos.filter(todo => todo.id !== id) 
        fs.writeFileSync(path.join(process.cwd(), 'database', 'todos.json'), JSON.stringify(filtered,null,4))
        return filtered
    } catch(err) {
        console.log(err)
    }
}

const update = ({id,title}) => {
    try {
        let todos = fs.readFileSync(path.join(process.cwd(), 'database', 'todos.json'), 'UTF-8')
        todos = todos ? JSON.parse(todos) : [];
        let found = todos.find(todo => todo.id == id)
        found.title = title
        console.log(found.title)
        fs.writeFileSync(path.join(process.cwd(), 'database', 'todos.json'), JSON.stringify(todos,null,4))
        return found
    } catch(err) {
        console.log(err)
    }
}

module.exports = { fetchAll,insert,remove,update }