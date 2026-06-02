function maxChar(str) {
    let freq = {}
    let maxValue = 0
    let maxChar = ""
    for (let char of str){
        freq[char] = (freq[char] || 0) + 1
        if(freq[char] > maxValue){
            maxValue = freq[char]
            maxChar = char
        }
    }
    return {
        character: maxChar,
        frequency: maxValue
    }
}


console.log(maxChar("javascript"));