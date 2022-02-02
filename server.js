const express = require('express')
let app = express()
const path = require('path');
let host = 'localhost';
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
let PORT = 8080;

app.use( express.static( path.join(__dirname, 'public', ) ) )
app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )
app.use(cookie())
const modules = require('./modules')

app.use(modules)

app.listen(PORT, () => console.log('Server is running on http://' + host + ':' + PORT))