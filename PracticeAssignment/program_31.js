// Write a function to merge two arrays with extra zeros.

function MergeArray(array1,array2){
    let merged
    merged = array1.concat(array2,0,0,0)
    return merged
}
let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9]

console.log(array1); // [ 1, 2, 3, 4, 5 ]
console.log(array2); // [ 6, 7, 8, 9 ] 
console.log(MergeArray(array1,array2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]
