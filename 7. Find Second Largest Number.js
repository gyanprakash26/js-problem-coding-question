function secondLargest(number){
    let sorted= number.sort((a,b)=>a-b)
    return sorted[sorted.length-2]
}

console.log(secondLargest([1,12,3,4,5]))