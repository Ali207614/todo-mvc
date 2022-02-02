const model = require('./model')
const jwt = require('jsonwebtoken')

const RENDER = (req,res) => {
    res.sendFile( model.getFile('admin.html') )
}

const GET = (req,res) => {
    res.status(200).json(model.fetchAll())
}


const POST = (req,res) => {
    let {username, password} = req.body;
    let users = require("../../database/users.json");
    let user = users.find(user => user.username === username && user.password === password);
    if(!user){
       return  res.json({
            message: "Username or password incored"
       });
    }
    let token = jwt.sign({id: user.id }, 'SECRET_KEY')
    res.cookie('token', token).send("<a href='/'>Home</a>")
}

module.exports = { RENDER,POST,GET }