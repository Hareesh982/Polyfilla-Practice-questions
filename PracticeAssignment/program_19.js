// Filter numeric palindromes from the input array

let arr = [121, 123, 454, "hello", 78987,"hi", 678, 22,]

console.log(arr.filter(num =>{
    let rev = 0
    let new_num = num
    if(typeof(num) == 'number'){
        while(new_num>0){
            let digit = new_num%10
            rev = rev * 10 + digit
            new_num = Math.floor(new_num/10)
        }
        if(num == rev){
            return num
        }
    }
}))

// [ 121, 454, 78987, 22 ]