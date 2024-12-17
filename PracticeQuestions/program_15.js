// Write a program to find the missing numbers in an array containing numbers from 1 to 100.

let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 16, 17, 18, 19, 20, 
    22, 23, 24, 25, 26, 27, 28, 29, 30, 
    31, 33, 34, 35, 36, 37, 38, 39, 40, 
    41, 42, 43, 44, 45, 46, 47, 48, 50, 
    51, 52, 53, 54, 55, 56, 57, 58, 59,
    61, 62, 63, 64, 65, 67, 68, 69, 70, 
    71, 72, 73, 74, 75, 76, 78, 79, 80, 
    81, 83, 84, 85, 86, 87, 88, 89, 90, 
    91, 92, 93, 95, 96, 97, 98, 99, 100
];

let MissingValues = []
for(let i=1;i<=100;i++){
    if(arr.includes(i)){
        continue
    }
    MissingValues.push(i)
}
console.log(MissingValues);

// [
//     12, 13, 14, 15, 21,
//     32, 49, 60, 66, 77,
//     82, 94
//   ]

