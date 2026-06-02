function findDuplicates(arr) {
    let duplicate = []
    arr.forEach((element, index) => {
        if (arr.indexOf(element) !== index &&  !duplicate.includes(element)){
            console.log("Duplicate element found")
            duplicate.push(element)
        }
        console.log(index,": ",element)
    });
    console.log(duplicate)
    return duplicate
}


console.log(findDuplicates([1,2,3,2,4,1]));