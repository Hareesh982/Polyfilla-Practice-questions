// Write a function to check if a given string is a palindrome.


function Palindrome(str){
    let temp = ""
    for(let i of str){
        temp = i + temp
    }
    if(temp === str){
        return `${str} is palindrome`
    }
    else{
        return `${str} is not palindrome`
    }
    
}

console.log(Palindrome('Gadag'.toLocaleLowerCase())); // gadag is palindrome
console.log(Palindrome('Malayalam'.toLocaleLowerCase())); // malayalam is palindrome
console.log(Palindrome('Racecar'.toLocaleLowerCase())); // racecar is palindrome
console.log(Palindrome('hi')); // hi is not palindrome




