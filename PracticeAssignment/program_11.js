// Write a function to count repeated characters in a string and print in a string format.

function RepeatedCharcaters(str){
    let obj = {}
    for(let i of str){
        if(obj[i] == undefined){
            obj[i] = 1
        }
        else{
            obj[i]++
        }
    }
    let temp = []
    for(let key in obj){
        if(obj[key] > 1){
            temp.push(`${key}: ${obj[key]}`)
        }
    }
    return temp.join(',')
}
console.log(RepeatedCharcaters('hareesh'));     // h: 2,e: 2
console.log(RepeatedCharcaters('itdefned'));    // d: 2,e: 2
