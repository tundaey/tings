const supertest = require('supertest');
const should = require('should');

const server = supertest.agent("http://localhost:4000")

//Begin unit test

describe("SAMPLE uit test", function(){
    it("should return home page jenkin", function(done){
        server.get("/")
        .expect("Content-type", /text/)
        .expect(200)
        .end(function(err, res){
            res.status.should.equal(200);
            done();
        })
    })
})