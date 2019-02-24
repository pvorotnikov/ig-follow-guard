const express = require('express')
const { logger, responses } = require('../lib')
const { SuccessResponse, ErrorResponse, HTTPError } = responses

module.exports = function(app) {

  const router = express.Router()
  app.use('/signin', router)

  router.get('/', async (req, res, next) => {

    try {
      res.json(new SuccessResponse())
    } catch (err) {
      res.status(err.status || 500).json(new ErrorResponse(err.message))
    }

  })

}
