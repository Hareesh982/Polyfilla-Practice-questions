// Write a program to find the count of the maximum prefix and suffix that are the same in a given string.


function PrefixSufix(str) {
    const n = str.length
    let len = 0

    for(let i=1;i<=Math.floor(n/2);i++){
        let prefix = str.slice(0,i)
        let sufix = str.slice(n-i)

        if (prefix === sufix) {
            console.log(prefix)
            console.log(sufix)
            len = i
        }
    }
    return len
}

console.log(PrefixSufix("abcabcabc")) // 3
console.log(PrefixSufix("abcabc")); // 3
