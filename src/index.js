const express = require('express');
const {engine} = require('express-handlebars')
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routers/')

app.use(express.static(path.join(__dirname,'public')))


//apply dde
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// HTTP logger
// app.use(morgan('combined'));


// Template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


route(app)
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})