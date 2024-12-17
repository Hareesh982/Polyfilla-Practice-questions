// Write a function to remove duplicate elements from an array without using default functions.


function DuplicatesRemove(arr){
    let unq = []
    for(let i of arr){
        if(unq.includes(i)){
            continue
        }
        else{
            unq.push(i)
        }
    }
    return unq
}
let arr = [1,2,3,4,5,4,3,2,3,4,5,6,7,5,4,3]
console.log(DuplicatesRemove(arr)); 

// [1, 2, 3, 4, 5, 6, 7]