function missingNumber(numbers){
    const n = numbers.length + 1
    const expectedSum = (n*(n+1))/2
    const actualSum = numbers.reduce((acc,num)=>{
        return acc + num
    },0)
    return expectedSum - actualSum
}

console.log(missingNumber([1,2,4,5,6]))