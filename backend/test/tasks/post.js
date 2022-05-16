const expect = require("chai").expect;
const mongoose = require("mongoose");
const { describe } = require("mocha");
const request = require("supertest");

const app = require("../../app");
describe("POST /task", () => {
  before(function (done){
    mongoose.connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,})
      .then(function() {
        done();
      });
  });
  after(function (done){
    mongoose.connection.db.dropCollection('tasks',function(){
      done();
    });
  })

  it("Create new task", (done) => {
    request(app)
      .post("/tasks")
      .send({
        title: "test",
        progress: false,
        completed: false,
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("Created Task Successfully");
        done();
      });
  });
  it("Get Tasks", (done)=>{
    request(app)
      .get("/tasks")
      .end((err, res)=>{
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an("array");
        done();
      });
  })
  it("Get Filtered Tasks ", (done)=>{
    request(app)
      .get("/tasks?filter=progress")
      .end((err, res)=>{
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an("array");
        done();
      });
  })
});
