function flattenArray(arr){
    let result = arr.flat(Infinity)
    return result 
}


console.log(flattenArray([1,[2,[3,4]]]));
