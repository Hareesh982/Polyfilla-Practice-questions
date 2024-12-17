// Write a function to flatten a nested array

function Flatten(arr){
    let flat = []
    function Flatten3dArray(arr){
        for(let i of arr){
            if(Array.isArray(i)){
                Flatten3dArray(i)
            }
            else{
                flat.push(i)
            }
        }
    }
    Flatten3dArray(arr)
    return flat
}

console.log(Flatten([[1,2,3],[4,5,6],[[7,8,9]]]));   // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(Flatten([0,[[1,2,3],[4,5,6],[7,8,9]]])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

