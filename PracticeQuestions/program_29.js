// Write a function to capitalize the first letter of each word in an array of strings

let arr = ['hi',"How","are","you"]

arr.forEach((str,index,array) => {
    array[index] = str[0].toUpperCase() + str.slice(1,)
})

console.log(arr); // [ 'Hi', 'How', 'Are', 'You' ]

