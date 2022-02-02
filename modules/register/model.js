let fs = require('fs')
const path = require('path')

const getFile = (htmlFile) => {
    return path.join(process.cwd(), 'views', htmlFile) 
}

const insert = ({username,password, email}) => {
    try{
        let users = fs.readFileSync(path.join(process.cwd(), 'database', 'users.json'), 'UTF-8')
        users = users ? JSON.parse(users) : [];
        let isTrue = users.find(user => user.username === username);
        if(isTrue) 
            throw new Error("This user alredy declered!!");
        let id = users.length ? users[users.length - 1].id + 1 : 1;
        let newUser = {
            id,
            username,
            email,
            password,
            isAdmin:false,
            persmission: [1]
        }
        users.push(newUser)
        fs.writeFileSync(path.join(process.cwd(), 'database', 'users.json'), JSON.stringify(users,null,4))
        return {
            ok: true,
            message: "Data yozildi",
            newUser
        }

    } catch(err) {
        return {
            ok: false,
            message: err + ""
        }
    }
}
 
module.exports = { getFile,insert }