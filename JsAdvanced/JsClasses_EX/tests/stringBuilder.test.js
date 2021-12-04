// let PaymentPackage = require('../stringBuilder')
// let {assert} = require('chai')

// describe("test PaymentPackage class", () =>{
//     it('test constructor', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.equal(instance.name, 'Name')
//         assert.equal(instance.value, 1)
//         assert.equal(instance.VAT, 20)
//         assert.equal(instance.active, true)
//     })
//     it('test get name()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.equal(instance.name, 'Name')
//     })
//     it('test set name()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.throw(() => instance.name = 1, 'Name must be a non-empty string')
//     })
//     it('test set name()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.throw(() => instance.name = '', 'Name must be a non-empty string')
//     })
//     it('test set name()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         instance.name = 'Pesho'
//         assert.equal(instance.name, 'Pesho')
//     })


//     it('test get value()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.equal(instance.value, 1)
//     })
//     it('test set value()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.throw(() => instance.value = '1', 'Value must be a non-negative number')
//     })
//     it('test set value()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.throw(() => instance.value = -1, 'Value must be a non-negative number')
//     })
//     it('test set value()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         instance.value = 5
//         assert.equal(instance.value, 5)
//     })


//     it('test get VAT()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.equal(instance.VAT, 20)
//     })
//     it('test set VAT()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.throw(() => instance.VAT = '1', 'VAT must be a non-negative number')
//     })
//     it('test set VAT()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.throw(() => instance.VAT = -1, 'VAT must be a non-negative number')
//     })
//     it('test set VAT()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         instance.VAT = 5
//         assert.equal(instance.VAT, 5)
//     })


//     it('test get active()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.equal(instance.active, true)
//     })
//     it('test set active()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         assert.throw(() => instance.active = '1', 'Active status must be a boolean')
//     })
//     it('test set active()', () => {
//         let instance = new PaymentPackage("Name", 1)
//         instance.active = false
//         assert.equal(instance.active, false)
//     })


//     // it('test toString()', () => {
//     //     let instance = new PaymentPackage("Name", 1)
//     //     assert.equal(instance.toString(), `Package: ${instance.name}` + (instance.active === false ? ' (inactive)' : ''),
//     //     `- Value (excl. VAT): ${instance.value}`,
//     //     `- Value (VAT ${instance.VAT}%): ${instance.value * (1 + instance.VAT / 100)}`)
//     // })


// })