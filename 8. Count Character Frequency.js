function mostRepeatedChar(str) {
    let freq = {}
    let maxChar = ''
    let maxCount = 0

    for (let char of str) {

        // Count characters
        freq[char] = (freq[char] || 0) + 1

        // Check if current character has highest count
        if (freq[char] > maxCount) {
            maxCount = freq[char]
            maxChar = char
        }
    }

    return {
        character: maxChar,
        count: maxCount
    }
}

console.log(mostRepeatedChar("hello world"))