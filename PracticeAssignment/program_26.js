// Write a function to convert a string from snake_case to camelCase

function SnakeToCamelCase(str){
    if(!str.includes("_")){
        return "Invalid input"
    }
    str = str.split('_')
    str.forEach((cap,index,array) => {
        array[index] = cap[0].toUpperCase() + cap.slice(1,)
    })
    return str.join('')
}

console.log(SnakeToCamelCase("hareesh_duddupudi")); // HareeshDuddupudi
console.log(SnakeToCamelCase("to_upper_case")); // ToUpperCase
console.log(SnakeToCamelCase("to_lower_case")); // ToLowerCase
console.log(SnakeToCamelCase("tolowercase"));  // Invalid input



