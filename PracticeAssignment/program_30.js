// Write a function to calculate the sum of total marks in an array of objects.

let obj = [{subject : "physics", marks : 90},
            {subject : "maths", marks : 85},
            {subject : "chemistry", marks : 80},
            {subject : "ComputerScience",marks : 95}
]


console.log(obj.reduce((acc,ele) => acc+ele.marks,0)); // 350
