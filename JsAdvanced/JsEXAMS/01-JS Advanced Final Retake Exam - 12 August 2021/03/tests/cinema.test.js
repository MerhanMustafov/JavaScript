let cinema = require('../cinema')
let {assert} = require('chai')

describe('test obj cinema', () => {
    describe ('test showMovies', () => {
        it("test movieArr == 0", () =>{
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')          
        })
        
        it("test else case", () => {
            assert.equal(cinema.showMovies(['Movie']), 'Movie')
            assert.equal(cinema.showMovies(['Movie', 'Horror']), 'Movie, Horror')
            assert.equal(cinema.showMovies(['Movie', 'Horror', 'Comedy']), 'Movie, Horror, Comedy')
        })
    })
    describe ('test ticketPrice', () => {
        it('test (schedule.hasOwnProperty(projectionType))', () => {
            assert.equal(cinema.ticketPrice("Normal"), 7.50)
            assert.equal(cinema.ticketPrice("Premiere"), 12.00)
            assert.equal(cinema.ticketPrice("Discount"), 5.50)

        })
        it('test else case', () => {
            // assert.throws(cinema.ticketPrice, Error, 'Invalid projection type.')
            assert.throws(() => {
                cinema.ticketPrice('a')
            }, Error,'Invalid projection type.');
        })
    })
    describe ('test swapSeatsInHall', () => {
        it('test if()', () => {
            assert.equal(cinema.swapSeatsInHall('1', 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(0, 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(-1, 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(1, 21), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(1, '1'), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(1, 0), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(1, -1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(21, 1), "Unsuccessful change of seats in the hall.")
           
        })
        it('test else case', () => {
            assert.equal(cinema.swapSeatsInHall(5, 1), "Successful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(1, 20), "Successful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(19, 2), "Successful change of seats in the hall.")
        })
    })
})