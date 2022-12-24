// require express and express router
const express = require('express')
const router = express.Router()

// require Todo model
const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  Todo.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))
})

// export router module
module.exports = router