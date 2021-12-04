let numberOperations = require('../03. Number Operations_Resources')
let {assert} = require('chai')

describe('test numberOperations', () => {
    describe ('powNumber', () => {
        it('test powNumber', ()=>{
            assert.equal(numberOperations.powNumber(2), 4)
        })
    })
    describe ('numberChecker first if case', () => {
        it('test numberChecker first if case', () => {
            assert.throws(() => {numberOperations.numberChecker('a')}, Error, 'The input is not a number!')
        })
        it('test numberChecker second if case', () => {
            assert.equal(numberOperations.numberChecker(1), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(-1), 'The number is lower than 100!')
        })

        it('test numberChecker else case', () => {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!')
      
        })
    })
    describe ('tests sumArrays', ()=>{
        it('test sumArrays', ()=>{
            assert.deepEqual(numberOperations.sumArrays([1, 2], [1]), [2, 2])
            assert.deepEqual(numberOperations.sumArrays([1], [1, 2]), [2, 2])
            assert.deepEqual(numberOperations.sumArrays([1, 2], [1, 2]), [2, 4])
        })
    })
})

