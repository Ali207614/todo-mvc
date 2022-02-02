const router = require('express').Router()
const { GET } = require('./controller')
const { checkTokenExists } = require('../../middlewares')

router.route('/')
          .get(checkTokenExists ,GET)
          
module.exports = router