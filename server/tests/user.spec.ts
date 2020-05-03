const request = require("supertest");

import app from "../src/App";

// User: GET

describe("GET /user", () => {
  it("responds with 200", (done) => {
    request(app).get("/").expect(200, done);
  });
});
