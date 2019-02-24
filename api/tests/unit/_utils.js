const nconf = require('nconf')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

function expressApp(routers) {
  const app = express()

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  // bind routers
  routers.forEach(r => r(app))

  return app
}

module.exports = {
  expressApp,
}
