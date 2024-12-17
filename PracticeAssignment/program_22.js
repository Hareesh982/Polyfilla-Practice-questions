// Count the occurrences of each unique character in the string

function StringFrequency(str){
    let freq = {}
    for(let i of str){
        if(freq[i] == undefined){
            freq[i] = 1
        }
        else{
            freq[i]++
        }
    }
    return freq
}

console.log(StringFrequency('hareesh')); // { h: 2, a: 1, r: 1, e: 2, s: 1 }
console.log(StringFrequency('itdefined')); // { i: 2, t: 1, d: 2, e: 2, f: 1, n: 1 }
console.log(StringFrequency('Hello world')); // { H: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

