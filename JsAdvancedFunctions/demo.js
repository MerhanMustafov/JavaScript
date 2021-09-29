function solve(num){
    num += 1
    console.log(num)
    function inner(){
        num += 5

    }
    console.log(inner())
    
}
function solve1(num){
    num += 50
    // console.log(num)
    

}

let num = 5
solve(num)
solve1(num)
console.log(5)