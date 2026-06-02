function twoSum(array, traget) {
    for (let i = 0; i < array.length; i++) {
        let remain = array[i] - traget
        let value = array.find(element => element == remain)
        if (value) {
            return [i, array.indexOf(value)]
        }
    }
    
    return false
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]