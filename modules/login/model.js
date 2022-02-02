let fs = require('fs')
const path = require('path')

const getFile = (htmlFile) => {
    return path.join(process.cwd(), 'views', htmlFile) 
}

const insert = ({username,password}) => {
    try{
        let todos = fs.readFileSync(path.join(process.cwd(), 'database', 'users.json'), 'UTF-8')
        todos = todos ? JSON.parse(todos) : [];
        let id = todos.length ? todos[todos.length - 1].id + 1 : 1
        let newUser = {
            id,
            username,
            password,
            persmission: [1]
        }
        todos.push(newUser)
        fs.writeFileSync(path.join(process.cwd(), 'database', 'users.json'), JSON.stringify(todos,null,4))
        return newUser

    } catch(err) {
        console.log(err)
    }
}
 
module.exports = { getFile,insert }