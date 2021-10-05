let isSymmetric = require('../checkForSymmetry')
let {assert} = require('chai')

describe('test function isSymmetric', () =>{
    // Take an array as an argument
    //Return true if the input array is symmetric
    it("Return true if the input array is symmetric", () =>{
        assert.equal(isSymmetric([1, 1]), true)
    });
    //Return false for any input that isn’t of the correct type
    it("Return false for any input that isn’t of the correct type", () => {
        assert.equal(isSymmetric([1 , '1']), false)
    });
    //Otherwise, return false
    it ('return false if it is number', () => {
        assert.equal(isSymmetric(1), false)
    });
    it ('return false if it is string', () => {
        assert.equal(isSymmetric('a'), false)
    });
    it("Return true if the input array is symmetric with 3 numbers with the same value", () =>{
        assert.equal(isSymmetric([1, 1, 1]), true)
    });
    
    
})