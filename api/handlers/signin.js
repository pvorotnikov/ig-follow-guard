const nconf = require('nconf')
const express = require('express')
const hat = require('hat')
const axios = require('axios')
const querystring = require('querystring')
const { logger, responses, auth, } = require('../lib')
const { SuccessResponse, ErrorResponse, HTTPError } = responses

module.exports = function(app) {

  const router = express.Router()
  app.use('/signin', router)

  const OAUTH_CODE_URL = 'https://api.instagram.com/oauth/authorize/'
  const OAUTH_TOKEN_URL = 'https://api.instagram.com/oauth/access_token'
  const IG_REDIRECT_URL = `${nconf.get('BASE_URL')}/signin/ig`

  router.get('/', async (req, res, next) => {

    try {
      const state = req.query.state || hat(32)
      const clientId = nconf.get('IG_CLIENT_ID')

      res.redirect(`${OAUTH_CODE_URL}?client_id=${clientId}&redirect_uri=${IG_REDIRECT_URL}&response_type=code&state=${state}`)

    } catch (err) {
      res.status(err.status || 500).json(new ErrorResponse(err.message))
    }

  })

  router.get('/ig', async (req, res, next) => {

    const state = Buffer.from(req.query.state, 'base64').toString('utf8')

    try {

      if (!req.query.code) {
        throw new HTTPError(req.query.error_description)
      }

      try {
        // exchange code for access token
        const tokenResponse = await axios.post(OAUTH_TOKEN_URL, querystring.stringify({
          client_id: nconf.get('IG_CLIENT_ID'),
          client_secret: nconf.get('IG_CLIENT_SECRET'),
          grant_type: 'authorization_code',
          redirect_uri: IG_REDIRECT_URL,
          code: req.query.code,
        }))

        // TODO: store access token and user info
        const accessToken = tokenResponse.data.access_token
        const user = tokenResponse.data.user
        const userId = user.id

        // create JWT token
        const token = await auth.createToken(user)

        res.redirect(state + `?success=${token}`)

      } catch (err) {
        throw new HTTPError(err.toString())
      }

    } catch (err) {
      res.redirect(state + `?error=${err.message}`)
    }

  })

}
