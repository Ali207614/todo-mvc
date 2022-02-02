const router = require('express').Router()
const { GET ,PUT } = require('./controller')

router.route( '/user/admin')
          .get(GET )
          .put( PUT)


        
module.exports = router