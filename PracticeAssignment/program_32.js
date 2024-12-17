// Write a function to reverse a string without using built-in methods.

function StringReverse(str){
    let rev = ""
    for(let i of str){
        rev = i + rev
    }
    return rev
}
let str = 'Hareesh'
console.log(`Original string => ${str}`) // Original string => Hareesh
console.log("Reversed String =>",StringReverse("Hareesh")); // Reversed String => hseeraH
