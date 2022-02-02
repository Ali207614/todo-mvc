const router = require('express').Router()
const { GET, POST } = require('./controller')
const { checkTokenExists2 } = require('../../middlewares')

router.route( '/login')
          .get( checkTokenExists2, GET )
          .post(POST)
          
module.exports = router