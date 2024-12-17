// Reverse the array without using built-in functions

function ReverseArray(arr){
    if(arr.length==1){
        return arr
    }
    else if(arr.length == 0){
        return "Empty Array"
    }
    let new_arr = []
    for(let i of arr){
        new_arr.unshift(i)
    }
    return new_arr
}

console.log(ReverseArray([1,2,3,4,5,6,7,8,9])); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(ReverseArray([]));  // Empty Array
console.log(ReverseArray([1])); // [ 1 ]



