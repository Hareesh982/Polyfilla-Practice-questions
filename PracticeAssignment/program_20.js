// Find the length of the longest substring without repeating characters

let str = 'rajesh'

let arr = []

for(let i=0;i<str.length;i++){
    for(let j=i;j<str.length;j++){
        if(arr.includes(str.slice(i,j+1))){
            continue
        }
        arr.push(str.slice(i,j+1))
    }
}


let len = 0
let isDuplicate = true
for(let i of arr){
    for(let j of i){
        if(i.indexOf(j) != i.lastIndexOf(j)){
            isDuplicate = false
        }
    }
    if(isDuplicate){
        if(len>i.length){
            continue
        }
        else{
            len = i.length
        }
    }
}
console.log(arr);

console.log(len);



