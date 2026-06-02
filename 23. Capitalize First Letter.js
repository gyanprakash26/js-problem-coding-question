function capitalize(str) {
    let words = str.split(' ')
    let capitalizedWords = words.map(word => {
        console.log(word)
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    // console.log(capitalizedWords)
    return capitalizedWords.join(' ')
}

console.log(capitalize("hello world"));