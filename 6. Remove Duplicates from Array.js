function removeDupliate(array) {
    let uniqueArray = []
    for (let i = 0; i < array.length; i++) {
        // console.log(uniqueArray.indexOf(array[i]))
        if(uniqueArray.indexOf(array[i]) == -1){
            uniqueArray.push(array[i])
        }
    }
    return uniqueArray
}

console.log(removeDupliate([1,2,3,4,5,1,2,3]))
