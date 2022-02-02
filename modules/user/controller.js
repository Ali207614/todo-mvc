const model = require('./model')



const PUT = (req,res) => {
    let response = model.update(req.body)
    if(response){
        res.status(200).json({message: 'The todo has been updated!'})
    } else{ 
        res.json({message: 'Something went wrong'})
    }
}
const GET = (req,res) => {
    res.status(200).json(model.fetchAll())
}



module.exports = {GET, PUT }