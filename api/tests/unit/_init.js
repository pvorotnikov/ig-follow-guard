// configuration
const nconf = require('nconf')
nconf.env().defaults({
  PORT: 4000,
  JWT_SECRET: 'jwt-secret',
  IG_CLIENT_ID: 'none',
  IG_CLIENT_SECRET: 'none',
  BASE_URL: 'http://127.0.0.1:4000',
})

const chai = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)

const { logger, } = require('../../lib')

before(() => {
  logger.transports[0].silent = true
})

after(() => {
  logger.transports[0].silent = false
})
