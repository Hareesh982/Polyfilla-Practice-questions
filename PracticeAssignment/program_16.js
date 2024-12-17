// Write a program to remove the middle element from an array, 
// or if the middle element is not there, remove every element except the first and last ones.

let arr = [1,15]
n = arr.length
if(n==2){
    console.log("No middle element");
}
else if(n == 3){
    arr.splice(1,1)
}
else{
    arr.splice(1,n-2)
}
console.log(arr);

// [ 1, 15 ]