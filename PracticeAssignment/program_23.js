// Write a function to find the second maximum and minimum numbers in an array.

function SecondMaximum(...arr){
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


function SecondMinimum(...arr){
    let min = arr[0]
    let second_min
    for(let i of arr){
        if(i<min){
            second_min = min
            min = i
        }
    }
    return second_min
}

console.log(SecondMaximum(1,2,3,4,5,6,7,8,9)); // 8
console.log(SecondMinimum(1,2,3,4,5,6,7,8,9,0)); //1

