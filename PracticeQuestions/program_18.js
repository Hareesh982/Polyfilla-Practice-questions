// Write a function for input: ["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"] and output [101, 1001, 3211]


let arr = ["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"]

console.log(arr.filter(str => !isNaN(Number(str))).map(num => Number(num)));


// [ 101, 1001, 3211 ]