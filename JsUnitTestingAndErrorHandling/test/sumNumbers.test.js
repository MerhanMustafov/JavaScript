let sum = require('../sumOfNumbers.js')
let {assert } = require('chai')


describe("tests", () => {
    it("test function sum", () => {
        let res = sum([1, 2])
        assert.equal(res, 3)
    })
});