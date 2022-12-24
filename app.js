const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// 僅在非正式環境時使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// require router
const routes = require('./routes')

require('./config/mongoose')

const app = express()

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting use
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// setting routes
app.use(routes)

// listen and start the server
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})