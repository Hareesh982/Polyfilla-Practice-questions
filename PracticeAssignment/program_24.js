// Write a function to sort an array without using built-in methods.

function SortArrayAscending(arr){   // using rest operator to pack the elements into an array
    n = arr.length
    for(let i=0; i<n; i++){
        for(let j=0; j<n-1; j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

function SortArrayDescending(arr){
    n = arr.length
    for(let i=0; i<n; i++){
        for(let j=0; j<n-1; j++){
            if(arr[j]<arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}


console.log(SortArrayAscending([2,3,4,5,1,8,7,6,9,0]));  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(SortArrayAscending([9,8,7,6,1,2,3,4,5,6,7,8,9])); // [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9]

console.log(SortArrayDescending([2,3,4,5,1,8,7,6,9,0]));   // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(SortArrayDescending([9,8,7,6,1,2,3,4,5,6,7,8,9]))  // [9, 9, 8, 8, 7, 7, 6, 6, 5, 4, 3, 2,1]