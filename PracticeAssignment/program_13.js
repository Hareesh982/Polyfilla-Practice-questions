// Write a JavaScript code to extract numbers between two characters in a string and add them all

function AddNumbersBetweenStrings(str,str1,str2){
    pattern = new RegExp(`\\${str1}(\\d+)\\${str2}`, "g")
    let num = [...str.matchAll(pattern)].map(m => parseInt(m[1])).reduce((acc,ele)=>acc+ele,0)
    console.log(num);
    
}

AddNumbersBetweenStrings("@#$%{}[9]sdsd[10]ffs#$#$3432{}!~`~?","[","]") // 19
AddNumbersBetweenStrings("sihsi42424&%$^#$^#@!@}{'!412'","!","'") // 412
AddNumbersBetweenStrings("ab123ab565656ab123ab","ab","ab") // 246
