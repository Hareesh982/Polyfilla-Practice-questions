//  Input a = [2,3,4,5,3,3,5,2,5,3] and Output [ 5, 5, 5, 4, 3, 3, 3, 3, 2, 2]

let arr = [2,3,4,5,3,3,5,2,5,3]

n = arr.length
for(let i=0;i<n;i++){
    for(let j=0;j<n-1;j++){
        if(arr[j]<arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
}
console.log(arr);  //[5, 5, 5, 4, 3, 3, 3, 3, 2, 2 ]


