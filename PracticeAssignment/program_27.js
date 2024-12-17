// Write a function to find the second largest number in a nested array

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


function SecondMaximum(arr){
    arr = Flatten(arr)
    let max = arr[0]
    let second_max
    for(let i of arr){
        if(i>max){
            second_max = max
            max = i
        }
    }
    return second_max
}

let arr = [[1,2,3,4],[5,6,7,8,10],[11,12,0,1,2]]
console.log(SecondMaximum(arr)); // 11

