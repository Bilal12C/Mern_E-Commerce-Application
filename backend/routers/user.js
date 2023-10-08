const express = require('express');
const { AddUser, GetAllUser, GetSingleUser, LoginUser } = require('../controller/user');
const userrouter = express.Router();

userrouter.post('/',AddUser)
userrouter.get('/',GetAllUser)
userrouter.get('/:id',GetSingleUser)
userrouter.post('/login',LoginUser)
module.exports = userrouter;