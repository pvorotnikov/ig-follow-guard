const nconf = require('nconf')
const express = require('express')
const hat = require('hat')
const axios = require('axios')
const { logger, responses, auth, } = require('../lib')
const { SuccessResponse, ErrorResponse, HTTPError } = responses

module.exports = function(app) {

  const router = express.Router()
  app.use('/users', router)

  router.get('/me', auth.authorize(), async (req, res, next) => {
    try {
      res.json(new SuccessResponse(req.user))
    } catch (err) {
      res.status(err.status || 500).json(new ErrorResponse(err.message))
    }
  })

}
