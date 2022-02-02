const router = require('express').Router()
const { GET, POST, DELETE, PUT } = require('./controller');
const { checkTokenExists } = require("../../middlewares");
const { permission } = require('../../lib/permission')

router.route('/api/todo*')
    .get(checkTokenExists, permission(1), GET)
    .post(checkTokenExists,permission(2), POST)
    .delete(checkTokenExists,permission(3), DELETE)
    .put(checkTokenExists, permission(4), PUT)

module.exports = router