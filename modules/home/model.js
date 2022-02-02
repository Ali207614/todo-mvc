let fs = require('fs')
const path = require('path')

const getFile = (htmlFile) => {
    return path.join(process.cwd(), 'views', htmlFile) 
}
 
module.exports = { getFile }