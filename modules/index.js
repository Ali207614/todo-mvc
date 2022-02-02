const homeRouter = require('./home');
const todoRoute = require('./todo');
const login = require('./login');
const register = require("./register");
const admin = require("./admin");
const user = require("./user");

module.exports = [
    homeRouter,
    todoRoute,
    login,
    register,
    admin,
    user
]