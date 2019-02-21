var chai = require("chai"),
    should = chai.should(),
    expect = chai.expect,
    chaiHttp = require("chai-http"),
    app = require('../../app');

const model = require('./model');

chai.use(chaiHttp)
chai.should();

describe('User', function () {

  let totalUsers = 0;

  describe("List", () => {
    const url = "/users";
    it('should return a 200 response', function (done) {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          res.should.have.status(200);
          done();
      });
    });
    it('should return a list of values', function (done) {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          res.body.should.be.a('array');
          totalUsers = res.body.length;
          done();
      });
    });
  });

  describe("Detail", () => {
    const url = "/users/id/1";
    it('should return a 200 response', function (done) {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          res.should.have.status(200);
          done();
      });
    });
    it('should return an object', function (done) {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          res.body.should.be.a('object');
          done();
      });
    });
    it('should return an object with expected content', function (done) {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          expect(model.properties.length).to.equal(Object.keys(res.body).length);
          model.properties.forEach( property => {
              // check property existence
              expect(res.body).to.have.property(property.name);
              // check property type
              expect(res.body[property.name]).to.be.a(property.type);
            }
          )
          done();
        });
    });
  });

  describe("Post", () => {
    const url = "/users";

    const validUser = { "name": "peter", "email": "asd@gmail.com", role: "admin"};
    const invalidUser = { "name": "peter", "email": "asd@gmail.com", role: 2};
    const incompleteUser = { "email": "asd@gmail.com", role: "admin"};

    it('save ok a valid user', function (done) {
      chai.request(app)
        .post(url)
        .set('content-type', 'application/json')
        .send({user: validUser})
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('should return a list of values including new one', function (done) {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          res.body.should.be.a('array');
          expect(res.body.length).to.equal(totalUsers+1);
          done();
        });
    });
    it('fail when saving an invalid user', function (done) {
      chai.request(app)
        .post(url)
        .set('content-type', 'application/json')
        .send({user: invalidUser})
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});