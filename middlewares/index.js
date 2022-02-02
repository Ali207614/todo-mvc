const jwt = require("jsonwebtoken")

function checkTokenExists (req,res,next) {
    try {
        if(req.cookies.token) {
            let payload = jwt.verify(req.cookies.token, 'SECRET_KEY')
            if(payload) {
                const users = require("../database/users.json")
                req.user = users.find(user => user.id === payload.id)
                next()
            } else throw 'error'
        } else throw 'error'
    } catch( err ) {
        console.log(err)
        res.redirect('/login')
    }
}

function checkTokenExists2 (req,res,next) {
    try {
        if(req.cookies.token) {
            let payload = jwt.verify(req.cookies.token, 'SECRET_KEY')
            if(payload) {
                res.redirect('/')
            } else throw 'error'
        } else throw 'error'
    } catch( err ) {
        next()
    }
}
function checkTokenExists3 (req,res,next) {
    try {
        if(req.cookies.token) {
            let payload = jwt.verify(req.cookies.token, 'SECRET_KEY')
            if(payload) {
                const users = require("../database/users.json")
                req.user = users.find(user => user.id === payload.id)
                if(req.user.isAdmin == true){
                    next()
                }
                else{
                    res.send("senga mumkin mas")
                }
            } else throw 'error'
        } else throw 'error'
    } catch( err ) {
        console.log(err)
        res.redirect('/login')
    }
}

module.exports = {
    checkTokenExists, checkTokenExists2,checkTokenExists3
}