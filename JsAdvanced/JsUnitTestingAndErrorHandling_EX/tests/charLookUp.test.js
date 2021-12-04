let lookupChar = require('../charLookup')
let {assert} = require('chai')

describe('tests on func lookupChar', () => {
    it('If the first parameter is NOT a string or the second parameter is NOT a number', () => {
        let str = 1
        let index = "a"

        let res = lookupChar(str, index)

        assert.equal(res, undefined)
    });
    it('If the first parameter is NOT a string', () => {
        let str = 1
        let index = 1

        let res = lookupChar(str, index)

        assert.equal(res, undefined)
    });
    it('If the second parameter is NOT a number', () => {
        let str = "abc"
        let index = "a"

        let res = lookupChar(str, index)

        assert.equal(res, undefined)
    });
    it('incorrect index positive', () => {
        let str = "abcd"
        let index = 4

        let res = lookupChar(str, index)

        assert.equal(res, "Incorrect index")
    });
    it('incorrect index negative', () => {
        let str = "abcd"
        let index = -4

        let res = lookupChar(str, index)

        assert.equal(res, "Incorrect index")
    });
    it('correct str and index', () => {
        let str = "abcd"
        let index = 3

        let res = lookupChar(str, index)

        assert.equal(res, "d")
    });

    it('floating point index', () => {
        let str = "abcd"
        let index = 3.1

        let res = lookupChar(str, index)

        assert.equal(res, undefined)
    });
})