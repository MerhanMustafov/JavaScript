class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString
        this.innerLength = innerLength
    }
    decrease(length){
        this.innerLength -= length
        if (this.innerLength < 0){
            this.innerLength = 0
        }
    
    }
    increase(length){
        this.innerLength += length

    }
    toString(){
        return this.innerString === 0
            ? "..."
            : this.innerString.slice(0, this.innerLength) + '...'
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
