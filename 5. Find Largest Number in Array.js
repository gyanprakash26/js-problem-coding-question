function findLargestNumber(array){
    let maxValue = array[0]
    for (let i = 1; i < array.length; i++) {
        if(maxValue < array[i]){
            maxValue = array[i]
        }        
    }
    return maxValue
}

console.log(findLargestNumber([1,12,3,4,5]))
