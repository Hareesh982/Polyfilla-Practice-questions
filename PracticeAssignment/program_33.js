// Write a deep clone function to create a copy of a nested object or array without any reference to the original.

function Clone(obj) {
    if(obj === null || typeof obj !== "object"){
        return obj;
    }
    if (Array.isArray(obj)) {
        let clonearr = []
        let n = obj.length
        for(let i=0;i<n;i++){
            clonearr[i] = Clone(obj[i])
        }
        return clonearr
    }

    let cloneobb = {}
    for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            cloneobb[key] = Clone(obj[key])
        }
    }
    return cloneobb
}

let obj = {
        "name":"Hareesh",
        "age":24,
        "full_name":{
            "first_name":"hareesh",
            "last_name":"duddupudi"
        }
    }
console.log(Clone(obj));


