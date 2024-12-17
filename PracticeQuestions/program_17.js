// Write a function to calculate the factorial of a number

function Factorial(fact){
    if(fact<0){
        return "Invalid Input"
    }
    else if(fact == 1 || fact ==0){
        return 1
    }
    else{
        let res = 1
        for(let i=fact;i>0;i--){
            res = res * i
        }
        return res
    }
}
console.log(Factorial(5)); // 120
console.log(Factorial(6)); // 720
console.log(Factorial(0)); // 1
console.log(Factorial(1)); // 1
console.log(Factorial(2)); // 2
console.log(Factorial(-1)); // Invalid Input




