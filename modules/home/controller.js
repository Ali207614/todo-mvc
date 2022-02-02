const model = require('./model')

const GET = (req,res) => {  
    res.sendFile( model.getFile('index.html') )
}

module.exports = { GET }