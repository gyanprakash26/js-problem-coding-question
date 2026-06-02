const array = [ 1,5,0,0,3,0,9,6]

function zeroShifte(array){
    let j = 0;
    for(let i = 0;i<array.length;i++){
        if(array[i]!==0){
            array[j] = array[i]
            j++
        }
    }
    while(j<array.length){
        array[j] = 0
        j++
    }
    return array
}

console.log(zeroShifte(array))