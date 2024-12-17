// Write a function to remove duplicate characters in a string


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
    return unq.join('')
}

let str = "hareesh"
console.log(DuplicatesRemove(str.split('')));

// output => hares

