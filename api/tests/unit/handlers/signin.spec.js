const _ = require('lodash')
const chai = require('chai')
const request = require('supertest')
const sinon = require('sinon')
const should = chai.should()
const expect = chai.expect
const moxios = require('moxios')

const { expressApp, } = require('../_utils')
const signin = require('../../../handlers/signin')

describe('handlers/signin.js', function () {

  const app = expressApp([signin])
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  it('GET /signin', async () => {

    const res = await request(app)
    .get('/signin')

    res.status.should.equal(200)
    res.body.status.should.equal('ok')

  })

})
