// Given an array of objects representing people with their names and ages, 
// use filter to get only the people who are 18 or older, 
// and then use map to create an array of their names

const people = [{ name: "Alice", age: 25 },
                { name: "Bob", age: 17 },
                { name: "Charlie", age: 30 },
                { name: "David", age: 16 },
                { name: "Eve", age: 20 } 
            ];

let result = people.filter(num => num.age>=18).map(num => num.name)
console.log(result);


// [ 'Alice', 'Charlie', 'Eve' ]