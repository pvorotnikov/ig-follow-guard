const _ = require('lodash')
const chai = require('chai')
const request = require('supertest')
const sinon = require('sinon')
const should = chai.should()
const expect = chai.expect
const moxios = require('moxios')

const nconf = require('nconf')
const url = require('url')
const querystring = require('querystring')

const { expressApp, } = require('../_utils')
const signin = require('../../../handlers/signin')

describe('handlers/signin.js', function () {

  const app = expressApp([signin])
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  const state = 'https://example.com/#/welcome'

  describe('Signin request', function() {

    it('GET /signin', async () => {

      const res = await request(app)
      .get(`/signin?state=${Buffer.from(state).toString('base64')}`)

      res.status.should.equal(302)
      res.headers.location.should.be.a('string')
      const parsedUrl = url.parse(res.headers.location)
      const parsedQuery = querystring.parse(parsedUrl.query)
      Buffer.from(parsedQuery.state, 'base64').toString().should.equal(state)
      parsedQuery.response_type.should.equal('code')
      parsedQuery.redirect_uri.should.include(nconf.get('BASE_URL'))
    })

  })



})
