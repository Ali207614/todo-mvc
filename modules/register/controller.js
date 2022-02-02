const model = require('./model')
const jwt = require('jsonwebtoken')

const GET = (req,res) => {
    res.sendFile( model.getFile('register.html') )
}

const POST = (req,res) => {
    let response = model.insert(req.body)
    if(response.ok) {
    let token = jwt.sign({id: response.newUser.id }, 'SECRET_KEY')
        res.cookie('token', token)
        res.send('<a href="/">Home</a>')
    } else {
        res.status(400).send('Something went wrong`')
    }
}

module.exports = { GET,POST }