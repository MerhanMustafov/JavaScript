import {array} from './demo2.js'

console.log("IMPORTET from demo3")
let num = array[array.length -1 ] + 1
export function takeArray(){
    array.push(num++)
    return array
}