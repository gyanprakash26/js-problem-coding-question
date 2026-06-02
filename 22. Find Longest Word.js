function longestWord(str) {
    let words = str.split(' ')
    return words.reduce((longest, current)=>{
        return longest.length > current.length ? longest : current
    })
}

console.log(longestWord("I love javascript programming"));