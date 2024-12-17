// Find a = [3,7,8,6,2,5] maximum and minimum number in array


function Maximum(a){
    let n = a.length
    let max = a[0]
    if(n == 0){
        return "Array should not be empty"
    }
    else if(n == 1){
        return a[0]
    }
    for(let i of a){
        if(i>max){
            max = i
        }
    }
    return `max => ${max}`
}


function Minimum(a){
    let n = a.length
    let min = a[0]
    if(n == 0){
        return "Array should not be empty"
    }
    else if(n == 1){
        return a[0]
    }
    for(let i of a){
        if(i<min){
            min = i
        }
    }
    return `Min => ${min}`
}

a = [3,7,8,6,2,5]
console.log(Maximum(a));  // max => 8
console.log(Minimum(a));  // Min => 2



