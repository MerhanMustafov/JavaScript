let dealership = require('./dealarship')
let {assert} = require('chai')



describe('test dealership', () => {
    describe ('newCarCost', () => {
        it('test if and else case', ()=>{
            assert.equal(dealership.newCarCost('Audi A4 B8', 15001), 1)
            assert.equal(dealership.newCarCost('Audi A4 B8', 15000), 0)
            assert.equal(dealership.newCarCost('Audi A4 B', 15000), 15000)
        })
    })
    describe ('carEquipment', () => {
        it('test carEquipment', () => {
            assert.deepEqual(dealership.carEquipment(['a', 'b', 'c', 'd'], [1, 2]), ['b', 'c'] )
        })
    })
    
    describe ('tests sumArrays', ()=>{
        it('test sumArrays', ()=>{
            assert.equal(dealership.euroCategory(1), 'Your euro category is low, so there is no discount from the final price!')
            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: ${14250}.`)
        })
    })
    describe ('tests sumArrays', ()=>{
        it('test sumArrays', ()=>{
        
        })
    })

})
