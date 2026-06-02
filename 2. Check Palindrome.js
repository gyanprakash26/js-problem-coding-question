function isPalindrome(str) {
    let reversed = str.split('').reverse().join('')
    return str === reversed;
}

console.log(isPalindrome("racecar")) // true

// with out inbuilt method

let newStr = "racecar"
let reverseStr =""
for (let i = newStr.length - 1; i >= 0; i--) {
    reverseStr += newStr[i]
}
console.log(reverseStr) // "racecar"
console.log(newStr === reverseStr) // true