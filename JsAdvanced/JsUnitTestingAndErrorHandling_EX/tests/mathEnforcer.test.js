let mathEnforcer = require('../mathEnforcer')
let {assert} = require('chai')

describe('test object mathEnforcer', () => {
    describe('test addfive', () => {
        it('test addfive when not number', () => {
            assert.equal(mathEnforcer.addFive("a"), undefined)
        });
        it('test addfive when positive number', () => {
            assert.equal(mathEnforcer.addFive(1), 6)
        });
        it('test addfive when negative number', () => {
            assert.equal(mathEnforcer.addFive(-1), 4)
        });
        it('test addfive when floating number', () => {
            assert.equal(mathEnforcer.addFive(1.1), 6.1)
        });
    });

    describe('test subtractTen', () => {
        it('test subtractTen when not number', () => {
            assert.equal(mathEnforcer.subtractTen("a"), undefined)
        });
        it('test subtractTen when positive number', () => {
            assert.equal(mathEnforcer.subtractTen(11), 1)
        });
        it('test subtractTen when negative number', () => {
            assert.equal(mathEnforcer.subtractTen(-1), -11)
        });
        it('test subtractTen when floating number', () => {
            assert.equal(mathEnforcer.subtractTen(1.1), -8.9)
        });
    });

    describe('test addfive', () => {
        it('test sum when num1 is diff than num', () => {
            assert.equal(mathEnforcer.sum("1", 2), undefined)
        });
        it('test sum when num2 is diff than num', () => {
            assert.equal(mathEnforcer.sum(2, '1'), undefined)
        });
        it('test sum when nums are of correct type', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2)
        });
        it('test sum when num1 is negative', () => {
            assert.equal(mathEnforcer.sum(-1, 1), 0)
        });
        it('test sum when num2 is negative', () => {
            assert.equal(mathEnforcer.sum(1, -1), 0)
        });
        it('test sum when num1 is floating num', () => {
            assert.equal(mathEnforcer.sum(1.1, 1), 2.1)
        });
        it('test sum when num2 is floating num', () => {
            assert.equal(mathEnforcer.sum(1, 1.1), 2.1)
        });
    });
    
});