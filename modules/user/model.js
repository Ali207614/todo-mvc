let fs = require('fs')
const path = require('path')


const fetchAll = () => {
    let todos = fs.readFileSync(path.join(process.cwd(), 'database', 'users.json'), 'UTF-8')
    todos = todos ? JSON.parse(todos) : []
    return todos
}
const update = ({id,title , perId}) => {
    try {
        let todos = fs.readFileSync(path.join(process.cwd(), 'database', 'users.json'), 'UTF-8')
        todos = todos ? JSON.parse(todos) : [];
        let found = todos.find(todo => todo.id == id)
        console.log(found.persmission)
        if(title == true){
           found.persmission.push(+perId)
        }
        else{
            let ind = found.persmission.findIndex(item => item == +perId)
            found.persmission.splice(ind,1)
        }
        console.log(found)
        // found.title = title
        fs.writeFileSync(path.join(process.cwd(), 'database', 'users.json'), JSON.stringify(todos,null,4))
        return found
    } catch(err) {
        console.log(err)
    }
}
 
module.exports = { fetchAll ,update}