let ChristmasMovies = require('./02. Christmas Movies_Resources')
let {assert} = require('chai')


describe("TESTS ----> ChristmasMovies …", function() {
    beforeEach(()=>{
        christmas = new ChristmasMovies();
    })

    describe("TESTS ----> constructor", function() {
        it("initial this values", function() {
            assert.deepEqual(christmas.movieCollection, [])
            assert.deepEqual(christmas.watched, {})
            assert.deepEqual(christmas.actors, [])
        });
     });

     describe('TESTS ----> buyMovie', ()=>{
         it('when movie is undefined', ()=>{
             assert.deepEqual(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe']), 'You just got Home Alone to your collection in which Macaulay Culkin, Joe are taking part!')
             assert.deepEqual(christmas.movieCollection, [{ 'name': 'Home Alone', 'actors':['Macaulay Culkin', 'Joe'] }])
             assert.deepEqual(christmas.buyMovie('HAlone', ['Macaulay Culkin', 'Joe', 'Joe']), 'You just got HAlone to your collection in which Macaulay Culkin, Joe are taking part!')
         })
         it('when throws Error', ()=>{
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe'])
            assert.throw(()=> christmas.buyMovie('Home Alone', ['Macaulay Culkin']), Error, `You already own Home Alone in your collection!`)
         })
     })

     describe("TESTS ---> discardMovie", ()=> {
        it('when filtered length === 0 throws and error', ()=>{
             assert.throw(() =>christmas.discardMovie('Home Alone'), Error, `Home Alone is not at your collection!`)
        })
        it('if (this.watched.hasOwnProperty(name))', ()=>{
            christmas.buyMovie('Home Alone')
            christmas.watched['Home Alone'] = 1
            assert.equal(christmas.discardMovie('Home Alone'), 'You just threw away Home Alone!')
        })
        it('else case', ()=>{
            christmas.buyMovie('Home Alone')
            assert.throw(()=> christmas.discardMovie('Home Alone'),Error, `Home Alone is not watched!`)
        })
     })

     describe("TESTS ---> watchMovie", ()=> {
        it('when there is no movie throw and error', ()=>{
             assert.throw(() =>christmas.watchMovie('Home Alone'), Error, 'No such movie in your collection!')
        })
        it('if there is movie but is not in the watched object', ()=>{
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe'])
            christmas.watchMovie('Home Alone')
            assert.deepEqual(christmas.watched, {'Home Alone': 1})
        })
        it('if there is movie and it is already in the watched obj', ()=>{
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe'])
            christmas.watched['Home Alone'] = 1
            christmas.watchMovie('Home Alone')
            assert.deepEqual(christmas.watched, {'Home Alone': 2})
        })
     })

    describe("TESTS ---> favouriteMovie", ()=> {
        it('when filtered length === 0', ()=>{
            assert.throw(() =>christmas.favouriteMovie(), Error, 'You have not watched a movie yet this year!')
        })
        it('if there is NO favourite', ()=>{
            christmas.watched['Home Alone'] = 1
            christmas.watched['She'] = 2
            assert.deepEqual(christmas.favouriteMovie(), 'Your favourite movie is She and you have watched it 2 times!' )          
        })
    })

    describe("TESTS ---> mostStarredActor", ()=> {
        it('when You have not watched a movie yet this year!', ()=>{
            assert.throw(() =>christmas.mostStarredActor(), Error, 'You have not watched a movie yet this year!')
        })
        it('If you have, return the most starred actors ', ()=>{
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe'])
            assert.deepEqual(christmas.mostStarredActor(), 'The most starred actor is Macaulay Culkin and starred in 1 movies!' )
        })
        it('If you have, return the most starred actors ', ()=>{
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe'])
            christmas.buyMovie('heAndshe', ['Macaulay Culkin'])
            assert.deepEqual(christmas.mostStarredActor(), 'The most starred actor is Macaulay Culkin and starred in 2 movies!' )
        })
    })
});


