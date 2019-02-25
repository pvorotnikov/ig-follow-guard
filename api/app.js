// create configuration
const nconf = require('nconf')
nconf.env().defaults({
  PORT: 4000,
  JWT_SECRET: 'jwt-secret',
  IG_CLIENT_ID: 'none',
  IG_CLIENT_SECRET: 'none',
  BASE_URL: 'http://127.0.0.1:4000',
})

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const { logger, } = require('./lib')
const signin = require('./handlers/signin')
const users = require('./handlers/users')

// create app
const app = express()

// setup middleware
app.use(cors())
app.use(morgan('combined', { 'stream': logger.stream }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// route all requests to routes
signin(app)
users(app)

// catch 404 and forward it to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  logger.error(err.message)
  res.status(err.status || 500).json({message: err.message})
})

// export app
module.exports = app
