let testNumbers = require('./testNumbers')
let {assert} = require('chai')


describe('tests testNumbers', () =>{
    describe ('tests sumNumbers', () => {
        it('test if case', () => {
            assert.equal(testNumbers.sumNumbers('1', 1), undefined)
            assert.equal(testNumbers.sumNumbers(1, '1'), undefined)
        })
        it ('test else case', () => {
            assert.equal(testNumbers.sumNumbers(1, 1), 2)
        })
    })

    describe ('tests numberChecker', () => {
        it('test first if case', () => {
            assert.throws( () => {
                return testNumbers.numberChecker('[]'),
                Error,
                'The input is not a number!'})
        })
        it ('test seconn if case', () => {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!')
        })
        it ('test else case', () => {
            assert.equal(testNumbers.numberChecker(3), 'The number is odd!')
        })
    })

    describe ('tests averageSumArray', () => {
        it('test for loop', () => {
            assert.equal(testNumbers.averageSumArray([1, 2, 3]), 2)
        
        })

    })
})