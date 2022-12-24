// require express and express router
const express = require('express')
const router = express.Router()

// require router module
const home = require('./modules/home')
const todos = require('./modules/todos')

// 將網址結構符合字串的 request 導向相對應模組
router.use('/', home)
router.use('/todos', todos)

// exports router
module.exports = router