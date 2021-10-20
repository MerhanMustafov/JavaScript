let { Repository } = require("./solution.js");
let {assert} = require('chai')


describe("Tests Repository", function () {
    beforeEach(function() {
        repo = new Repository({name: "string", age: "number", birthday: "object"})
        validEntity = {name: "Pesho", age: 22, birthday:{}};
        newValidEntity = {name: "Pesho", age: 22, birthday:{}};
        invalidEntityPrp = {namee: "Pesho",age: 22,birthday:{}};
        invalidEntityTypeOf = {name: "Pesho", age: '22', birthday:{}};
    })
    describe("TESTS constructor and get count", function () {
        it('test count', ()=>{
            assert.deepEqual(repo.count, 0)
        })
    })
    describe ('TESTS add(entity)', () => {
        it('test _validate(entity) Exceptions from add(entity)', ()=>{
            assert.throw(() =>repo.add(invalidEntityPrp), Error, `Property name is missing from the entity!`)
            assert.throw(() => repo.add(invalidEntityTypeOf), TypeError, `Property age is not of correct type!`)
        })
        it('test add(entity) successfully returns id', ()=>{
            assert.deepEqual(repo.add(validEntity), 0)
        })
    })
    describe ('TESTS getId(id)', ()=>{
        it('test when throw new Error(...)', ()=>{
            assert.throw(()=> repo.getId(-1), Error, `Entity with id: -1 does not exist!`)
        })
        it('test getId(entity) works properly', ()=> {
            repo.add(validEntity)
            assert.equal(repo.getId(0), validEntity)
            assert.equal(repo.data.get(0), validEntity)
        })
    })
    describe ('TESTS update(id, newEntity)', ()=>{
        it('test when throw new Error()', ()=>{
            assert.throw(() => repo.update(-1, validEntity), Error, `Entity with id: -1 does not exist!`)
            repo.add(validEntity)
            assert.throw(() =>repo.update(0, invalidEntityPrp), Error, `Property name is missing from the entity!`)
            assert.throw(() => repo.update(0, invalidEntityTypeOf), TypeError, `Property age is not of correct type!`)
        })
        
        it('test update(id, newEntity) working properly', ()=>{
            repo.add(validEntity)
            assert.equal(repo.data.get(0), validEntity)
            repo.update(0, newValidEntity)
            assert.equal(repo.data.get(0), newValidEntity)
        })
    })
    describe ('TESTS del(id)', ()=>{
        it('test when throw new Error()', ()=>{
            assert.throw(() => repo.del(0), Error, `Entity with id: 0 does not exist!`)
            assert.throw(() => repo.del(-1), Error, `Entity with id: -1 does not exist!`)
        })
        it('test del(id) working properly', ()=>{
            repo.add(validEntity)
            repo.add(newValidEntity)
            repo.del(1)
            // assert.equal(repo.data.has(1), false)
            assert.equal(repo.data.get(1), undefined)
        })
    })
    
});


 