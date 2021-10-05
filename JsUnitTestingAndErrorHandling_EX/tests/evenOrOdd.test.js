let isOddOrEven = require('../evenOrOdd')
let {assert} = require('chai')

describe("tests isOddOrEven function", () =>{
    it("test when not string", () => {
        //arrange
        let num = 1
        //act
        let result = isOddOrEven(num)
        //assert 
        assert.equal(result, undefined)

    });
    it("test when str length is even", () => {
        //arrange
        let str = "aabb"
        //act
        let result = isOddOrEven(str)
        //assert 
        assert.equal(result, 'even')

    });
    it("test when str length is odd ", () => {
        //arrange
        let str = "aabbB"
        //act
        let result = isOddOrEven(str)
        //assert 
        assert.equal(result, 'odd')

    });
})