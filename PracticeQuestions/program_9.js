// Write a function to remove duplicate arrays from an array of arrays.

let arr = [[1,2],
        [1,2,3],
        [1,2,3],
        [6,7],
        [10],
        [1,2]
    ]

function DuplicateArrays(arr){
    let unq = []
    for(let i=0;i<arr.length;i++){
        let temp = false
        for(let j=0;j<unq.length;j++) {
            if(EqualOrNot(arr[i],unq[j])){
                temp = true
                break
            }
        }
        if(!temp){
            unq.push(arr[i]);
        }
    }
    return unq
}


function EqualOrNot(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true
}
console.log(DuplicateArrays(arr))