let pizzUni = require('./pizza')
let {assert} = require('chai')

describe("Tests …", function() {
    describe("tests …", function() {

        it("makeAnOrder …", function() {
            assert.throw(() => pizzUni.makeAnOrder({}), Error, 'You must order at least 1 Pizza to finish the order.')
            assert.equal(pizzUni.makeAnOrder({'orderedPizza': "A"}), `You just ordered A`)
            assert.equal(pizzUni.makeAnOrder({'orderedPizza': "A", 'orderedDrink': 'B'}), `You just ordered A and B.`)
        
        });
     });
     describe("tests …", function() {

        it("getRemainingWork …", function() {
            assert.equal(pizzUni.getRemainingWork([{'pizzaName': 'A', 'status': 'preparing'}]), `The following pizzas are still preparing: A.`)
            assert.equal(pizzUni.getRemainingWork([{'pizzaName': 'A', 'status': 'ready'}]), 'All orders are complete!')
        
        });
     });

     describe("tests …", function() {

        it("orderType …", function() {
            assert.equal(pizzUni.orderType(100, 'Carry Out'), 90)
            assert.equal(pizzUni.orderType(100, 'Delivery'), 100)
            //(‘Carry Out’ , ‘Delivery’)

        });
     });

});
