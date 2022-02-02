const router = require('express').Router()
const { RENDER, POST  } = require('./controller')
const { checkTokenExists3 } = require('../../middlewares')

router.route( '/admin')
          .get( checkTokenExists3, RENDER )
          .post(POST)

          
module.exports = router