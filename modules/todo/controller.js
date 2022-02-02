const model = require('./modul')

const GET = (req,res) => {
    res.status(200).json(model.fetchAll())
}

const POST = (req,res) => {
    let response = model.insert(req.body)
    if(response) {
        res.status(200).json(response)
    } else {
        res.status(400).send('Something went wrong`')
    }
}

const DELETE = (req,res) => {
    let response = model.remove(req.body)
    if(response){
        res.status(200).json({message: 'The todo has been deleted!'})
    } else{ 
        res.json({message: 'Something went wrong'})
    }
}

const PUT = (req,res) => {
    let response = model.update(req.body)
    if(response){
        res.status(200).json({message: 'The todo has been updated!'})
    } else{ 
        res.json({message: 'Something went wrong'})
    }
}

module.exports = { GET,POST,DELETE,PUT }