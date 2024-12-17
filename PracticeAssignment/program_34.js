// Write a function to find how many times each element is repeated in an array.


function ArrayFrequency(){
    let obj = {}
    for(let i of arr){
        if(obj[i] == undefined){
            obj[i] = 1
        }
        else{
            obj[i]++
        }
    }
    return obj
}

let arr = [1,2,3,4,5,6,0,1,2,4,5,6,3,2,8,9,0,'hi','hi']
console.log(ArrayFrequency());

// {        
//   '0': 2,
//   '1': 2,
//   '2': 3,
//   '3': 2,
//   '4': 2,
//   '5': 2,
//   '6': 2,
//   '8': 1,
//   '9': 1,
//   hi: 2
// }